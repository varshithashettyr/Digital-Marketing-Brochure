import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { heroServiceNodes } from "../../data/brickwork";

/**
 * ServiceNow-style infinity hub:
 * glossy tube, white node dots, plain white labels at the four lobe corners.
 */

const W = 860;
const H = 560;
const CX = W / 2;
const CY = H / 2 + 10;
const A = 300;

function pointAt(t: number) {
  const s = Math.sin(t);
  const c = Math.cos(t);
  const d = 1 + s * s;
  return { x: CX + (A * c) / d, y: CY + (A * s * c) / d };
}

const PATH_D = (() => {
  const steps = 320;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const p = pointAt((i / steps) * Math.PI * 2);
    d += `${i === 0 ? "M" : "L"}${p.x.toFixed(2)} ${p.y.toFixed(2)} `;
  }
  return `${d}Z`;
})();

type Place = "above" | "below";

/**
 * Markers sit on the outer curves; labels sit in the navy space
 * clearly outside the thick tube (never overlaid on the glow).
 */
const NODE_LAYOUT: {
  label: string;
  t: number;
  place: Place;
  /** Push label further left (−) or right (+) in SVG units. */
  xBias: number;
}[] = [
  { label: "Administration", t: Math.PI - 0.82, place: "above", xBias: -8 },
  { label: "Content", t: Math.PI + 0.82, place: "below", xBias: -8 },
  { label: "Training", t: -0.82, place: "above", xBias: 8 },
  { label: "Executive", t: 0.82, place: "below", xBias: 8 },
];

/** Clears the tube glow while staying close to the marker. */
const LABEL_GAP = 42;

const NODES = NODE_LAYOUT.map((layout, i) => {
  const s = heroServiceNodes.find((n) => n.label === layout.label) ?? heroServiceNodes[i]!;
  const p = pointAt(layout.t);
  const labelY =
    layout.place === "above" ? p.y - LABEL_GAP : p.y + LABEL_GAP;
  const labelX = p.x + layout.xBias;
  return {
    label: s.label,
    href: s.href,
    x: Number(p.x.toFixed(2)),
    y: Number(p.y.toFixed(2)),
    left: `${((labelX / W) * 100).toFixed(3)}%`,
    top: `${((labelY / H) * 100).toFixed(3)}%`,
    place: layout.place,
    transform:
      layout.place === "above" ? "translate(-50%, -100%)" : "translate(-50%, 0%)",
  };
});

const STARS = Array.from({ length: 18 }, (_, i) => {
  const t = (i / 18) * Math.PI * 2 + 0.21;
  const p = pointAt(t);
  const jx = (((i * 41) % 19) / 19 - 0.5) * 22;
  const jy = (((i * 57) % 15) / 15 - 0.5) * 22;
  return {
    x: Number((p.x + jx).toFixed(2)),
    y: Number((p.y + jy).toFixed(2)),
    r: 1.1 + ((i * 5) % 3) * 0.55,
    delay: (i % 8) * 0.28,
  };
});

function StarPath(x: number, y: number, r: number) {
  return `M${x} ${y - r * 3.2} L${x + r * 0.7} ${y - r * 0.7} L${x + r * 3.2} ${y} L${x + r * 0.7} ${y + r * 0.7} L${x} ${y + r * 3.2} L${x - r * 0.7} ${y + r * 0.7} L${x - r * 3.2} ${y} L${x - r * 0.7} ${y - r * 0.7} Z`;
}

