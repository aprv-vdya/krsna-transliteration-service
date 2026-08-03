"useClient";
import { createContext, useContext, useState, type ReactNode } from "react";

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
  return <div>{children}</div>;
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
      className="w-full text-left"
    >
      {children}
    </button>
  );
}

interface ContentProps {
  children: ReactNode;
}

function Content({ children }: ContentProps) {
  const { open } = useAccordion();

  if (!open) return null;

  return <div>{children}</div>;
}

Accordion.Section = Section;
Accordion.Label = Label;
Accordion.Content = Content;

export default Accordion;
