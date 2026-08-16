import {
  iast_lower,
  iast_upper,
  iast_numerals,
  devanagari_letter,
  devanagari_matra,
  devanagari_numerals,
  bengali_letter,
  bengali_matra,
  bengali_numerals,
} from "@constants/scripts";

export type CharCategory =
  | "isIastLower"
  | "isIastUpper"
  | "isIastNumeral"
  | "isDevanagariLetter"
  | "isDevanagariMatra"
  | "isDevanagariNumeral"
  | "isBengaliLetter"
  | "isBengaliMatra"
  | "isBengaliNumeral";

export interface CharMatch {
  category: CharCategory | null;
  key: number | null;
}

const charMap = new Map<string, CharMatch>();

function addToMap(table: Record<number, string>, category: CharCategory): void {
  for (const [key, value] of Object.entries(table)) {
    charMap.set(value, {
      category,
      key: Number(key),
    });
  }
}
//["7", "ṛ"]

addToMap(iast_lower, "isIastLower");
addToMap(iast_upper, "isIastUpper");
addToMap(iast_numerals, "isIastNumeral");

addToMap(devanagari_letter, "isDevanagariLetter");
addToMap(devanagari_matra, "isDevanagariMatra");
addToMap(devanagari_numerals, "isDevanagariNumeral");

addToMap(bengali_letter, "isBengaliLetter");
addToMap(bengali_matra, "isBengaliMatra");
addToMap(bengali_numerals, "isBengaliNumeral");

export function identifyChar(char: string): CharMatch {
  return charMap.get(char) ?? { category: null, key: null };
}
// "ṛ" → {
//   category: "isIastLower",
//   key: 7
// }
