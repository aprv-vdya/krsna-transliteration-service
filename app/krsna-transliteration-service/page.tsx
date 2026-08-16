//style:
//    fonts
//    colors

"use client";
import RightArrowButton from "@components/RightArrowButton";
import LeftArrowButton from "@components/LeftArrowButton";
import Accordion from "@components/Accordion";
import { useState } from "react";
import * as mappings from "@constants/scripts";
import { identifyChar } from "@utils/lookUp";

export default function TransliterationService() {
  const [leftInput, setLeftInput] = useState<string>("");
  const [rightInput, setRightInput] = useState<string>("");

  const transliterateFromIast = (input: string) => {
    let tempOutput = "";

    for (const char of input) {
      const { category, key } = identifyChar(char);
      if (key === null) return "to do";
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

    return tempOutput;
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
        <input value={leftInput} onChange={(e) => handleInputChange(e)} />
        <div>
          <RightArrowButton onClick={() => {}} size={100} />
          <LeftArrowButton onClick={() => {}} size={100} />
        </div>
        <input value={rightInput} />
      </div>
    </div>
  );
}
