import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { industries } from "../../data/brickwork";
import { scrollToId } from "../../hooks/use-lenis";
import { Magnetic } from "./Magnetic";
import { InfinityHub } from "./InfinityHub";
 
/**
 * Brand palette reference (make sure these live in your global CSS as
 * custom properties — this component assumes they already do):
 *
 *  --brand:        #1e4384   (deep blue)
 *  --red:          #d43253   (pink/red)
 *  --yellow:       #fbad18   (amber)
 *  --green:        #67953f   (olive green)
 *  --orange:       #f36d21   (orange)
 *  --neutral-ink:  #231f20   (near-black)
 */
 
const colors = ["var(--brand)", "var(--red)", "var(--yellow)", "var(--green)", "var(--orange)"] as const;
 
 
function scrollToServices() {
  scrollToId("services");
}
function scrollToEngagementModels() {
  scrollToId("cta");
}
 
export function Hero() {
  // hero animations handled per-element
  const marquee = [...industries, ...industries];
 
  return (
    <section
      className="relative overflow-x-clip overflow-y-visible"
      style={{ background: "#182b4c" }}
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-25" />
 
      <header className="relative z-20 w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:gap-6 sm:px-6 sm:py-5">
          <img
            src="https://www.brickworkindia.com/images/Brickwork-logo.png"
            alt="Brickwork India"
            className="h-10 w-auto shrink-0 sm:h-14 md:h-16"
            width={220}
            height={64}
          />
          <div className="flex shrink-0 items-center gap-3 sm:gap-5">
            <a
              href="tel:+16176082427"
              aria-label="Call Brickwork India at +1 (617) 608 2427"
              className="hidden items-center gap-2.5 sm:flex"
            >
              <span
                className="flex size-9 items-center justify-center rounded-full"
                style={{
                  background: "color-mix(in oklab, #ba2443 12%, white)",
                  border: "1px solid color-mix(in oklab, #ba2443 25%, transparent)",
                }}
                aria-hidden
              >
                <Phone className="size-4" style={{ color: "#ba2443" }} strokeWidth={1.8} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] font-bold tracking-[0.16em] text-[#182b4c]/70 uppercase">
                  Call
                </span>
                <span className="text-sm font-semibold whitespace-nowrap text-[#105480]">
                  +1 (617) 608 2427
                </span>
              </span>
            </a>
            <Magnetic strength={0.25}>
              <a
                href="https://brickworkindia.com/enquiry"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap text-white transition-transform duration-300 hover:scale-[1.03] sm:px-7 sm:py-3 sm:text-sm"
                style={{
                  background: "#ba2443",
                  boxShadow: "0 8px 24px -8px color-mix(in oklab, #ba2443 55%, transparent)",
                }}
                aria-label="Enquire Now — contact Brickwork India"
              >
                Enquire Now
              </a>
            </Magnetic>
          </div>
        </div>
      </header>
 
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-4 px-5 pt-6 pb-0 sm:px-6 lg:grid-cols-[0.88fr_1.22fr] lg:gap-3 lg:pt-8 lg:pb-0">
        <div>
          {/* <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 uppercase"
          >
            <span
              className="size-1.5 rounded-full"
              style={{ background: "var(--yellow)" }}
              aria-hidden
            />
            Enterprise business support, engineered
          </motion.span> */}
 
          <motion.h1  
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-balance-tight mt-6 text-5xl leading-[0.95] font-semibold text-white sm:text-6xl lg:text-5.5xl"
          >
            Accelerate
            <br />
            Your Growth
            <br />
            <span className="relative inline-block">
 
              <span
                style={{
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                with <span style={{
                  color: "#16e600",
                  fontWeight: 700
                }}>Brickwork</span>
              </span>
         
              {/* <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, var(--yellow), var(--orange))",
                }}
              /> */}
            </span>
          </motion.h1>
 
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-lg text-lg text-white/70"
          >
           Trusted global business partner for enterprises & SMBs, offering comprehensive business support solutions since 2005.
          </motion.p>
 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-nowrap items-center gap-2 sm:gap-3"
          >
            <Magnetic className="block w-full min-w-0 flex-1 sm:inline-block sm:w-auto sm:flex-none">
              <button
                onClick={scrollToServices}
                className="glow-ring w-full rounded-full px-3 py-2.5 text-[11px] leading-tight font-semibold whitespace-nowrap text-white transition-transform hover:scale-[1.03] sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
                style={{
                  border: "1px solid color-mix(in oklab, white 22%, transparent)",
                  background: "color-mix(in oklab, white 10%, transparent)",
                }}
              >
                Explore Digital Marketing Services 
              </button>
            </Magnetic>
            <Magnetic className="block w-full min-w-0 flex-1 sm:inline-block sm:w-auto sm:flex-none" strength={0.2}>
              <button
                onClick={scrollToEngagementModels}
                aria-label="Our Engagement Models — scroll to engagement models section"
                className="w-full rounded-full px-3 py-2.5 text-[11px] leading-tight font-semibold whitespace-nowrap text-white transition-colors hover:bg-white/15 sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
                style={{
                  border: "1px solid color-mix(in oklab, white 22%, transparent)",
                  background: "color-mix(in oklab, white 10%, transparent)",
                }}
              >
                Our Engagement Models
              </button>
            </Magnetic>
          </motion.div>
 
          <div className="mt-10 grid w-full max-w-xl grid-cols-4 gap-x-2 sm:gap-x-8">
            {[
              ["20+", ["Years in", "Business"], "#16e600"],
              ["15k+", ["Clients", "served"], "var(--red)"],
              ["170+", ["Countries", "served"], "var(--orange)"],
              ["20+", ["Industries", "served"], "var(--yellow)"],
            ].map(([n, lines, c]) => (
              <div key={(lines as string[]).join(" ")} className="min-w-0">
                <div
                  className="font-display text-xl font-semibold transition-all duration-300 hover:scale-110 sm:text-2xl"
                  style={{ color: c as string, textShadow: `0 0 18px ${c}` }}
                >
                  {n as string}
                </div>
                <div className="mt-0.5 text-[10px] leading-snug tracking-wide text-white uppercase sm:text-xs">
                  {(lines as string[]).map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
 
        {/* Ecosystem visual — larger on mobile to match title weight */}
        <div className="relative -mx-2 mt-2 w-[calc(100%+1rem)] min-w-0 self-stretch overflow-visible pb-6 sm:mx-0 sm:mt-0 sm:w-full lg:min-h-[28rem] lg:flex lg:items-center lg:pb-8 xl:min-h-[32rem]">
          <div className="w-full origin-center scale-[1.22] sm:scale-110 lg:scale-[1.14] xl:scale-[1.18]">
            <InfinityHub />
          </div>
        </div>
      </div>
 
      {/* Industries marquee — flush with hero (no gap) */}
      <div
        className="relative z-10 overflow-hidden py-5"
        style={{
          background: "#61a13c",
        }}
      >
        <div className="mb-5 flex items-center justify-center gap-3 px-6">
          <span
            className="h-px w-10 sm:w-16"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in oklab, white 55%, transparent))",
            }}
            aria-hidden
          />
          <p className="text-center text-[11px] font-bold tracking-[0.22em] text-white/90 uppercase">
            Trusted across{" "}
            <span className="text-white font-bold">21 industries</span>
          </p>
     
          <span
            className="h-px w-10 sm:w-16"
            style={{
              background:
                "linear-gradient(90deg, color-mix(in oklab, white 55%, transparent), transparent)",
            }}
            aria-hidden
          />
        </div>
 
        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee flex w-max gap-3 group-hover:[animation-play-state:paused]">
            {marquee.map((industry, i) => {
              const accent = colors[i % colors.length];
              return (
                <span
                  key={`${industry}-${i}`}
                  className="flex cursor-default items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium whitespace-nowrap text-[var(--neutral-ink)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                  style={{
                    boxShadow: `0 0 0 1px color-mix(in oklab, ${accent} 28%, transparent), 0 4px 14px -8px color-mix(in oklab, ${accent} 35%, transparent)`,
                  }}
                >
                  <span
                    className="size-1.5 shrink-0 rounded-full"
                    style={{ background: accent }}
                    aria-hidden
                  />
                  {industry}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}