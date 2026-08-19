import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Interactive brand globe used as the hero ecosystem hub.
 * Hovering lights the sphere, speeds up rotation and lifts the orbit rings.
 */
export function GlobeHub() {
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
      aria-label="Brickwork India global delivery hub"
    >
      {/* halo */}
      <span
        className="animate-pulse-ring absolute inset-0 rounded-full"
        style={{ background: "color-mix(in oklab, var(--yellow) 40%, transparent)" }}
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -inset-8 rounded-full blur-2xl transition-opacity duration-500"
        style={{
          background: "color-mix(in oklab, var(--brand) 65%, transparent)",
          opacity: hover ? 0.9 : 0.45,
        }}
        aria-hidden
      />

      <div className="globe-shell relative size-44 rounded-full sm:size-52">
        <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden>
          <defs>
            <radialGradient id="globeFill" cx="35%" cy="30%" r="75%">
              <stop offset="0%" stopColor="color-mix(in oklab, var(--brand) 55%, white)" />
              <stop offset="55%" stopColor="var(--brand)" />
              <stop offset="100%" stopColor="var(--brand-deep)" />
            </radialGradient>
            <radialGradient id="globeGloss" cx="32%" cy="24%" r="45%">
              <stop offset="0%" stopColor="white" stopOpacity="0.55" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <clipPath id="globeClip">
              <circle cx="100" cy="100" r="88" />
            </clipPath>
          </defs>

          <circle cx="100" cy="100" r="88" fill="url(#globeFill)" />

          <g clipPath="url(#globeClip)" stroke="white" fill="none">
            {/* latitudes */}
            {[-58, -30, 0, 30, 58].map((dy) => (
              <ellipse
                key={dy}
                cx="100"
                cy={100 + dy}
                rx={Math.sqrt(Math.max(88 * 88 - dy * dy, 1))}
                ry={Math.abs(dy) > 40 ? 9 : 14}
                strokeOpacity="0.22"
                strokeWidth="1"
              />
            ))}
            {/* meridians (animated sweep) */}
            {[0, 1, 2, 3, 4].map((i) => (
              <ellipse
                key={i}
                cx="100"
                cy="100"
                rx="88"
                ry="88"
                strokeOpacity="0.3"
                strokeWidth="1"
                className={reduce ? "" : "globe-meridian"}
                style={{ animationDelay: `${i * -3.2}s` }}
              />
            ))}
            <circle cx="100" cy="100" r="88" strokeOpacity="0.35" strokeWidth="1.5" />

            {/* delivery pings */}
            {[
              { cx: 62, cy: 72, c: "var(--yellow)" },
              { cx: 132, cy: 88, c: "var(--red)" },
              { cx: 88, cy: 138, c: "var(--green)" },
              { cx: 142, cy: 132, c: "var(--orange)" },
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

          <circle cx="100" cy="100" r="88" fill="url(#globeGloss)" />
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