export function InfinityHub() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, amount: 0.25 });
  const [active, setActive] = useState<string | null>(null);

  const drawn = reduce ? true : inView;
  const DRAW = 2.15;

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto w-full overflow-visible"
      style={{ aspectRatio: `${W} / ${H}` }}
      aria-label="Brickwork connected services flow"
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        // style={{
        //   background:
        //     "radial-gradient(circle at 30% 40%, color-mix(in oklab, var(--brand) 18%, transparent), transparent 55%), " +
        //     "radial-gradient(circle at 70% 45%, color-mix(in oklab, var(--green) 14%, transparent), transparent 55%)",
        // }}

        style={{
          background:
            "radial-gradient(circle at 40% 45%, color-mix(in oklab, var(--brand) 12%, transparent), transparent 58%)",
        }}
        aria-hidden
      />

      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="inf-tube" x1="0%" y1="10%" x2="100%" y2="90%">
            <stop offset="0%" stopColor="var(--brand)" />
            <stop offset="30%" stopColor="#ba2443" />
            <stop offset="65%" stopColor="var(--yellow)" />
            <stop offset="90%" stopColor="var(--green)" />
          </linearGradient>

          {/* <linearGradient id="inf-tube" x1="0%" y1="10%" x2="100%" y2="90%">
            <stop offset="0%" stopColor="var(--brand)" />
            <stop offset="50%" stopColor="var(--green)" />
            <stop offset="100%" stopColor="var(--brand)" />
          </linearGradient> */}
          <linearGradient id="inf-tube-shine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.6" />
            <stop offset="45%" stopColor="white" stopOpacity="0.1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <filter id="inf-soft" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="inf-bloom" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="9" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d={PATH_D}
          fill="none"
          stroke="url(#inf-tube)"
          strokeWidth="64"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.22"
          filter="url(#inf-bloom)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: drawn ? 1 : 0, opacity: drawn ? 1 : 0 }}
          transition={{ duration: DRAW, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.path
          d={PATH_D}
          fill="none"
          stroke="url(#inf-tube)"
          strokeWidth="44"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.95"
          filter="url(#inf-soft)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: drawn ? 1 : 0 }}
          transition={{ duration: DRAW, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.path
          d={PATH_D}
          fill="none"
          stroke="url(#inf-tube-shine)"
          strokeWidth="17"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: drawn ? 1 : 0, opacity: drawn ? 0.85 : 0 }}
          transition={{ duration: DRAW * 0.95, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.path
          d={PATH_D}
          fill="none"
          stroke="white"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeOpacity="0.55"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: drawn ? 1 : 0 }}
          transition={{ duration: DRAW * 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        />

        {!reduce &&
          drawn &&
          [
            { dash: "18 260", dur: "5.5s", delay: `${DRAW * 0.55}s`, w: 2.4, op: 0.95 },
            { dash: "10 200", dur: "7.2s", delay: `${DRAW * 0.7}s`, w: 1.8, op: 0.7 },
            { dash: "6 180", dur: "4.4s", delay: `${DRAW * 0.85}s`, w: 1.4, op: 0.85 },
          ].map((s, i) => (
            <path
              key={`streak-${i}`}
              d={PATH_D}
              fill="none"
              stroke="white"
              strokeWidth={s.w}
              strokeLinecap="round"
              strokeDasharray={s.dash}
              opacity={s.op}
              filter="url(#inf-soft)"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-278"
                dur={s.dur}
                begin={s.delay}
                repeatCount="indefinite"
              />
            </path>
          ))}

        {!reduce &&
          drawn &&
          [0, 1, 2].map((i) => (
            <g key={`orb-${i}`} filter="url(#inf-soft)">
              <circle r={i === 0 ? 4.5 : 3} fill="white" opacity={0.95}>
                <animateMotion
                  dur={`${6.5 + i * 1.8}s`}
                  repeatCount="indefinite"
                  path={PATH_D}
                  begin={`${DRAW * 0.65 + i * 1.1}s`}
                />
              </circle>
              <circle r={i === 0 ? 9 : 6} fill="white" opacity={0.22}>
                <animateMotion
                  dur={`${6.5 + i * 1.8}s`}
                  repeatCount="indefinite"
                  path={PATH_D}
                  begin={`${DRAW * 0.65 + i * 1.1}s`}
                />
              </circle>
            </g>
          ))}

        {STARS.map((s, i) => (
          <motion.path
            key={`star-${i}`}
            d={StarPath(s.x, s.y, s.r)}
            fill="white"
            initial={{ opacity: 0, scale: 0 }}
            animate={
              drawn
                ? reduce
                  ? { opacity: 0.65, scale: 1 }
                  : { opacity: [0, 1, 0.2, 0.9, 0], scale: [0.35, 1.15, 0.7, 1, 0.35] }
                : { opacity: 0, scale: 0 }
            }
            transition={
              reduce
                ? { duration: 0.25, delay: DRAW * 0.4 }
                : {
                    duration: 3.8,
                    delay: DRAW * 0.45 + s.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        ))}

        {/* White node dots — soft continuous pulse */}
        {NODES.map((n, i) => {
          const isActive = active === n.label;
          return (
            <motion.g
              key={n.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={drawn ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{
                delay: DRAW * 0.5 + i * 0.07,
                type: "spring",
                stiffness: 280,
                damping: 16,
              }}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            >
              {!reduce && drawn && (
                <motion.circle
                  cx={n.x}
                  cy={n.y}
                  fill="white"
                  animate={{
                    r: isActive ? [11, 20, 11] : [10, 15, 10],
                    fillOpacity: isActive ? [0.4, 0.08, 0.4] : [0.28, 0.08, 0.28],
                  }}
                  transition={{
                    duration: isActive ? 1 : 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.35,
                  }}
                />
              )}
              <circle cx={n.x} cy={n.y} r={isActive ? 7.5 : 6.5} fill="white" fillOpacity="0.98" />
            </motion.g>
          );
        })}
      </svg>

      {/* Center glass badge */}
      <motion.div
        className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={drawn ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
        transition={{ delay: DRAW * 0.55, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="rounded-full px-3.5 py-2 text-center text-[10px] font-semibold tracking-wide text-white whitespace-nowrap sm:px-5 sm:py-2.5 sm:text-xs"
          style={{
            background: "color-mix(in oklab, white 14%, transparent)",
            border: "1px solid color-mix(in oklab, white 35%, transparent)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 8px 28px -12px rgba(0,0,0,0.45)",
          }}
        >
          People + Process + Technology
        </div>
      </motion.div>

      {/* White service labels — continuous float + pump to draw attention */}
      {NODES.map((n, i) => {
        const isActive = active === n.label;
        const bob = n.place === "above" ? -5 : 5;
        return (
          <div
            key={n.label}
            className="absolute z-30"
            style={{
              left: n.left,
              top: n.top,
              transform: n.transform,
            }}
          >
            <motion.a
              href={n.href}
              target="_blank"
              rel="noreferrer"
              className="block"
              initial={{ opacity: 0, y: n.place === "above" ? 8 : -8, scale: 0.92 }}
              animate={
                drawn
                  ? reduce
                    ? { opacity: 1, y: 0, scale: 1 }
                    : {
                        opacity: [0.82, 1, 0.82],
                        y: [0, bob, 0],
                        scale: isActive ? [1, 1.14, 1] : [1, 1.06, 1],
                      }
                  : { opacity: 0, y: n.place === "above" ? 8 : -8, scale: 0.92 }
              }
              transition={
                drawn && !reduce
                  ? {
                      opacity: { duration: 2.6 + i * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 },
                      y: { duration: 2.8 + i * 0.15, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 },
                      scale: {
                        duration: isActive ? 0.9 : 2.2 + i * 0.15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.4,
                      },
                    }
                  : { delay: DRAW * 0.58 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }
              }
              onHoverStart={() => setActive(n.label)}
              onHoverEnd={() => setActive(null)}
              onFocus={() => setActive(n.label)}
              onBlur={() => setActive(null)}
              aria-label={`${n.label} — view service`}
            >
              <span
                className="block text-[11px] font-bold tracking-wide text-white whitespace-nowrap sm:text-sm md:text-[15px]"
                style={{
                  textShadow: isActive
                    ? "0 0 20px rgba(255,255,255,0.65), 0 2px 8px rgba(0,0,0,0.45)"
                    : "0 0 12px rgba(255,255,255,0.25), 0 2px 8px rgba(0,0,0,0.4)",
                }}
              >
                {n.label}
              </span>
            </motion.a>
          </div>
        );
      })}
    </div>
  );
}
