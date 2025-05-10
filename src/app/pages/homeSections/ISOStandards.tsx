"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";

const ISOS = () => {
	const isoRef = useRef<HTMLDListElement>(null);
	gsap.registerPlugin(ScrollTrigger, useGSAP);

	useGSAP(
		() => {
			let mm = gsap.matchMedia(),
				breakPoint = 992;

			mm.add(
				{
					// set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
					isDesktop: `(min-width: ${breakPoint}px)`,
					isMobile: `(max-width: ${breakPoint - 1}px)`,
					reduceMotion: "(prefers-reduced-motion: reduce)",
				},
				(context:any) => {
					const conditions = context.conditions as {
						isDesktop: boolean;
						isMobile: boolean;
						reduceMotion: boolean;
					};
					// context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
					let { isDesktop } = conditions;

					gsap.set(".ribbon", {
						yPercent: -100,
					});
					gsap.set(".topContent", {
						yPercent: -50,
						autoAlpha: 0,
					});
					gsap.set(".bottomContent", {
						yPercent: 50,
						autoAlpha: 0,
					});
					gsap.set(".right-text img", {
						xPercent: 50,
						autoAlpha: 0,
						stagger: 0.1,
					});
					let stripTl = gsap.timeline({
						defaults: {
							duration: 1.25,
						},
						scrollTrigger: {
							trigger: isoRef.current,
							start: `${isDesktop ? "top top" : "top 25%"}`,
							end: "bottom 15%",
							pin: `${isDesktop ? true : false}`,
							markers: false,

							onEnter: () => {
								stripTl
									.to(".ribbon", {
										yPercent: 0,
									})
									.to(".topContent", {
										yPercent: 0,
										autoAlpha: 1,
									})
									.to(
										".bottomContent",
										{
											yPercent: 0,
											autoAlpha: 1,
										},
										"-=0.5"
									)
									.to(
										".right-text img",
										{
											xPercent: 0,
											autoAlpha: 1,
											stagger: 0.1,
										},
										"<"
									);
							},
						},
					});

					return () => {
						// optionally return a cleanup function that will be called when none of the conditions match anymore (after having matched)
						// it'll automatically call context.revert() - do NOT do that here . Only put custom cleanup code here.
					};
				}
			);
		},
		{ scope: isoRef }
	);

	return (
		<section
			ref={isoRef}
			className="bg-white text-black relative z-10 overflow-hidden h-full min-h-screen"
		>
			<div className="container mx-auto px-4 h-full">
				<div className="flex flex-col items-center justify-center md:flex-row h-full">
					<div className="w-12 sm:w-16 md:w-1/12 h-full max-md:absolute max-md:left-4 max-md:top-0 max-md:bottom-0">
						<div className="h-full bg-[#E30713] px-1 sm:px-3 min-[1800px]:pt-28 pt-[100px] ribbon">
							<Image
								src="/ISO.svg"
								alt="ISO Logo"
								fill={false}
								width="98"
								height="90"
								className="w-full h-auto iso-logo"
							/>
						</div>
					</div>
					<div className="w-full md:w-3/5 pl-14 sm:pl-20 md:pl-14">
						<div className="pt-10 md:py-28">
							<div className="flex flex-col justify-center left-text topContent">
								<div className="font-montserrat font-semibold italic text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-black -tracking-[0.36px]">
									Future-Ready FM Solutions
								</div>

								<h2 className="font-montserrat font-bold 2xl:text-[80px] xl:text-7xl lg:text-5xl text-4xl 2xl:leading-[89px] leading-tight -tracking-[0.96px] text-black">
									Service Beyond{" "}
									<span className="text-[#278CB3]">Standards</span>
								</h2>
							</div>
							<div className="bottomContent">
								<div className="font-montserrat font-normal text-base md:text-2xl text-[#707070] tracking-[0.682px] 2xl:mb-[64px] 2xl:mt-[77px] xl:my-12 my-6">
									Ontegra isn’t just aligned with international service
									standards; we define them. Adhering to ISO 41001, 55001,
									14001, and 18001, we’re setting the benchmark for quality in
									FM
								</div>
								<Link href="/iso-standards" className="animateButton block w-fit hover:bg-transparent border border-black  hover:text-black mt-[30px] bg-black rounded-full px-5 py-[7px] font-normal font-montserrat text-white">
									See Our Standards
								</Link>
							</div>
						</div>
					</div>
					<div className="w-full md:w-5/12 flex flex-wrap justify-center pl-14 sm:pl-20 md:pl-4 max-md:py-6">
						<div className="md:space-y-6 max-md:grid max-md:grid-flow-col max-md:gap-4">
							<Image
								src="/serviceImg1.png"
								alt="serviceImg1"
								fill={false}
								width="122"
								height="58"
							/>
							<Image
								src="/serviceImg2.png"
								alt="serviceImg2"
								fill={false}
								width="122"
								height="60"
							/>
							<Image
								src="/serviceImg3.png"
								alt="serviceImg3"
								fill={false}
								width="138"
								height="75"
							/>
							<Image
								src="/serviceImg4.png"
								alt="serviceImg4"
								fill={false}
								width="169"
								height="75"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ISOS;
