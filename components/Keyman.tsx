"use client";

import { useEffect } from "react";

export default function Keyman({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s.keyman.com/kmw/engine/18.0.249/keymanweb.js";

    script.onload = async () => {
      // @ts-ignore
      await window.keyman.init({ attachType: "manual" });

      // @ts-ignore
      await window.keyman.addKeyboards({
        id: "iastify",
        name: "IASTify",
        language: { id: "sa", name: "Sanskrit", region: "in" },
        filename: "/keyboards/iastify.js",
      });

      if (inputRef.current) {
        // @ts-ignore
        window.keyman.attachToControl(inputRef.current);
      }
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [inputRef]);

  return null;
}
