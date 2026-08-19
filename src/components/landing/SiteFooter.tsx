import { CalendarClock, Globe, Mail } from "lucide-react";
import touchIcon from "../../assets/touch.png";

const SCHEDULE_URL = "https://calendly.com/brickworkindia/30min";
const US_TEL = "tel:+16176082427";
const IN_TEL = "tel:+918067519999";
const EMAIL = "mailto:info@brickworkindia.com";
const WEBSITE = "https://www.brickworkindia.com";

/** Magenta contact strip from Brickwork footer. */
export function SiteFooter() {
  return (
    <footer className="w-full">
      <div className="border-t border-white/50" style={{ background: "#ba2443" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/35 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <a
            href={SCHEDULE_URL}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/5 sm:justify-center sm:px-5"
          >
            <CalendarClock className="size-9 shrink-0 text-white" strokeWidth={1.5} aria-hidden />
            <span className="min-w-0">
              <span className="block text-sm font-bold text-white">Schedule Meeting</span>
              <span className="block text-[11px] leading-tight text-white/85 underline-offset-2 group-hover:underline">
                Click here to schedule
              </span>
            </span>
          </a>

          <div className="flex items-center gap-3 px-4 py-3 sm:justify-center sm:px-5">
            <img
              src={touchIcon}
              alt=""
              aria-hidden
              className="size-9 shrink-0 object-contain brightness-0 invert"
            />
            <div className="flex min-w-0 flex-col gap-0.5 text-[12px] leading-snug text-white sm:text-[13px]">
              <a href={US_TEL} className="hover:underline">
                +1 (617) 608 2427
              </a>
              <a href={IN_TEL} className="hover:underline">
                +91 80 6751 9999 Ext. 242
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 sm:justify-center sm:px-5">
            <span className="relative shrink-0" aria-hidden>
              <Globe className="size-9 text-white" strokeWidth={1.5} />
              <Mail
                className="absolute -top-0.5 -left-0.5 size-3.5 rounded-sm bg-[#ba2443] text-white"
                strokeWidth={2}
              />
            </span>
            <div className="flex min-w-0 flex-col gap-0.5 text-[12px] leading-snug text-white sm:text-[13px]">
              <a href={EMAIL} className="hover:underline">
                info@brickworkindia.com
              </a>
              <a href={WEBSITE} target="_blank" rel="noreferrer" className="font-bold hover:underline">
                www.brickworkindia.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
