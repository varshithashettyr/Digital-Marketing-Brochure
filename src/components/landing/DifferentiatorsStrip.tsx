const differentiators = [
  "Shared Services",
  "Strategic Partnership",
  "24×7 Operating Model with BCP",
  "Global Market Knowledge & Access",
] as const;

export function DifferentiatorsStrip() {
  return (
    <section
      className="w-full bg-[#182B4C]"
      aria-label="Brickwork differentiators"
    >
      <div className="w-full">
        <div className="flex w-full">
          {differentiators.map((label, index) => (
            <div
              key={label}
              className={`flex flex-1 items-center justify-center py-5 ${
                index !== 0 ? "border-l border-white/20" : ""
              }`}
            >
              <p className="text-center text-base font-semibold text-white">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}