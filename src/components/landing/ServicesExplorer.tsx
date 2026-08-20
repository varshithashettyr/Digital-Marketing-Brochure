import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type KeyboardEvent,
} from "react";

import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

import {
  ArrowRight,
  CalendarDays,
  Mail,
  CalendarCheck,
  Plane,
  FileText,
  FileSignature,
  Vault,
  Workflow,
  StickyNote,
  GraduationCap,
  Users,
  ClipboardCheck,
  Truck,
  Globe,
  Video,
  Share2,
  UserCog,
  FolderOpen,
  LayoutTemplate,
  FileSpreadsheet,
  BarChart3,
  Megaphone,
  Mic2,
  BadgeDollarSign,
  SpellCheck,
  BriefcaseBusiness,
  Presentation,
  X,
  ChevronRight,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import { serviceCategories } from "../../data/brickwork";

type SubKeyService = {
  name: string;
  href: string;
  icon: ElementType;
};

type KeyService = {
  name: string;
  href: string;
  subServices: SubKeyService[];
  color: string;
  icon: ElementType;
};

const LOGO_COLORS = {
  blue: "#0072CE",
  green: "#78BE20",
  orange: "#FF8200",
  pink: "#E00070",
};

const MAIN_VISUAL_IMAGE = "/images/executive-admin-main-bg.png";

function shuffleBrandColors(colors: string[]): string[] {
  const next = [...colors];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }

  return next;
}

function getActiveRingColor(angleDeg: number): string {
  const normalizedAngle = ((angleDeg % 360) + 360) % 360;

  // Painted ring quadrants (0° = right, clockwise, y-down):
  // Blue: top → right, Green: right → bottom,
  // Orange: bottom → left, Pink: left → top
  if (normalizedAngle >= 0 && normalizedAngle < 90) {
    return LOGO_COLORS.green;
  } else if (normalizedAngle >= 90 && normalizedAngle < 180) {
    return LOGO_COLORS.orange;
  } else if (normalizedAngle >= 180 && normalizedAngle < 270) {
    return LOGO_COLORS.pink;
  } else {
    return LOGO_COLORS.blue;
  }
}

