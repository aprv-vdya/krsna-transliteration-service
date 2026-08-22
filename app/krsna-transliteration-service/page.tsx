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
      setRightInput(transliterateToIast(value));
    };
    el.addEventListener("input", handler);
    return () => el.removeEventListener("input", handler);
  }, []);

  const transliterateFromIast = (input: string) => {
    let tempOutput = "";

    let precedenceKeys = [];

    for (let i = 0; i < input.length - 1; i++) {
      const twoChar = input.slice(i, i + 2);
      const { key } = identifyChar(twoChar);
      precedenceKeys.push(key);
    }

    for (let i = 0; i < input.length; i++) {
      const str =
        precedenceKeys[i] === null || i === input.length - 1
          ? input[i]
          : input.slice(i, i + 2);
      const { category, key } = identifyChar(str);
      if (key === null) {
        if (mappings.specialChars.includes(str)) {
          tempOutput += str;
          continue;
        } else {
          return "invalid";
        }
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
      if (precedenceKeys[i] !== null) {
        i++;
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

  const transliterateToIast = (input: string) => {
    const tempChars = [];
    const chars = input.split("");
    console.log(chars);

    for (let i = 0; i < chars.length; i++) {
      const { category, key } = identifyChar(chars[i]);
      if (key === null) {
        if (mappings.specialChars.includes(chars[i])) {
          tempChars.push(chars[i]);
        } else {
          return "invalid";
        }
      } else if (
        (category === "isDevanagariLetter" && (key < 17 || key === 50)) ||
        category === "isDevanagariNumeral"
      ) {
        tempChars.push(chars[i]);
      } else if (category === "isDevanagariMatra" && (key < 17 || key === 50)) {
        tempChars.push(mappings.devanagari_letter[key]);
      } else if (category === "isDevanagariMatra" && key >= 17 && key < 50) {
        const { category, key } =
          i + 1 <= chars.length - 1
            ? identifyChar(chars[i + 1])
            : { category: null, key: -1 };

        tempChars.push(`${chars[i]}्`);

        if (
          !(
            key === 0 ||
            (category === "isDevanagariMatra" && key! < 15 && key! < 50)
          )
        ) {
          tempChars.push("अ");
        }
        if (key === 0) {
          i++;
        }
      }
    }

    console.log(tempChars);
    let output = "";
    for (let i = 0; i < tempChars.length; i++) {
      const { category, key } = identifyChar(tempChars[i]);
      if (category === null && key === null) {
        output += tempChars[i];
        continue;
      }
      switch (category) {
        case "isDevanagariNumeral":
          output += mappings.iast_numerals[key!];
          break;
        case "isDevanagariLetter":
        case "isDevanagariMatra":
          output += mappings.iast_lower[key!];
          break;
      }
    }
    return output;
  };

  const transliterateAmongst = () => {};

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
