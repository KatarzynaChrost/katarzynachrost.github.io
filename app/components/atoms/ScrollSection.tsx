"use client";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import clsx from "clsx";

interface IScrollSectionProps {
  children: React.ReactNode;
  withoutContainer?: boolean;
}

const ScrollSection = ({ withoutContainer, children }: IScrollSectionProps) => {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elementRef.current,
        toggleActions: "restart none none none",
        scrub: false,
      },
    });

    tl.fromTo(
      elementRef.current,
      { opacity: 0, transform: "translateX(-10%)" },
      { opacity: 1, transform: "translateX(0)", duration: 2 }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={clsx("relative", {
          "mainContainer py-20": !withoutContainer,
        })}
        ref={elementRef}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollSection;
