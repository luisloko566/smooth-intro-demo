import gsap from "gsap";

export const introAnimation = (wordGroupRef) => {
  const tl = gsap.timeline();

  tl.to(wordGroupRef.current, {
    yPercent: -529,
    duration: 5,
    ease: "power3.inOut",
  });

  return tl;
};

export const progressAnimation = (progressRef, progressNumberRef) => {
  const tl = gsap.timeline();

  tl.to(progressRef.current, {
    width: "100%",
    duration: 5,
    ease: "power3.inOut",
  })
    .to(
      progressNumberRef.current,
      {
        textContent: 100,
        duration: 5,
        roundProps: "textContent",
        ease: "power3.inOut",
      },
      "<"
    )
    .to(progressNumberRef.current, {
      y: 24,
      autoAlpha: 0,
    });

  return tl;
};

export const collapseWords = (loaderRef) => {
  const tl = gsap.timeline();

  tl.to(loaderRef.current, {
    height: 0,
    duration: 2,
    ease: "circ",
  });

  return tl;
};
