"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const Alegra = "/alegra.png";

function Team() {
	const animationRef = useRef<HTMLDivElement>(null);
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
				(context) => {
					console.log(context.conditions);
					const conditions = context.conditions as {
						isDesktop: boolean;
						isMobile: boolean;
						reduceMotion: boolean;
					};
					// context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
					let { isDesktop } = conditions;

					const intro = animationRef.current!;
					const team = intro.querySelectorAll(".team");
					gsap.set(".team", { autoAlpha: 0, yPercent: 100 });
					let tl = gsap.timeline({
						defaults: {
							duration: 1.25,
						},
						scrollTrigger: {
							trigger: intro,
							start: `${isDesktop ? "top top" : "top 25%"}`,
							end: "bottom 15%",
							pin: `${isDesktop ? true : false}`,
							markers: false,

							onEnter: () => {
								tl.to(team, {
									yPercent: 0,
									autoAlpha: 1,
									stagger: 0.5,
									duration: 1,
								});
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
		{ scope: animationRef }
	);
	return (
		<div
			ref={animationRef}
			className="bg-white relative z-30 min-h-[100svh] flex items-center justify-center py-20 lg:pt-0 overflow-hidden"
		>
			<div className="container mx-auto md:pt-28 lg:px-5 gap-5 flex-col lg:flex-row px-4 flex items-strech justify-center">
				<div className="team w-full">
					<div className="bg-[#101010]  relative z-10 pt-[5px] flex items-center justify-center">
						<Image
							src="/Alegra.png"
							alt="future building"
							className="h-auto  "
							width={390}
							height={390}
						/>
						<span className="absolute team-bg w-[345px] top-[10px] left-[50%] translate-x-[-50%] h-[345px] bg-white z-[-1] opacity-10 rounded-full"></span>
					</div>
					<div className="flex flex-col items-center justify-strech">
						<h4 className="text-black text-center mt-[37px] mb-[10px] font-montserrat font-bold text-lg md:text-[40px] md:leading-[45px]">
							Alegra
						</h4>
						<p className="text-[#9B9B9B] text-center font-montserrat font-medium text-sm md:text-[20px]">
							Your 24x7 AI Concierge
						</p>
						<Link
							href="/alegra"
							className="animateButton block w-fit mx-auto md:mx-0 hover:bg-transparent border border-black  hover:text-black mt-[30px] bg-black rounded-full px-5 py-[7px] font-normal font-montserrat text-white"
						>
							Know more
						</Link>
					</div>
				</div>
				<div className="w-full team">
					<div className="bg-[#101010] relative z-10  flex items-center justify-center pt-[18px]">
						<Image
							src="/TechiMain.png"
							alt="future building"
							className="z-10 h-auto"
							width={446}
							height={439}
						/>
						<span className="absolute team-bg w-[345px] top-[10px] left-[50%] translate-x-[-50%] h-[345px] bg-white z-[-1] opacity-10 rounded-full"></span>
					</div>
					<div className="flex flex-col items-center justify-center">
						<h4 className="text-black text-center mt-[37px] mb-[10px] font-montserrat font-bold text-lg md:text-[40px] md:leading-[45px]">
							Techi
						</h4>
						<p className="text-[#9B9B9B] text-center font-montserrat font-medium text-sm md:text-[20px]">
							Our AI Expert in Excellence
						</p>
						<Link
							href="/techi"
							className="animateButton block w-fit mx-auto md:mx-0 hover:bg-transparent border border-black  hover:text-black mt-[30px] bg-black rounded-full px-5 py-[7px] font-normal font-montserrat text-white"
						>
							Know more
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Team;
