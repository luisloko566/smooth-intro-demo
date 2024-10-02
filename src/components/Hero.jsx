import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import styles from "../assets/Hero.module.scss";
import {
  animateImage,
  animateTitle,
  revealMenu,
} from "../assets/animations/heroAnimations";

export function Hero() {
  const timeline = useRef(gsap.timeline());

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;

      tl.add(animateTitle()).add(animateImage(), 0).add(revealMenu(), 0);
    });

    return () => context.revert();
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.hero__top}>
        <span data-menu-item data-hidden>
          Ultra
        </span>
        <span data-menu-item data-hidden>
          about
        </span>
        <span data-menu-item data-hidden>
          contact
        </span>
      </div>

      <h1 className={styles.hero__title}>
        <span data-title-first data-hidden>
          Ultra
        </span>
        <span data-hero-line className={styles.hero__line}></span>
        <span data-title-last data-hidden>
          agency
        </span>
      </h1>

      <div className={styles.hero__image}>
        <div data-image-overlay className={styles.hero__imageOverlay}></div>
        <img
          data-hidden
          data-image
          src="/blob.jpg"
          width="100%"
          height="auto"
          alt="Blob"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}
