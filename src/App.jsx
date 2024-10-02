"use client";

import { useLayoutEffect, useState } from "react";
import gsap from "gsap";

import { Hero } from "./components/Hero";
import { Loader } from "./components/Loader";

function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });

      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <main className="w-full h-full">
      {loaderFinished ? <Hero /> : <Loader timeline={timeline} />}
    </main>
  );
}

export default App;
