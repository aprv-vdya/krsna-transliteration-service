"useClient";
import { createContext, useContext, useState, type ReactNode } from "react";
import NavDown from "./NavDown";
import NavUp from "./NavUp";

interface AccordionContextValue {
  open: boolean;
  toggle: () => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordion() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      "Accordion.Label and Accordion.Content must be used inside Accordion.Section",
    );
  }
  return context;
}

interface AccordionProps {
  children: ReactNode;
}

function Accordion({ children }: AccordionProps) {
  return <div className="flex flex-col">{children}</div>;
}

interface SectionProps {
  children: ReactNode;
}

function Section({ children }: SectionProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AccordionContext.Provider
      value={{
        open,
        toggle: () => setOpen((prev) => !prev),
      }}
    >
      <div>{children}</div>
    </AccordionContext.Provider>
  );
}

interface LabelProps {
  children: ReactNode;
}

function Label({ children }: LabelProps) {
  const { open, toggle } = useAccordion();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-expanded={open}
      className={`w-150 max-w-full text-left text-[#3C2F1E] flex flex-row items-center justify-between gap-4 border border-[#979082] ${
        open ? "rounded-t-lg" : "rounded-lg"
      } px-4 py-3 bg-[#C2BAA8] shadow-md hover:shadow-lg transition-shadow`}
    >
      <span className="min-w-0 flex-1 wrap-break-word">{children}</span>
      <span className="shrink-0">
        {open ? <NavUp size={20} /> : <NavDown size={20} />}
      </span>
    </button>
  );
}

interface ContentProps {
  children: ReactNode;
}

function Content({ children }: ContentProps) {
  const { open } = useAccordion();

  if (!open) return null;

  return (
    <div className="border border-[#979082] rounded-b-lg bg-[#FAF5EB] px-4 py-3 text-[#4E3D26]">
      {children}
    </div>
  );
}

Accordion.Section = Section;
Accordion.Label = Label;
Accordion.Content = Content;

export default Accordion;
