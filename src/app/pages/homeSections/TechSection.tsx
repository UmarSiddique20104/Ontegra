"use client";

import { useTriggerStore } from "@/store/Trigger-Store";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

const TechSection = () => {
  const intro1Ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(
    () => {
      let tl = gsap.timeline({
        defaults: {
          duration: 1.25,
        },
        scrollTrigger: {
          trigger: intro1Ref.current,
          pin: intro1Ref.current,
          scrub: 1,
          snap: 1,
          markers: false,
        },
      });

      tl.to(".firstCont", {
        y: 0,
        ease: "power2.inOut",
        delay: 2,
      })
        .to(
          ".subHeading",
          {
            autoAlpha: 0,
            ease: "power2.inOut",
            height: 0,
          },
          "<"
        )
        .to(".content", {
          autoAlpha: 1,
          y: 0,
          ease: "power2.inOut",
        });
    },
    { scope: intro1Ref }
  );

  return (
    <section
      ref={intro1Ref}
      className="bg-black min-h-screen lg:py-28 relative"
    >
      {/* <div className="absolute inset-0 scroller opacity-0 z-[999] w-full h-[70svh] xl:h-screen overflow-y-scroll top-0 left-0">
        <div ref={animationRef} className="h-[100svh] w-full z-[999]"></div>
      </div> */}
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col md:flex-row h-full">
          <div className="h-full w-full">
            <div className="flex flex-col justify-center items-center h-full text-center">
              <div className="firstCont translate-y-1/2">
                <div className="subHeading font-montserrat meet-text font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[46px] 2xl:text-[52px] xl:leading-[54px] 2xl:leading-[63px] text-[#fff] mb-3">
                  Meet
                </div>

                <h2 className="max-sm:hidden max-[2560px]:block mainHeading font-montserrat alegra-text font-bold text-4xl md:text-5xl lg:text-7xl xl:text-[100px] 2xl:text-[150px] lg:leading-snug xl:leading-[134px] 2xl:leading-[184px] text-white mb-12">
                  Alegra  <span className="text-[#313131]">&</span>  Techi
                </h2>

                <h2 className="max-sm:block max-[2560px]:hidden mainHeading font-montserrat alegra-text font-bold text-4xl md:text-5xl lg:text-7xl xl:text-[100px] 2xl:text-[150px] lg:leading-snug xl:leading-[134px] 2xl:leading-[184px] text-white mb-12">
                  Alegra  {" "}
                  <br />
                  <span className="text-[#313131]">&</span>   {" "}
                  <br />
                    Techi
                </h2>

                <h3 className="subHeading font-montserrat sub-title font-medium text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[70px] 2xl:leading-[86px] text-[#5D5D5D]">
                  Your AI Partners in Excellence
                </h3>
              </div>
              <div className="content opacity-0 translate-y-[100%] font-montserrat des-title font-medium text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[70px] 2xl:leading-[86px] text-[#fff] max-w-[1254px] mx-auto">
                Ontegra’s <span className="text-primary">AI-powered</span> duo,
                providing round-the-clock smart assistance and ensuring seamless
                operations and customer care
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
