//icons needed:
//    logo and photos - canva
//    left and right arrow buttons- svg creator

//style:
//    fonts
//    colors

"use client";
import RightArrowButton from "@/components/RightArrowButton";
import LeftArrowButton from "@/components/LeftArrowButton";
import Image from "next/image";

export default function TransliterationService() {
  return (
    <div className="min-h-screen flex flex-col gap-20 items-center">
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
          <Image src="radhakrsnaKTS.svg" alt="nn" height={80} width={80} />
          <Image src="KTS.svg" alt="logo" height={150} width={150} />
          <Image src="srilaprabhupadaKTS.svg" alt="sp" height={70} width={70} />
        </div>
        <div className="font-cinzel font-bold max-w-md text-center">
          In the service of H. D. G. A. C. Bhaktivedānta
          <br />
          Swami Prabhupāda.
        </div>
      </div>
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
