import { FileText, Phone } from "lucide-react";

const ENQUIRE_URL = "https://brickworkindia.com/enquiry";
const CALL_TEL = "tel:+16176082427";

/**
 * Left-edge floating CTAs — each sits in a fixed slot so hover-expand
 * never shifts the sibling button.
 */
export function SpeakToUs() {
  return (
    <div className="fixed top-1/2 right-4 z-50 flex -translate-y-1/2 flex-col gap-3 sm:right-5">
      {/* Enquire — fixed slot; pill expands to the right */}
      <div className="relative h-12 w-12 shrink-0">
        <a
          href={ENQUIRE_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Enquire Now — contact Brickwork India"
          className="group/enquire absolute top-0 right-0 flex h-12 w-12 items-center overflow-hidden rounded-full border-2 border-white bg-[#105480] text-white shadow-lg transition-[width,background-color] duration-300 ease-out hover:w-[8.75rem] hover:bg-[#ba2443] focus-visible:w-[8.75rem] focus-visible:bg-[#ba2443] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          style={{ boxShadow: "0 8px 22px -6px rgba(0,0,0,0.45)" }}
        >
          <span className="flex size-12 shrink-0 items-center justify-center">
            <FileText className="size-[1.125rem]" strokeWidth={1.75} aria-hidden />
          </span>
          <span className="max-w-0 overflow-hidden pr-0 text-xs font-semibold tracking-wide whitespace-nowrap uppercase opacity-0 transition-all duration-300 ease-out group-hover/enquire:max-w-[5.5rem] group-hover/enquire:pr-3.5 group-hover/enquire:opacity-100 group-focus-visible/enquire:max-w-[5.5rem] group-focus-visible/enquire:pr-3.5 group-focus-visible/enquire:opacity-100">
            Enquire
          </span>
        </a>
      </div>

      {/* Call — fixed slot; expands independently */}
      <div className="relative h-12 w-12 shrink-0">
        <a
          href={CALL_TEL}
          aria-label="Call Brickwork India at +1 (617) 608 2427"
          className="group/call absolute top-0 right-0 flex h-12 w-12 items-center overflow-hidden rounded-full border-2 border-white bg-[#105480] text-white shadow-lg transition-[width,background-color] duration-300 ease-out hover:w-[7.25rem] hover:bg-[#ba2443] focus-visible:w-[7.25rem] focus-visible:bg-[#ba2443] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          style={{ boxShadow: "0 8px 22px -6px rgba(0,0,0,0.45)" }}
        >
          <span className="flex size-12 shrink-0 items-center justify-center">
            <Phone className="size-[1.125rem]" strokeWidth={1.75} aria-hidden />
          </span>
          <span className="max-w-0 overflow-hidden pr-0 text-xs font-semibold tracking-wide whitespace-nowrap uppercase opacity-0 transition-all duration-300 ease-out group-hover/call:max-w-[4rem] group-hover/call:pr-3.5 group-hover/call:opacity-100 group-focus-visible/call:max-w-[4rem] group-focus-visible/call:pr-3.5 group-focus-visible/call:opacity-100">
            Call
          </span>
        </a>
      </div>
    </div>
  );
}
