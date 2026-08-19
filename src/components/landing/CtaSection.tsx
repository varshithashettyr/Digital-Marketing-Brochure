import { motion } from "motion/react";
import type { TargetAndTransition, ValueKeyframesDefinition } from "motion/react";
import {
  Settings2,
  UserRound,
  PackageCheck,
  Hourglass,
  Search,
  Compass,
  Cog,
  TrendingUp,
  Rocket,
  ChevronRight,
  Gauge,
  Wallet,
  Sparkles,
  Layers,
  Eye,
  Sprout,
  Star,
} from "lucide-react";

const colors = ["var(--brand)", "var(--red)", "var(--yellow)", "var(--green)", "var(--orange)"] as const;

const engagementModels = [
  {
    icon: Settings2,
    label: "Managed Service",
    subtitle: "(SLA driven AMCs)",
    description:
      "End-to-end ownership of a process or function, with Brickwork accountable for delivery within agreed SLAs.",
    bestFor: "Best for clients who want to fully outsource a function and be measured on results.",
    color: "var(--brand)",
    iconHover: { rotate: 180 },
  },
  {
    icon: UserRound,
    label: "FTE Model",
    subtitle: "(Time & Material)",
    description:
      "Dedicated full-time resources working exclusively on the client's account, with terms set per client need.",
    bestFor: "Best for predictable capacity and continuity of the same team over time.",
    color: "#2f6bb5",
    iconHover: { y: -4, scale: 1.12 },
  },
  {
    icon: PackageCheck,
    label: "Fixed Scope",
    subtitle: "(Scope of Work)",
    description: "A defined scope, timeline, and deliverable-based fee, agreed upfront before work begins.",
    bestFor: "Best for discrete initiatives with a clear start and end point.",
    color: "var(--green)",
    iconHover: { scale: 1.18, rotate: -8 },
  },
  {
    icon: Hourglass,
    label: "Hourly Model",
    subtitle: "(Flexible Minimum Commitment)",
    description:
      "A retainer-based engagement where clients pre-purchase a block of hours for a limited duration per month.",
    bestFor: "Best for variable or ad hoc workloads where scope shifts month to month.",
    color: "var(--yellow)",
    iconHover: { rotate: 180, scale: 1.1 },
  },
];

const engagementPillars = [
  { label: "Strong Governance Structure", color: "#182b4c" },
  { label: "Effective Project Tracking & Reporting", color: "var(--brand)" },
  { label: "Deep Domain Expertise", color: "var(--green)" },
  { label: "Quality Assurance", color: "var(--orange)" },
  { label: "GDPR & DPDP Data Compliant", color: "#ba2443" },
];

const processSteps = [
  { icon: Search, label: "Discover", ring: colors[0] },
  { icon: Compass, label: "Strategize", ring: colors[2] },
  { icon: Cog, label: "Execute", ring: colors[4] },
  { icon: TrendingUp, label: "Optimize", ring: colors[3] },
  { icon: Rocket, label: "Scale", ring: colors[1] },
];

const outcomes = [
  { icon: TrendingUp, label: "Higher Productivity" },
  { icon: Gauge, label: "Faster Turnaround" },
  { icon: Wallet, label: "Lower Operational Costs" },
  { icon: Sparkles, label: "Greater Agility" },
  { icon: Layers, label: "Reduced Complexity" },
  { icon: Eye, label: "Greater Visibility" },
  { icon: Sprout, label: "Sustainable Growth" },
];

