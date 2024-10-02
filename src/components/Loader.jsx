import gsap from "gsap";
import { useRef } from "react";
import { words } from "../assets/words";
import { useEffect } from "react";

import {
  collapseWords,
  introAnimation,
  progressAnimation,
} from "../assets/animations/loaderAnimations";

export function Loader({ timeline }) {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const wordGroupRef = useRef(null);

  useEffect(() => {
    timeline &&
      timeline
        .add(introAnimation(wordGroupRef))
        .add(progressAnimation(progressRef, progressNumberRef), "<")
        .add(collapseWords(loaderRef));
  }, [timeline]);

  return (
    <section className="w-full h-full flex justify-center items-center relative bg-[#FAF9F6] ">
      <div
        ref={loaderRef}
        className="w-auto h-[41.8rem] relative overflow-hidden"
      >
        <div
          ref={wordGroupRef}
          className="w-fit h-full flex flex-col relative translate-y-0"
        >
          {words.map((word, index) => {
            return (
              <span key={index} className="block text-[3.2rem]">
                {word}
              </span>
            );
          })}
        </div>
        <div className="w-full h-[47%] absolute top-0 bg-[#FAF9F6]/55"></div>
        <div className="w-full h-[43%] absolute bottom-0 bg-[#FAF9F6]/55"></div>
      </div>

      <div
        ref={progressRef}
        className="w-[0%] h-[110px] absolute bottom-0 left-0 overflow-hidden"
      >
        <span
          ref={progressNumberRef}
          className="text-white text-[2rem] top-[50%] absolute translate-y-[-50%] right-10 z-50"
        >
          0
        </span>
        <div className="w-full h-full left-0 absolute bg-black"></div>
      </div>
    </section>
  );
}
