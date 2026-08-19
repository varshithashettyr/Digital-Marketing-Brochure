import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Interactive brand core used as the hero ecosystem hub.
 * Represents the "service engine" — all B2B functions converging into one system.
 * Hovering lights the core, speeds up the pulse and lifts the orbit rings.
 */
export function ServiceHub() {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer"
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      animate={reduce ? {} : { scale: hover ? 1.06 : 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      role="img"
      aria-label="Brickwork India service engine — executive, finance, IT, marketing and operations in one system"
    >
      {/* halo */}
      <span
        className="animate-pulse-ring absolute inset-0 rounded-full"
        style={{ background: "color-mix(in oklab, #fbad18 40%, transparent)" }}
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -inset-8 rounded-full blur-2xl transition-opacity duration-500"
        style={{
          background: "color-mix(in oklab, #1e4384 65%, transparent)",
          opacity: hover ? 0.9 : 0.45,
        }}
        aria-hidden
      />

      <div className="core-shell relative size-44 rounded-full sm:size-52">
        <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden>
          <defs>
            <radialGradient id="coreFill" cx="35%" cy="30%" r="75%">
              <stop offset="0%" stopColor="color-mix(in oklab, #1e4384 55%, white)" />
              <stop offset="55%" stopColor="#1e4384" />
              <stop offset="100%" stopColor="#14294f" />
            </radialGradient>
            <radialGradient id="coreGloss" cx="32%" cy="24%" r="45%">
              <stop offset="0%" stopColor="white" stopOpacity="0.55" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <clipPath id="coreClip">
              <circle cx="100" cy="100" r="88" />
            </clipPath>
          </defs>

          {/* base sphere-like backdrop kept for shape continuity */}
          <circle cx="100" cy="100" r="88" fill="url(#coreFill)" />

          <g clipPath="url(#coreClip)" stroke="white" fill="none">
            {/* concentric "engine" rings instead of lat/long lines */}
            {[70, 50, 30].map((r, i) => (
              <circle
                key={r}
                cx="100"
                cy="100"
                r={r}
                strokeOpacity="0.22"
                strokeWidth="1"
              />
            ))}

            {/* rotating segmented ring (engine sweep, replaces meridian sweep) */}
            {[0, 1, 2].map((i) => (
              <circle
                key={i}
                cx="100"
                cy="100"
                r="88"
                strokeOpacity="0.3"
                strokeWidth="1"
                strokeDasharray="4 10"
                className={reduce ? "" : "globe-meridian"}
                style={{ animationDelay: `${i * -3.2}s` }}
              />
            ))}
            <circle cx="100" cy="100" r="88" strokeOpacity="0.35" strokeWidth="1.5" />

            {/* rotated diamond = the "core" service mark */}
            <rect
              x="72"
              y="72"
              width="56"
              height="56"
              rx="14"
              transform="rotate(45 100 100)"
              fill="none"
              stroke="#f36d21"
              strokeOpacity="0.55"
              strokeWidth="2"
            />

            {/* service pulse dots — 4 shown on the core face, brand colors */}
            {[
              { cx: 62, cy: 72, c: "#fbad18" },
              { cx: 132, cy: 88, c: "#d43253" },
              { cx: 88, cy: 138, c: "#67953f" },
              { cx: 142, cy: 132, c: "#f36d21" },
            ].map((p, i) => (
              <g key={p.cx}>
                <circle
                  cx={p.cx}
                  cy={p.cy}
                  r="9"
                  fill={p.c}
                  fillOpacity="0.35"
                  stroke="none"
                  className={reduce ? "" : "globe-ping"}
                  style={{ animationDelay: `${i * 0.9}s` }}
                />
                <circle cx={p.cx} cy={p.cy} r="3" fill={p.c} stroke="none" />
              </g>
            ))}
          </g>

          <circle cx="100" cy="100" r="88" fill="url(#coreGloss)" />
        </svg>

        {/* logo badge */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="rounded-2xl bg-white/95 px-3 py-2 shadow-lg backdrop-blur transition-transform duration-500"
            style={{ transform: hover ? "translateY(-2px) scale(1.05)" : "none" }}
          >
            <img
              src="https://www.brickworkindia.com/images/Brickwork-logo.png"
              alt="Brickwork India"
              className="w-20 sm:w-24"
              width={96}
              height={24}
            />
          </div>
        </div>
      </div>

      {/* orbit rings */}
      <span
        className={`pointer-events-none absolute -inset-5 rounded-full border border-white/20 ${reduce ? "" : "globe-orbit"}`}
        style={{ animationDuration: hover ? "9s" : "22s" }}
        aria-hidden
      />
      <span
        className={`pointer-events-none absolute -inset-10 rounded-full border border-dashed border-white/15 ${reduce ? "" : "globe-orbit-rev"}`}
        style={{ animationDuration: hover ? "14s" : "34s" }}
        aria-hidden
      />
    </motion.div>
  );
}