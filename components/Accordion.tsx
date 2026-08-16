import {
  createContext,
  useContext,
  useState,
  useId,
  type ReactNode,
  type CSSProperties,
} from "react";
import NavDown from "./NavDown";
import NavUp from "./NavUp";
import { cva } from "class-variance-authority";

const label = cva(
  "w-full flex flex-row items-center justify-between gap-4 border border-[#979082] bg-[#C2BAA8] px-4 py-3 text-left text-[#3C2F1E] transition-[border-bottom-left-radius,border-bottom-right-radius] duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none",
  {
    variants: {
      open: {
        true: "rounded-t-lg rounded-bl-none rounded-br-none",
        false: "rounded-lg",
      },
    },
  },
);

const content = cva(
  "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out",
  {
    variants: {
      open: {
        true: "grid-rows-[1fr]",
        false: "grid-rows-[0fr]",
      },
    },
  },
);

interface AccordionContextValue {
  open: boolean;
  toggle: () => void;
  contentId: string;
  labelId: string;
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
  width?: CSSProperties["width"];
}

function Accordion({ children, width = "500px" }: AccordionProps) {
  return (
    <div className="flex flex-col gap-1" style={{ width }}>
      {children}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
}

function Section({ children }: SectionProps) {
  const [open, setOpen] = useState<boolean>(false);
  const contentId = useId();
  const labelId = useId();

  return (
    <AccordionContext.Provider
      value={{
        open,
        toggle: () => setOpen((prev) => !prev),
        contentId,
        labelId,
      }}
    >
      <div
        className="max-w-full
          rounded-lg
          transition-shadow
          duration-300
          ease-in-out
          has-focus-visible:ring-2
          has-focus-visible:ring-[#4E3D26]
          has-focus-visible:ring-offset-2
          "
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface LabelProps {
  children: ReactNode;
}

function Label({ children }: LabelProps) {
  const { open, toggle, contentId, labelId } = useAccordion();

  return (
    <button
      type="button"
      onClick={toggle}
      id={labelId}
      aria-expanded={open}
      aria-controls={contentId}
      className={label({ open })}
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
  maxHeight?: CSSProperties["maxHeight"];
}

function Content({ children, maxHeight }: ContentProps) {
  const { open, contentId, labelId } = useAccordion();

  return (
    <div
      id={contentId}
      aria-labelledby={labelId}
      className={content({ open })}
      aria-hidden={!open}
      inert={!open}
    >
      <div className="overflow-hidden">
        <div
          className="w-full overflow-y-auto rounded-b-lg border border-[#979082] bg-[#FAF5EB] px-4 py-3 text-[#4E3D26]"
          style={{ maxHeight }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

Accordion.Section = Section;
Accordion.Label = Label;
Accordion.Content = Content;

export default Accordion;
