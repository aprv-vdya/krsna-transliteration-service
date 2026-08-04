//style:
//    fonts
//    colors

"use client";
import RightArrowButton from "@/components/RightArrowButton";
import LeftArrowButton from "@/components/LeftArrowButton";
import Accordion from "@/components/Accordion";

export default function TransliterationService() {
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
        <div>First textarea</div>
        <div>
          <RightArrowButton onClick={() => {}} size={100} />
          <LeftArrowButton onClick={() => {}} size={100} />
        </div>
        <div>Second textarea</div>
      </div>
    </div>
  );
}
