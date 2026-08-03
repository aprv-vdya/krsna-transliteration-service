//style:
//    fonts
//    colors

"use client";
import RightArrowButton from "@/components/RightArrowButton";
import LeftArrowButton from "@/components/LeftArrowButton";

export default function TransliterationService() {
  return (
    <div className="min-h-screen flex flex-col gap-20 items-center">
      <div className="flex flex-col items-center">
        {/* accordion */}
        <div>
          What is Kṛṣṇa transliteration service?- short description and a
          tutorial video
        </div>
        <div>
          Type in iast with your physical keyboard- short description of IASTify
          and link to readme page
        </div>
      </div>

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