export function CtaSection() {
  return (
    <section id="cta" className="relative bg-brand-soft py-10 sm:py-12">
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Strategy to results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <h2 className="text-balance-tight text-2xl font-semibold text-[var(--neutral-ink)] sm:text-3xl">
            Turning Strategy into{" "}
            <span
              style={{
                background: "linear-gradient(90deg, var(--brand), var(--red), var(--orange))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Measurable Results
            </span>
          </h2>

          <div className="mx-auto mt-9 flex max-w-5xl flex-wrap items-center justify-center gap-x-1 gap-y-6">
            {processSteps.map(({ icon: Icon, label, ring }, i) => (
              <div key={label} className="flex items-center gap-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                  className="flex cursor-default flex-col items-center gap-2"
                >
                  <span
                    className="flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white shadow-md sm:h-20 sm:w-20"
                    style={{
                      borderColor: ring,
                      boxShadow: `0 10px 24px -12px color-mix(in oklab, ${ring} 45%, transparent)`,
                    }}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: ring }} strokeWidth={1.6} />
                  </span>
                  <span className="text-xs font-semibold text-[var(--neutral-ink)] sm:text-sm">
                    {label}
                  </span>
                </motion.div>
                {i < processSteps.length - 1 && (
                  <ChevronRight className="mb-5 hidden h-5 w-5 shrink-0 text-[var(--brand)]/35 sm:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

      

        {/* Measurable outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="mt-14 text-center"
        >
          <h3 className="text-lg font-bold tracking-wide text-[var(--neutral-ink)] sm:text-xl">
            <span style={{ color: "var(--orange)" }}>MEASURABLE</span> OUTCOMES
          </h3>

          <div className="mx-auto mt-7 grid max-w-5xl grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
            {outcomes.map(({ icon: Icon, label }, i) => {
              const c = colors[i % colors.length];
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={
                    {
                      y: -4,
                      borderColor: c,
                      boxShadow: "0 10px 20px -10px color-mix(in oklab, " + c + " 45%, transparent)",
                    } as unknown as TargetAndTransition
                  }
                  transition={{ delay: 0.04 * i, duration: 0.4 }}
                  className="flex cursor-default flex-col items-center gap-2.5 rounded-xl border border-[var(--brand)]/12 bg-white/70 px-2.5 py-5"
                >
                  <motion.span
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.15,
                      color: c as unknown as ValueKeyframesDefinition,
                    }}
                    transition={{ duration: 0.5 }}
                    style={{ color: c }}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </motion.span>
                  <span className="text-[11px] leading-snug font-medium text-[var(--muted-foreground)] sm:text-xs">
                    {label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
          {/* Engagement models — primary business section */}
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="mt-16"
        >
          <div className="text-center">
            {/* <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--brand)] uppercase">
              How we engage
            </p> */}
            <h2 className="text-balance-tight mt-3 text-3xl font-bold tracking-tight text-[var(--brand)] sm:text-4xl lg:text-[2.75rem]">
              Our Engagement Models
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Choose the model that fits your workload — or combine them as your needs evolve.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map(({ icon: Icon, label, subtitle, description, bestFor, color, iconHover }, i) => (
              <motion.article
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover="hover"
                transition={{ delay: 0.05 * i, duration: 0.45 }}
                variants={{
                  hover: {
                    y: -5,
                    boxShadow: `0 20px 40px -18px color-mix(in oklab, ${color} 50%, transparent)`,
                  },
                }}
                className="group relative flex h-full cursor-default flex-col overflow-hidden rounded-2xl"
                style={{
                  background: `color-mix(in oklab, ${color} 16%, white)`,
                  border: `1.5px solid color-mix(in oklab, ${color} 45%, transparent)`,
                  boxShadow: `0 10px 28px -18px color-mix(in oklab, ${color} 40%, transparent)`,
                }}
              >
                <div className="flex flex-1 flex-col items-center px-4 pt-6 pb-4 text-center">
                  <motion.span
                    variants={{
                      hover: {
                        y: -4,
                        boxShadow: `0 12px 24px -10px color-mix(in oklab, ${color} 55%, transparent)`,
                      },
                    }}
                    className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white"
                    style={{
                      boxShadow: `0 0 0 2px color-mix(in oklab, ${color} 40%, transparent)`,
                    }}
                  >
                    <motion.span
                      variants={{
                        hover: {
                          ...iconHover,
                          transition: { type: "spring", stiffness: 260, damping: 16 },
                        },
                      }}
                      className="relative flex items-center justify-center"
                    >
                      <Icon className="h-6 w-6" style={{ color }} strokeWidth={1.85} />
                    </motion.span>
                  </motion.span>

                  <h3 className="mt-4 text-base font-bold sm:text-lg" style={{ color }}>
                    {label}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium italic sm:text-[13px]" style={{ color }}>
                    {subtitle}
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-[var(--neutral-ink)]/85">
                    {description}
                  </p>
                </div>

                <div
                  className="mt-auto px-3.5 py-3.5 text-[12px] leading-snug font-medium text-[var(--neutral-ink)]/90"
                  style={{
                    background: `color-mix(in oklab, ${color} 28%, white)`,
                    borderTop: `1px solid color-mix(in oklab, ${color} 30%, transparent)`,
                  }}
                >
                  {bestFor}
                </div>
              </motion.article>
            ))}
          </div>

          <p className="mx-auto mt-7 flex max-w-3xl items-start justify-center gap-2 text-center text-sm text-[var(--neutral-ink)]/80 sm:text-[15px]">
            <Star
              className="mt-0.5 size-4 shrink-0 fill-[var(--green)] text-[var(--green)]"
              aria-hidden
            />
            <span>
              Brickwork offers flexible engagement models tailored to client needs, with the ability
              to switch or combine approaches seamlessly.
            </span>
          </p>

          <div className="mt-8 text-center">
            <h3 className="text-base font-bold text-[var(--brand)] sm:text-lg">
              Backed across every engagement model by:
            </h3>
            <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
              {engagementPillars.map(({ label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ delay: 0.04 * i, duration: 0.35 }}
                  className="flex min-h-[4.25rem] items-center justify-center rounded-xl px-3 py-3 text-center text-[12px] leading-snug font-bold text-white sm:text-[13px]"
                  style={{
                    background: color,
                    boxShadow: `0 10px 22px -12px color-mix(in oklab, ${color} 70%, transparent)`,
                  }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
