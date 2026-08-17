//style:
//    fonts
//    colors

"use client";
import RightArrowButton from "@components/RightArrowButton";
import LeftArrowButton from "@components/LeftArrowButton";
import Accordion from "@components/Accordion";
import { useState, useEffect, useRef } from "react";
import * as mappings from "@constants/scripts";
import { identifyChar } from "@utils/lookUp";
import Keyman from "@components/Keyman";

export default function TransliterationService() {
  const [leftInput, setLeftInput] = useState<string>("");
  const [rightInput, setRightInput] = useState<string>("");

  const leftInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = leftInputRef.current;
    if (!el) return;
    const handler = (e: Event) => {
      const value = (e.target as HTMLInputElement).value;
      setLeftInput(value);
      setRightInput(transliterateFromIast(value));
    };
    el.addEventListener("input", handler);
    return () => el.removeEventListener("input", handler);
  }, []);

  const transliterateFromIast = (input: string) => {
    let tempOutput = "";

    for (const char of input) {
      const { category, key } = identifyChar(char);
      if (key === null) {
        if (char in mappings.specialChars) {
          tempOutput += char;
          continue;
        }

        return "invalid";
      }
      switch (category) {
        case "isIastLower":
        case "isIastUpper":
          tempOutput += mappings.devanagari_letter[key];
          break;
        case "isIastNumeral":
          tempOutput += mappings.devanagari_numerals[key];
          break;
      }
    }
    const chars = tempOutput.split("");
    const output: string[] = [];

    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];

      if (char === "्" && i + 1 < chars.length) {
        const { category, key } = identifyChar(chars[i + 1]);

        if (category === "isDevanagariLetter" && key !== null && key < 17) {
          output.push(mappings.devanagari_matra[key]);
          i++;
          continue;
        }
      }

      output.push(char);
    }

    return output.join("");
  };

  const transliterateToIast = () => {};

  const transliterateAmongst = () => {};

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    setLeftInput(input);
    setRightInput(transliterateFromIast(input));
  };

  return (
    <div className="min-h-screen flex flex-col gap-20 items-center mt-5">
      <Keyman inputRef={leftInputRef} />
      <Accordion>
        <Accordion.Section>
          <Accordion.Label>
            What is Kṛṣṇa transliteration service?
          </Accordion.Label>
          <Accordion.Content>
            Description and link to tutorial video
          </Accordion.Content>
        </Accordion.Section>

        <Accordion.Section>
          <Accordion.Label>
            Type in IAST with your physical keyboard
          </Accordion.Label>
          <Accordion.Content>
            Explanation of IASTify and link to readme file
          </Accordion.Content>
        </Accordion.Section>
      </Accordion>

      <div className="flex flex-row items-center">
        <input ref={leftInputRef} value={leftInput} onChange={() => {}} />
        <div>
          <RightArrowButton onClick={() => {}} size={100} />
          <LeftArrowButton onClick={() => {}} size={100} />
        </div>
        <input value={rightInput} />
      </div>
    </div>
  );
}