export function ServicesExplorer() {
  const executiveAdmin = serviceCategories.find(
    (service) =>
      service.title.trim().toLowerCase() === "executive admin services"
  );

  const baseKeyServices: KeyService[] = [
    {
      name: "Proposals and RFP Management",
      href: "https://www.brickworkindia.com/sales-and-digital-marketing/proposals-and-rfp-management",
      color: LOGO_COLORS.blue,
      icon: FileText,
      subServices: [
        ["RFP Analysis and Bid Qualification Services", FileText],
        ["Proposal Writing and Proposal Development", FileSignature],
        ["Pricing, Compliance, and Bid Management", BadgeDollarSign],
        ["Value Proposition and Solution Articulation", Megaphone],
        ["End-to-End Proposal Submission Management", ClipboardCheck],
      ].map(([name, icon]) => ({ name: name as string, href: "https://www.brickworkindia.com/sales-and-digital-marketing/proposals-and-rfp-management", icon: icon as ElementType })),
    },
    {
      name: "Customer Engagement & Account Support",
      href: "https://www.brickworkindia.com/sales-and-digital-marketing/customer-engagement-and-account-support",
      color: LOGO_COLORS.green,
      icon: Users,
      subServices: [
        ["CRM Data Management and Administration", FolderOpen],
        ["Customer Communication and Engagement Support", Mail],
        ["Client Meeting Coordination and Follow-Ups", CalendarCheck],
        ["Account Renewal and Upsell Support", BadgeDollarSign],
        ["Customer Feedback and Satisfaction Tracking", ClipboardCheck],
      ].map(([name, icon]) => ({ name: name as string, href: "https://www.brickworkindia.com/sales-and-digital-marketing/customer-engagement-and-account-support", icon: icon as ElementType })),
    },
    {
      name: "Brand Identity & Logo Design",
      href: "https://www.brickworkindia.com/sales-and-digital-marketing/brand-identity-and-logo-design",
      color: LOGO_COLORS.orange,
      icon: BriefcaseBusiness,
      subServices: [
        ["Brand Strategy and Market Positioning", BriefcaseBusiness],
        ["Professional Logo Design Services", LayoutTemplate],
        ["Logo Redesign and Brand Refresh", LayoutTemplate],
        ["Corporate Brand Guidelines Development", FileText],
        ["Typography and Color Palette Design", FileSpreadsheet],
        ["Digital Brand Asset Creation", Globe],
      ].map(([name, icon]) => ({ name: name as string, href: "https://www.brickworkindia.com/sales-and-digital-marketing/brand-identity-and-logo-design", icon: icon as ElementType })),
    },
    {
      name: "Creative Design",
      href: "https://www.brickworkindia.com/sales-and-digital-marketing/creative-design",
      color: LOGO_COLORS.pink,
      icon: LayoutTemplate,
      subServices: [
        ["Marketing Collateral Design", LayoutTemplate],
        ["Social Media Creative Design", Share2],
        ["Digital Advertising and Banner Design", Megaphone],
        ["Infographic and Visual Content Design", BarChart3],
        ["Print and Digital Creative Services", FileText],
        ["Brand Storytelling and Visual Communication", Mic2],
      ].map(([name, icon]) => ({ name: name as string, href: "https://www.brickworkindia.com/sales-and-digital-marketing/creative-design", icon: icon as ElementType })),
    },
    {
      name: "Marketing & Communication Design",
      href: "https://www.brickworkindia.com/sales-and-digital-marketing/marketing-and-communication-design",
      color: LOGO_COLORS.blue,
      icon: Megaphone,
      subServices: [
        ["Integrated Marketing Campaign Design", Megaphone],
        ["Email Marketing and Newsletter Design", Mail],
        ["Website and Landing Page Visuals", Globe],
        ["Corporate Communications Design", FileText],
        ["Brand Consistency and Quality Checks", ShieldCheck],
      ].map(([name, icon]) => ({ name: name as string, href: "https://www.brickworkindia.com/sales-and-digital-marketing/marketing-and-communication-design", icon: icon as ElementType })),
    },
    {
      name: "Lead & Demand Generation",
      href: "https://www.brickworkindia.com/sales-and-digital-marketing/lead-and-demand-generation",
      color: LOGO_COLORS.green,
      icon: BarChart3,
      subServices: [
        ["B2B and B2C Prospect Development", Users],
        ["Lead Qualification and Scoring", ClipboardCheck],
        ["Email and Nurture Campaigns", Mail],
        ["Cold Outreach Across Multiple Channels", Share2],
        ["Appointment Setting and Awareness Campaigns", CalendarCheck],
        ["Social Media Engagement", Share2],
      ].map(([name, icon]) => ({ name: name as string, href: "https://www.brickworkindia.com/sales-and-digital-marketing/lead-and-demand-generation", icon: icon as ElementType })),
    },
    {
      name: "CRM & Contact Management",
      href: "https://www.brickworkindia.com/sales-and-digital-marketing/crm-and-contact-management",
      color: LOGO_COLORS.orange,
      icon: FolderOpen,
      subServices: [
        ["Lead and Contact Database Management", FolderOpen],
        ["CRM Administration for Leading Platforms", UserCog],
        ["Pipeline and Opportunity Management", Workflow],
      ].map(([name, icon]) => ({ name: name as string, href: "https://www.brickworkindia.com/sales-and-digital-marketing/crm-and-contact-management", icon: icon as ElementType })),
    },
    {
      name: "Sales Collateral Design",
      href: "https://www.brickworkindia.com/sales-and-digital-marketing/sales-collateral-design",
      color: LOGO_COLORS.pink,
      icon: Presentation,
      subServices: [
        ["Flyer, Brochure, and One-Pager Design and Development", FileText],
        ["Custom Email Template Creation and Professional Pitch Deck Design", Presentation],
        ["Product Datasheet Creation and Formatting", FileSpreadsheet],
      ].map(([name, icon]) => ({ name: name as string, href: "https://www.brickworkindia.com/sales-and-digital-marketing/sales-collateral-design", icon: icon as ElementType })),
    },
    {
      name: "Digital Presence Management",
      href: "https://www.brickworkindia.com/sales-and-digital-marketing/digital-presence-management",
      color: LOGO_COLORS.blue,
      icon: Globe,
      subServices: [
        ["LinkedIn Page Creation and Optimization", Share2],
        ["SEO Support", Globe],
        ["SEO-Optimized Website Content Writing", FileText],
        ["Newsletter Drafting and Automation", Mail],
        ["Custom Audience Targeting and Segmentation", Users],
        ["Marketing Collateral Development", LayoutTemplate],
      ].map(([name, icon]) => ({ name: name as string, href: "https://www.brickworkindia.com/sales-and-digital-marketing/digital-presence-management", icon: icon as ElementType })),
    },
    {
      name: "Campaign & Funnel Support",
      href: "https://www.brickworkindia.com/sales-and-digital-marketing/campaign-and-funnel-support",
      color: LOGO_COLORS.green,
      icon: Workflow,
      subServices: [
        ["Campaign Planning and Coordination (Omnichannel)", Workflow],
        ["Landing Page and CTA Integration", Globe],
        ["Email Campaign Management and Automation", Mail],
        ["Performance Metrics Reporting", BarChart3],
      ].map(([name, icon]) => ({ name: name as string, href: "https://www.brickworkindia.com/sales-and-digital-marketing/campaign-and-funnel-support", icon: icon as ElementType })),
    },
    {
      name: "Social Media Support",
      href: "https://www.brickworkindia.com/sales-and-digital-marketing/social-media-support",
      color: LOGO_COLORS.orange,
      icon: Share2,
      subServices: [
        ["Long-form Content Creation", FileText],
        ["Short-form Writing", FileText],
        ["Executive Ghostwriting", UserCog],
        ["Copywriting", FileText],
        ["Content Creation and Design", LayoutTemplate],
        ["Publishing and Scheduling", CalendarCheck],
        ["Community Management", Users],
        ["Paid Campaign Management", Megaphone],
        ["Strategy and Planning", Workflow],
      ].map(([name, icon]) => ({ name: name as string, href: "https://www.brickworkindia.com/sales-and-digital-marketing/social-media-support", icon: icon as ElementType })),
    },
  ];

  // const shuffledPalette = shuffleBrandColors(
  //   Object.values(LOGO_COLORS)
  // );

  // const keyServices: KeyService[] = baseKeyServices.map(
  //   (service, index) => ({
  //     ...service,
  //     color: shuffledPalette[index % shuffledPalette.length],
  //   })
  // );

  const palette = Object.values(LOGO_COLORS);

const keyServices: KeyService[] = baseKeyServices.map(
  (service, index) => ({
    ...service,
    color: palette[index % palette.length],
  })
);

  const [activeService, setActiveService] = useState<string | null>(null);
  const [isHoveredOver, setIsHoveredOver] = useState(false);
  const [stageViewportWidth, setStageViewportWidth] = useState(2000);
  const stageViewportRef = useRef<HTMLDivElement>(null);
  const suppressLeaveRef = useRef(false);

  const selectedService =
    keyServices.find((service) => service.name === activeService) ?? null;

  const openService = (
    serviceName: string,
    pillEl?: HTMLElement | null
  ) => {
    setActiveService(serviceName);
    setIsHoveredOver(true);

    if (!pillEl) return;

    const pillRect = pillEl.getBoundingClientRect();
    const viewportH = window.innerHeight;

    if (pillRect.top > viewportH * 0.5) {
      const section = document.getElementById("services");
      if (!section) return;

      suppressLeaveRef.current = true;
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.setTimeout(() => {
        suppressLeaveRef.current = false;
      }, 900);
    }
  };

  const closeAllServices = () => {
    if (suppressLeaveRef.current) return;
    setActiveService(null);
    setIsHoveredOver(false);
  };

  const handleKeyDown = (
    e: KeyboardEvent,
    serviceName: string
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openService(
        serviceName,
        e.currentTarget as HTMLElement
      );
    }
  };

  const orbitRotation = useMotionValue(0);

  const counterRotation = useTransform(
    orbitRotation,
    (value) => -value
  );

  const animControls =
    useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    animControls.current = animate(
      orbitRotation,
      360,
      {
        duration: 75,
        repeat: Infinity,
        ease: "linear",
      }
    );

    return () => {
      animControls.current?.stop();
    };
  }, [orbitRotation]);

  useEffect(() => {
    if (isHoveredOver) {
      animControls.current?.pause();
    } else {
      animControls.current?.play();
    }
  }, [isHoveredOver]);

  useEffect(() => {
    const el = stageViewportRef.current;
    if (!el) return;

    const updateWidth = () => {
      setStageViewportWidth(el.getBoundingClientRect().width);
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  if (!executiveAdmin) {
    return null;
  }

  /*
   * =========================================================
   * DESKTOP GEOMETRY
   * =========================================================
   */

  const STAGE_SIZE = 820;
  const CENTER_XY = STAGE_SIZE / 2;
  const ORBIT_RADIUS = 315;
  const CENTER_RADIUS = 100;

  const CARD_WIDTH = 222;
  const CARD_HEIGHT = 64;
  const HUB_VISUAL_SPAN = (ORBIT_RADIUS * 2 + CARD_WIDTH) * 1.1;
  const fitScale =
    stageViewportWidth < 40
      ? 1
      : Math.min(
          1,
          Math.max(0.58, stageViewportWidth / HUB_VISUAL_SPAN)
        );

  const servicePositions = keyServices.map((_, index) => {
    const angle =
      -90 + index * (360 / keyServices.length);

    const radians = (angle * Math.PI) / 180;

    return {
      x:
        CENTER_XY +
        ORBIT_RADIUS * Math.cos(radians),

      y:
        CENTER_XY +
        ORBIT_RADIUS * Math.sin(radians),

      angle,
      radians,
    };
  });

  /*
   * =========================================================
   * MOBILE GEOMETRY
   *
   * IMPORTANT:
   * ONLY MOBILE VALUES ARE REDUCED.
   * Desktop values above are untouched.
   * =========================================================
   */

  const MOBILE_STAGE_WIDTH = 430;
  const MOBILE_STAGE_HEIGHT = 430;

  const MOBILE_CENTER_X =
    MOBILE_STAGE_WIDTH / 2;

  const MOBILE_CENTER_Y =
    MOBILE_STAGE_HEIGHT / 2;

  /*
   * Smaller ellipse so all 7 cards remain
   * comfortably inside the mobile viewport.
   */
  const MOBILE_ORBIT_X = 132;
  const MOBILE_ORBIT_Y = 118;

  /*
   * Smaller fixed center.
   * The center itself NEVER rotates.
   */
  const MOBILE_CENTER_SIZE = 76;

  /*
   * Smaller cards prevent adjacent cards
   * from touching/overlapping during rotation.
   */
  const MOBILE_CARD_WIDTH = 92;
  const MOBILE_CARD_HEIGHT = 34;

  const mobileServicePositions = keyServices.map(
    (_, index) => {
      const angle =
        -90 + index * (360 / keyServices.length);

      const radians =
        (angle * Math.PI) / 180;

      return {
        x:
          MOBILE_CENTER_X +
          MOBILE_ORBIT_X * Math.cos(radians),

        y:
          MOBILE_CENTER_Y +
          MOBILE_ORBIT_Y * Math.sin(radians),

        angle,
        radians,
      };
    }
  );

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-slate-950
        pt-6
        pb-2
        sm:pt-6
        sm:pb-0
        lg:pt-6
        lg:pb-4
        text-white
      "
    >
      <style>{`
        @keyframes pulseFlow {
          0% {
            stroke-dashoffset: 24;
          }

          100% {
            stroke-dashoffset: 0;
          }
        }

        .animate-spoke-flow {
          animation:
            pulseFlow
            1.2s
            linear
            infinite;
        }

        @media (max-width: 1023px) {
          .mobile-service-scroll {
            scrollbar-width: thin;
            scrollbar-color: rgba(148,163,184,.55) rgba(15,23,42,.45);
            -webkit-overflow-scrolling: touch;
            overscroll-behavior: contain;
          }

          .mobile-service-scroll::-webkit-scrollbar {
            width: 5px;
          }

          .mobile-service-scroll::-webkit-scrollbar-track {
            background: rgba(15,23,42,.45);
            border-radius: 999px;
          }

          .mobile-service-scroll::-webkit-scrollbar-thumb {
            background: rgba(148,163,184,.55);
            border-radius: 999px;
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="
              mt-2
              text-balance
              text-2xl
              font-black
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Digital Marketing Services
          </h2>
        </div>

        {/* =====================================================
            MAIN CONTAINER
        ====================================================== */}

        <div className="mx-auto mt-3 w-full sm:mt-8">

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-slate-800
              bg-slate-950
              shadow-2xl
              backdrop-blur-2xl
              sm:rounded-[2.5rem]
            "
            onMouseLeave={closeAllServices}
          >

            {/* BRAND TOP BAR */}

            <div
              className="
                absolute
                inset-x-0
                top-0
                z-[100]
                h-[3px]
              "
              style={{
                background:
                  `linear-gradient(
                    90deg,
                    ${LOGO_COLORS.blue},
                    ${LOGO_COLORS.green},
                    ${LOGO_COLORS.orange},
                    ${LOGO_COLORS.pink}
                  )`,
              }}
            />

            {/* =================================================
                DESKTOP VERSION
            ================================================== */}

            <div
              className="
                relative
                hidden
                min-h-[500px]
                items-stretch
                overflow-hidden
                lg:flex
              "
            >

              {/* GRID */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-0
                  overflow-hidden
                  opacity-30
                "
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      `radial-gradient(
                        circle at 1px 1px,
                        rgba(59,130,246,.3) 1px,
                        transparent 0
                      )`,
                    backgroundSize: "36px 36px",
                  }}
                />
              </div>

              {/* BACKGROUND IMAGE */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-[1]
                  bg-cover
                  bg-center
                  opacity-10
                  mix-blend-luminosity
                "
                style={{
                  backgroundImage:
                    `url("${MAIN_VISUAL_IMAGE}")`,
                }}
              />

              {/* RADIAL GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-[1]
                "
                style={{
                  backgroundImage:
                    `radial-gradient(
                      circle at 50% 50%,
                      rgba(0,114,206,.15) 0%,
                      rgba(2,6,23,.95) 70%
                    )`,
                }}
              />

              {/* DESKTOP STAGE */}

              <div
                ref={stageViewportRef}
                className="
                  relative
                  z-20
                  flex
                  min-h-0
                  min-w-0
                  flex-1
                  items-center
                  justify-center
                  overflow-hidden
                "
              >
              <motion.div
                className="
                  relative
                  flex
                  items-center
                  justify-center
                "
                style={{
                  width: `${STAGE_SIZE}px`,
                  height: `${STAGE_SIZE}px`,
                  transformOrigin: "center center",
                }}
                animate={{
                  scale: fitScale,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {/* ROTATING ORBIT */}

                <motion.div
                  className="absolute inset-0"
                  style={{
                    rotate: orbitRotation,
                    transformOrigin:
                      "50% 50%",
                  }}
                >

                  {/* CONNECTOR SVG */}

                  <svg
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      h-full
                      w-full
                      overflow-visible
                    "
                    viewBox={`0 0 ${STAGE_SIZE} ${STAGE_SIZE}`}
                    fill="none"
                  >

                    <defs>
                      {servicePositions.map(
                        (_, index) => (
                          <filter
                            id={`glow-spoke-${index}`}
                            key={`filter-${index}`}
                            x="-20%"
                            y="-20%"
                            width="140%"
                            height="140%"
                          >
                            <feGaussianBlur
                              stdDeviation="3"
                              result="blur"
                            />

                            <feComposite
                              in="SourceGraphic"
                              in2="blur"
                              operator="over"
                            />
                          </filter>
                        )
                      )}
                    </defs>

                    {servicePositions.map(
                      (position, index) => {
                        const service =
                          keyServices[index];

                        const isHovered =
                          activeService ===
                          service.name;

                        const activeSliceColor =
                          isHovered
                            ? service.color
                            : getActiveRingColor(
                                position.angle
                              );

                        const startX =
                          CENTER_XY +
                          CENTER_RADIUS *
                            Math.cos(
                              position.radians
                            );

                        const startY =
                          CENTER_XY +
                          CENTER_RADIUS *
                            Math.sin(
                              position.radians
                            );

                        return (
                          <g
                            key={`spoke-${index}`}
                          >

                            <line
                              x1={startX}
                              y1={startY}
                              x2={position.x}
                              y2={position.y}
                              stroke={
                                service.color
                              }
                              strokeWidth={
                                isHovered
                                  ? "2.5"
                                  : "1.2"
                              }
                              opacity={
                                isHovered
                                  ? 0.9
                                  : 0.3
                              }
                              className="
                                transition-all
                                duration-300
                              "
                            />

                            <line
                              x1={startX}
                              y1={startY}
                              x2={position.x}
                              y2={position.y}
                              stroke={
                                service.color
                              }
                              strokeWidth={
                                isHovered
                                  ? "4"
                                  : "2"
                              }
                              strokeDasharray="6 12"
                              strokeLinecap="round"
                              opacity={
                                isHovered
                                  ? 1
                                  : 0.75
                              }
                              filter={
                                isHovered
                                  ? `url(#glow-spoke-${index})`
                                  : undefined
                              }
                              className="
                                animate-spoke-flow
                                transition-all
                                duration-300
                              "
                            />

                            {isHovered && (
                              <circle
                                cx={
                                  (startX +
                                    position.x) /
                                  2
                                }
                                cy={
                                  (startY +
                                    position.y) /
                                  2
                                }
                                r="4"
                                fill="#FFFFFF"
                                filter={`url(#glow-spoke-${index})`}
                              />
                            )}

                          </g>
                        );
                      }
                    )}

                  </svg>

                  {/* DESKTOP KEY SERVICE CARDS */}

                  {keyServices.map(
                    (service, index) => {
                      const position =
                        servicePositions[index];

                      const isActive =
                        activeService ===
                        service.name;

                      const nodeRingColor =
                        service.color;

                      const ServiceIcon =
                        service.icon;

                      return (
                        <div
                          key={service.name}
                          className="
                            absolute
                            z-30
                          "
                          style={{
                            left:
                              `${position.x -
                                CARD_WIDTH / 2}px`,
                            top:
                              `${position.y -
                                CARD_HEIGHT / 2}px`,
                            width:
                              `${CARD_WIDTH}px`,
                            height:
                              `${CARD_HEIGHT}px`,
                          }}
                        >

                          <motion.div
                            className="
                              h-full
                              w-full
                            "
                            style={{
                              rotate:
                                counterRotation,
                              transformOrigin:
                                "50% 50%",
                            }}
                          >

                            <a
                              href={service.href}
                              target="_blank"
                              rel="noreferrer"

                              // onClick={(e) => {
                              //   e.preventDefault();
                              //   openService(
                              //     service.name,
                              //     e.currentTarget
                              //   );
                              // }}

                              onMouseEnter={(e) =>
                                openService(
                                  service.name,
                                  e.currentTarget
                                )
                              }

                              onFocus={(e) =>
                                openService(
                                  service.name,
                                  e.currentTarget
                                )
                              }

                              onKeyDown={(e) =>
                                handleKeyDown(
                                  e,
                                  service.name
                                )
                              }

                              tabIndex={0}
                              aria-expanded={
                                isActive
                              }

                              className="
                                group
                                relative
                                flex
                                h-full
                                w-full
                                items-center
                                justify-between
                                rounded-full
                                border
                                bg-slate-900/90
                                pl-2
                                pr-4
                                shadow-xl
                                backdrop-blur-xl
                                transition-all
                                duration-300
                                hover:scale-105
                                hover:bg-slate-900
                                focus:outline-none
                                focus:ring-2
                                focus:ring-blue-500
                              "

                              style={{
                                borderColor:
                                  isActive
                                    ? service.color
                                    : "rgba(71,85,105,.6)",

                                boxShadow:
                                  isActive
                                    ? `0 0 32px -2px ${service.color}B0,
                                       0 0 12px 0 ${service.color}60`
                                    : `0 8px 20px -6px rgba(0,0,0,.6)`,
                              }}
                            >

                              <div
                                className="
                                  flex
                                  size-11
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-full
                                  text-white
                                  shadow-md
                                  transition-transform
                                  duration-300
                                  group-hover:scale-110
                                "
                                style={{
                                  backgroundColor:
                                    nodeRingColor,
                                }}
                              >
                                <ServiceIcon
                                  className="size-5"
                                  strokeWidth={2.2}
                                />
                              </div>

                              <div
                                className="
                                  flex
                                  flex-1
                                  items-center
                                  justify-start
                                  pl-3
                                "
                              >
                                <span
                                  className="
                                    text-base
                                    font-black
                                    leading-snug
                                    text-slate-100
                                    transition-colors
                                    duration-200
                                    group-hover:text-white
                                  "
                                >
                                  {service.name}
                                </span>
                              </div>

                              <ChevronRight
                                className="
                                  size-4
                                  shrink-0
                                  text-slate-500
                                  transition-all
                                  duration-300
                                  group-hover:translate-x-1
                                  group-hover:text-white
                                "
                              />

                            </a>

                          </motion.div>
                        </div>
                      );
                    }
                  )}

                </motion.div>

                {/* =================================================
                    FIXED CENTER HUB
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    z-10
                    flex
                    -translate-x-1/2
                    -translate-y-1/2
                    flex-col
                    items-center
                    justify-center
                  "
                >

                  <div
                    className="
                      relative
                      flex
                      size-[220px]
                      items-center
                      justify-center
                    "
                  >

                    <motion.svg
                      className="
                        absolute
                        inset-0
                        size-full
                        overflow-visible
                      "
                      viewBox="0 0 200 200"
                      fill="none"
                      style={{
                        rotate:
                          orbitRotation,
                        transformOrigin:
                          "50% 50%",
                      }}
                    >
                      <path
                        d="M 100,10 A 90,90 0 0,1 190,100 L 165,100 A 65,65 0 0,0 100,35 Z"
                        fill={
                          LOGO_COLORS.blue
                        }
                      />

                      <path
                        d="M 190,100 A 90,90 0 0,1 100,190 L 100,165 A 65,65 0 0,0 165,100 Z"
                        fill={
                          LOGO_COLORS.green
                        }
                      />

                      <path
                        d="M 100,190 A 90,90 0 0,1 10,100 L 35,100 A 65,65 0 0,0 100,165 Z"
                        fill={
                          LOGO_COLORS.orange
                        }
                      />

                      <path
                        d="M 10,100 A 90,90 0 0,1 100,10 L 100,35 A 65,65 0 0,0 35,100 Z"
                        fill={
                          LOGO_COLORS.pink
                        }
                      />
                    </motion.svg>

                    {/* CENTER ITSELF DOES NOT ROTATE */}

                    <a
                      href="https://www.brickworkindia.com/services/sales-and-digital-marketing"
                      target="_blank"
                      rel="noreferrer"
                      title="Global Business Support Services & Business Process Outsourcing | Brickwork"
                      className="
                        pointer-events-auto
                        group
                        relative
                        flex
                        size-[132px]
                        overflow-hidden
                        flex-col
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-blue-500/40
                        bg-slate-950/90
                        p-4
                        text-center
                        shadow-[0_0_25px_rgba(0,114,206,0.25)]
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:border-blue-400
                        hover:shadow-[0_0_35px_rgba(0,114,206,0.6)]
                      "
                    >

                      <motion.svg
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          size-full
                          opacity-40
                          transition-opacity
                          group-hover:opacity-75
                        "
                        viewBox="0 0 100 100"
                        animate={{
                          rotate: -360,
                        }}
                        transition={{
                          duration: 25,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          stroke="rgba(59,130,246,.3)"
                          strokeWidth="1"
                          strokeDasharray="3 3"
                          fill="none"
                        />

                        <circle
                          cx="50"
                          cy="50"
                          r="32"
                          stroke="rgba(224,0,112,.2)"
                          strokeWidth="1"
                          strokeDasharray="6 4"
                          fill="none"
                        />

                        <circle
                          cx="50"
                          cy="50"
                          r="4"
                          fill="#0072CE"
                        />

                        <circle
                          cx="82"
                          cy="50"
                          r="2.5"
                          fill="#78BE20"
                        />

                        <circle
                          cx="50"
                          cy="18"
                          r="2.5"
                          fill="#FF8200"
                        />

                        <circle
                          cx="18"
                          cy="50"
                          r="2.5"
                          fill="#E00070"
                        />
                      </motion.svg>

                      <div
                        className="
                          absolute
                          inset-0
                          rounded-full
                          bg-gradient-to-tr
                          from-blue-600/20
                          via-transparent
                          to-pink-600/20
                          opacity-30
                          transition-opacity
                          duration-300
                          group-hover:opacity-100
                        "
                      />

                      <span
                        className="
                          relative
                          z-10
                          text-sm
                          font-black
                          leading-tight
                          text-white
                          transition-colors
                          duration-200
                          group-hover:text-blue-200
                        "
                      >
                         Digital Marketing Services 
                      </span>

                    </a>
                  </div>
                </div>

              </motion.div>
              </div>

              {/* =================================================
                  DESKTOP RIGHT DRAWER
              ================================================== */}

              <AnimatePresence>
                {selectedService && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 80,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: 80,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    className="
                      relative
                      z-40
                      flex
                      w-[min(400px,38%)]
                      min-w-[320px]
                      max-w-[400px]
                      shrink-0
                      flex-col
                      self-stretch
                      border-l
                      border-slate-700/80
                      bg-slate-900/90
                      p-7
                      text-white
                      shadow-2xl
                      backdrop-blur-2xl
                    "
                  >

                    {/* DRAWER HEADER */}

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-slate-700/80
                        pb-6
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-4
                        "
                      >

                        <span
                          className="
                            flex
                            size-12
                            items-center
                            justify-center
                            rounded-2xl
                            text-white
                            shadow-xl
                            ring-2
                            ring-white/20
                          "
                          style={{
                            background:
                              selectedService.color,
                          }}
                        >
                          <selectedService.icon
                            className="size-6"
                          />
                        </span>

                        <div>
                          <h3
                            className="
                              text-2xl
                              font-black
                              leading-tight
                              text-white
                            "
                          >
                            {selectedService.name}
                          </h3>
                        </div>

                      </div>

                      <button
                        type="button"
                        onClick={
                          closeAllServices
                        }
                        aria-label="Close details drawer"
                        className="
                          rounded-full
                          p-2.5
                          text-slate-400
                          transition-colors
                          hover:bg-slate-800
                          hover:text-white
                        "
                      >
                        <X className="size-5" />
                      </button>

                    </div>

                    {/* SUB SERVICES */}

                    <div
                      className="
                        mt-6
                        flex-1
                        space-y-3
                        overflow-y-auto
                        pr-2
                      "
                    >

                      <div
                        className="
                          mb-2
                          flex
                          items-center
                          justify-between
                        "
                      >
                        <p
                          className="
                            text-xs
                            font-extrabold
                            uppercase
                            tracking-wider
                            text-slate-400
                          "
                        >
                          Specialized Capabilities
                        </p>
                      </div>

                      {selectedService.subServices.map(
                        (subService, idx) => {
                          const SubIcon =
                            subService.icon;

                          return (
                            <motion.a
                              key={idx}
                              href={
                                subService.href
                              }
                              target="_blank"
                              rel="noreferrer"
                              initial={{
                                opacity: 0,
                                y: 20,
                                scale: 0.96,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                              }}
                              transition={{
                                duration: 0.3,
                                delay:
                                  idx * 0.07,
                                ease: [
                                  0.22,
                                  1,
                                  0.36,
                                  1,
                                ],
                              }}
                              className="
                                group
                                relative
                                flex
                                items-center
                                justify-between
                                rounded-2xl
                                border
                                border-slate-700/60
                                bg-slate-800/80
                                p-4
                                transition-all
                                duration-300
                                hover:scale-[1.02]
                                hover:border-slate-500
                                hover:bg-slate-800
                                hover:shadow-lg
                              "
                            >

                              <div
                                className="
                                  absolute
                                  left-0
                                  top-2
                                  bottom-2
                                  w-1
                                  rounded-r-full
                                  opacity-0
                                  transition-opacity
                                  duration-300
                                  group-hover:opacity-100
                                "
                                style={{
                                  background:
                                    selectedService.color,
                                }}
                              />

                              <div
                                className="
                                  flex
                                  items-center
                                  gap-4
                                  pl-1
                                "
                              >

                                <span
                                  className="
                                    flex
                                    size-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-slate-700/70
                                    text-slate-200
                                    transition-colors
                                    duration-300
                                    group-hover:text-white
                                  "
                                >
                                  <SubIcon className="size-5" />
                                </span>

                                <span
                                  className="
                                    text-[10px]
                                    font-bold
                                    leading-snug
                                    text-white
                                    transition-colors
                                    duration-200
                                    group-hover:text-white
                                  "
                                >
                                  {subService.name}
                                </span>

                              </div>

                              <ArrowUpRight
                                className="
                                  size-5
                                  text-slate-400
                                  opacity-60
                                  transition-all
                                  duration-300
                                  group-hover:-translate-y-0.5
                                  group-hover:translate-x-0.5
                                  group-hover:text-white
                                  group-hover:opacity-100
                                "
                              />

                            </motion.a>
                          );
                        }
                      )}

                    </div>

                    {/* DRAWER FOOTER */}

                    <div
                      className="
                        border-t
                        border-slate-700/80
                        pt-5
                      "
                    >
                      <a
                        href={
                          selectedService.href
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="
                          flex
                          w-full
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          px-5
                          py-3.5
                          text-[10px]
                          font-bold
                          text-white
                          shadow-xl
                          transition-all
                          duration-200
                          hover:opacity-95
                          active:scale-[0.98]
                        "
                        style={{
                          background:
                            selectedService.color,
                        }}
                      >
                        <span>
                          Explore Full Executive Capability
                        </span>

                        <ArrowRight className="size-4" />
                      </a>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* =================================================
                MOBILE CREATIVE VERSION
            ================================================== */}

            <div
              className="
                block
                lg:hidden
              "
            >

              {/* =================================================
                  MOBILE ORBIT AREA
              ================================================== */}

              <div
                className="
                  relative
                  overflow-hidden
                  bg-slate-950
                "
                style={{
                  /*
                   * Enough room for the reduced orbit.
                   * Sub-services remain BELOW this area.
                   */
                  height:
                    selectedService
                      ? "430px"
                      : "460px",
                }}
              >

                {/* MOBILE GRID */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-20
                  "
                  style={{
                    backgroundImage:
                      `radial-gradient(
                        circle at 1px 1px,
                        rgba(59,130,246,.3) 1px,
                        transparent 0
                      )`,
                    backgroundSize:
                      "28px 28px",
                  }}
                />

                {/* MOBILE BACKGROUND */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-cover
                    bg-center
                    opacity-10
                  "
                  style={{
                    backgroundImage:
                      `url("${MAIN_VISUAL_IMAGE}")`,
                  }}
                />

                {/* =================================================
                    MOBILE ROTATING STAGE
                ================================================== */}

                <motion.div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                  "
                  style={{
                    width:
                      `${MOBILE_STAGE_WIDTH}px`,
                    height:
                      `${MOBILE_STAGE_HEIGHT}px`,
                    marginLeft:
                      `-${MOBILE_STAGE_WIDTH / 2}px`,
                    marginTop:
                      `-${MOBILE_STAGE_HEIGHT / 2}px`,
                  }}
                >

                  {/* =================================================
                      ROTATING OUTER ORBIT
                  ================================================== */}

                  <motion.div
                    className="
                      absolute
                      inset-0
                    "
                    style={{
                      rotate:
                        orbitRotation,
                      transformOrigin:
                        "50% 50%",
                    }}
                  >

                    {/* MOBILE CONNECTORS */}

                    <svg
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        h-full
                        w-full
                        overflow-visible
                      "
                      viewBox={`
                        0
                        0
                        ${MOBILE_STAGE_WIDTH}
                        ${MOBILE_STAGE_HEIGHT}
                      `}
                      fill="none"
                    >

                      <defs>
                        {mobileServicePositions.map(
                          (_, index) => (
                            <filter
                              id={`mobile-glow-${index}`}
                              key={`mobile-filter-${index}`}
                              x="-30%"
                              y="-30%"
                              width="160%"
                              height="160%"
                            >
                              <feGaussianBlur
                                stdDeviation="3"
                                result="blur"
                              />

                              <feComposite
                                in="SourceGraphic"
                                in2="blur"
                                operator="over"
                              />
                            </filter>
                          )
                        )}
                      </defs>

                      {mobileServicePositions.map(
                        (position, index) => {
                          const service =
                            keyServices[index];

                          const isActive =
                            activeService ===
                            service.name;

                          const nodeRingColor =
                            service.color;

                          const startX =
                            MOBILE_CENTER_X +
                            (MOBILE_CENTER_SIZE /
                              2) *
                              Math.cos(
                                position.radians
                              );

                          const startY =
                            MOBILE_CENTER_Y +
                            (MOBILE_CENTER_SIZE /
                              2) *
                              Math.sin(
                                position.radians
                              );

                          return (
                            <g
                              key={`mobile-line-${index}`}
                            >

                              <line
                                x1={startX}
                                y1={startY}
                                x2={position.x}
                                y2={position.y}
                                stroke={
                                  nodeRingColor
                                }
                                strokeWidth={
                                  isActive
                                    ? "2"
                                    : "1"
                                }
                                strokeDasharray="5 9"
                                opacity={
                                  isActive
                                    ? 0.95
                                    : 0.55
                                }
                                filter={
                                  isActive
                                    ? `url(#mobile-glow-${index})`
                                    : undefined
                                }
                              />

                            </g>
                          );
                        }
                      )}

                    </svg>

                    {/* =================================================
                        MOBILE KEY SERVICE CARDS
                    ================================================== */}

                    {keyServices.map(
                      (service, index) => {
                        const position =
                          mobileServicePositions[
                            index
                          ];

                        const isActive =
                          activeService ===
                          service.name;

                        const nodeRingColor =
                          getActiveRingColor(
                            position.angle
                          );

                        const ServiceIcon =
                          service.icon;

                        return (
                          <div
                            key={
                              `mobile-service-${service.name}`
                            }
                            className="
                              absolute
                              z-30
                            "
                            style={{
                              left:
                                `${position.x -
                                  MOBILE_CARD_WIDTH /
                                    2}px`,

                              top:
                                `${position.y -
                                  MOBILE_CARD_HEIGHT /
                                    2}px`,

                              width:
                                `${MOBILE_CARD_WIDTH}px`,

                              height:
                                `${MOBILE_CARD_HEIGHT}px`,
                            }}
                          >

                            {/* COUNTER ROTATION
                                KEEPS CARD STRAIGHT */}

                            <motion.div
                              className="
                                h-full
                                w-full
                              "
                              style={{
                                rotate:
                                  counterRotation,
                                transformOrigin:
                                  "50% 50%",
                              }}
                            >

                              {/* KEY SERVICE OPENS
                                  SUB SERVICES ONLY */}

                              <button
                                type="button"
                                onClick={() => {
                                  if (
                                    isActive
                                  ) {
                                    closeAllServices();
                                  } else {
                                    openService(
                                      service.name
                                    );
                                  }
                                }}
                                onFocus={() =>
                                  openService(
                                    service.name
                                  )
                                }
                                aria-expanded={
                                  isActive
                                }
                                className="
                                  group
                                  flex
                                  h-full
                                  w-full
                                  items-center
                                  gap-1.5
                                  rounded-full
                                  border
                                  bg-slate-900/95
                                  px-1.5
                                  shadow-xl
                                  backdrop-blur-xl
                                  transition-all
                                  duration-300
                                  focus:outline-none
                                "
                                style={{
                                  borderColor:
                                    isActive
                                      ? service.color
                                      : "rgba(71,85,105,.65)",

                                  boxShadow:
                                    isActive
                                      ? `0 0 18px -3px ${service.color}AA`
                                      : "0 8px 18px -8px rgba(0,0,0,.8)",
                                }}
                              >

                                <span
                                  className="
                                    flex
                                    size-6
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    text-white
                                  "
                                  style={{
                                    backgroundColor:
                                      nodeRingColor,
                                  }}
                                >
                                  <ServiceIcon
                                    className="size-3"
                                    strokeWidth={2.3}
                                  />
                                </span>

                                <span
                                  className="
                                    min-w-0
                                    flex-1
                                    truncate
                                    text-left
                                    text-[8px]
                                    font-black
                                    leading-tight
                                    text-white
                                  "
                                >
                                  {service.name}
                                </span>

                                <ChevronRight
                                  className="
                                    size-2.5
                                    shrink-0
                                    text-slate-400
                                  "
                                />

                              </button>

                            </motion.div>

                          </div>
                        );
                      }
                    )}

                  </motion.div>

                  {/* =================================================
                      MOBILE FIXED CENTER
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      z-40
                    "
                    style={{
                      left:
                        `${MOBILE_CENTER_X}px`,
                      top:
                        `${MOBILE_CENTER_Y}px`,
                      transform:
                        "translate(-50%, -50%)",
                    }}
                  >

                    {/* CENTER RING ROTATES */}

                    <motion.div
                      className="
                        absolute
                        rounded-full
                      "
                      style={{
                        width:
                          `${MOBILE_CENTER_SIZE + 18}px`,
                        height:
                          `${MOBILE_CENTER_SIZE + 18}px`,
                        left:
                          "-9px",
                        top:
                          "-9px",
                        rotate:
                          orbitRotation,
                      }}
                    >

                      <svg
                        viewBox="0 0 200 200"
                        className="
                          h-full
                          w-full
                        "
                        fill="none"
                      >

                        <path
                          d="M 100,10 A 90,90 0 0,1 190,100 L 165,100 A 65,65 0 0,0 100,35 Z"
                          fill={
                            LOGO_COLORS.blue
                          }
                        />

                        <path
                          d="M 190,100 A 90,90 0 0,1 100,190 L 100,165 A 65,65 0 0,0 165,100 Z"
                          fill={
                            LOGO_COLORS.green
                          }
                        />

                        <path
                          d="M 100,190 A 90,90 0 0,1 10,100 L 35,100 A 65,65 0 0,0 100,165 Z"
                          fill={
                            LOGO_COLORS.orange
                          }
                        />

                        <path
                          d="M 10,100 A 90,90 0 0,1 100,10 L 100,35 A 65,65 0 0,0 35,100 Z"
                          fill={
                            LOGO_COLORS.pink
                          }
                        />

                      </svg>

                    </motion.div>

                    {/* =================================================
                        CENTER HUB ITSELF IS FIXED
                        IT DOES NOT ROTATE
                    ================================================== */}

                    <div
                      className="
                        pointer-events-auto
                        relative
                        flex
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-blue-500/50
                        bg-slate-950
                        text-center
                        shadow-[0_0_30px_rgba(0,114,206,.35)]
                      "
                      style={{
                        width:
                          `${MOBILE_CENTER_SIZE}px`,
                        height:
                          `${MOBILE_CENTER_SIZE}px`,
                      }}
                    >

                      <span
                        className="
                          max-w-[52px]
                          text-[8px]
                          font-black
                          leading-tight
                          text-white
                        "
                      >
                        Executive
                        <br />
                        Admin
                        <br />
                        Services
                      </span>

                    </div>

                  </div>

                </motion.div>

              </div>

              {/* =================================================
                  MOBILE SUB SERVICES AT BOTTOM
              ================================================== */}

              <AnimatePresence mode="wait">

                {selectedService && (
                  <motion.div
                    key={selectedService.name}
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 35,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    className="
                      relative
                      z-50
                      border-t
                      border-slate-700
                      bg-slate-900
                    "
                  >

                    {/* MOBILE SELECTED SERVICE HEADER */}

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-slate-800
                        px-4
                        py-3
                      "
                    >

                      <div
                        className="
                          flex
                          min-w-0
                          items-center
                          gap-3
                        "
                      >

                        <span
                          className="
                            flex
                            size-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            text-white
                          "
                          style={{
                            background:
                              selectedService.color,
                          }}
                        >
                          <selectedService.icon
                            className="size-4.5"
                          />
                        </span>

                        <div className="min-w-0">

                          <p
                            className="
                              text-[9px]
                              font-extrabold
                              uppercase
                              tracking-wider
                              text-slate-400
                            "
                          >
                            Specialized Capabilities
                          </p>

                          <h3
                            className="
                              truncate
                              text-sm
                              font-black
                              text-white
                            "
                          >
                            {selectedService.name}
                          </h3>

                        </div>

                      </div>

                      <button
                        type="button"
                        onClick={
                          closeAllServices
                        }
                        className="
                          flex
                          size-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          text-slate-400
                          transition-colors
                          hover:bg-slate-800
                          hover:text-white
                        "
                        aria-label="Close sub services"
                      >
                        <X className="size-4" />
                      </button>

                    </div>

                    {/* =================================================
                        SCROLLABLE SUB SERVICES
                    ================================================== */}

                    <div
                      className="
                        mobile-service-scroll
                        max-h-[250px]
                        overflow-y-auto
                        overscroll-contain
                        px-3
                        py-3
                      "
                      style={{
                        WebkitOverflowScrolling:
                          "touch",
                        touchAction: "pan-y",
                      }}
                    >

                      <div className="space-y-2">

                        {selectedService.subServices.map(
                          (subService, idx) => {
                            const SubIcon =
                              subService.icon;

                            return (
                              <motion.a
                                key={idx}
                                href={
                                  subService.href
                                }
                                target="_blank"
                                rel="noreferrer"
                                initial={{
                                  opacity: 0,
                                  y: 12,
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                transition={{
                                  duration: 0.25,
                                  delay:
                                    idx * 0.05,
                                }}
                                className="
                                  flex
                                  min-h-[48px]
                                  items-center
                                  justify-between
                                  rounded-xl
                                  border
                                  border-slate-800
                                  bg-slate-950
                                  px-3
                                  py-2
                                  transition-all
                                  active:scale-[.98]
                                "
                              >

                                <div
                                  className="
                                    flex
                                    min-w-0
                                    items-center
                                    gap-3
                                  "
                                >

                                  <span
                                    className="
                                      flex
                                      size-8
                                      shrink-0
                                      items-center
                                      justify-center
                                      rounded-lg
                                      bg-slate-800
                                      text-slate-200
                                    "
                                  >
                                    <SubIcon
                                      className="size-4"
                                    />
                                  </span>

                                  <span
                                    className="
                                      min-w-0
                                      text-[12px]
                                      font-bold
                                      leading-snug
                                      text-white
                                    "
                                  >
                                    {
                                      subService.name
                                    }
                                  </span>

                                </div>

                                <ArrowUpRight
                                  className="
                                    ml-2
                                    size-4
                                    shrink-0
                                    text-slate-400
                                  "
                                />

                              </motion.a>
                            );
                          }
                        )}

                      </div>

                    </div>

                    {/* MOBILE FULL CATEGORY BUTTON */}

                    <div
                      className="
                        border-t
                        border-slate-800
                        p-3
                      "
                    >

                      <a
                        href={
                          selectedService.href
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="
                          flex
                          w-full
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          px-4
                          py-3
                          text-xs
                          font-bold
                          text-white
                          shadow-lg
                          transition-all
                          active:scale-[.98]
                        "
                        style={{
                          background:
                            selectedService.color,
                        }}
                      >

                        <span>
                          View Full Category Details
                        </span>

                        <ArrowRight className="size-3.5" />

                      </a>

                    </div>

                  </motion.div>
                )}

              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}