"use client";
//ts-nocheck

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./homeStyle.css";

const IntroSection = () => {
	const introRef = useRef<HTMLDListElement>(null);
	const coverRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);
	const h3Ref = useRef<HTMLDivElement>(null);
	const backBgImg2 = useRef<HTMLDivElement>(null);
	const firstSec = useRef<HTMLDivElement>(null);
	const secondSec = useRef<HTMLDivElement>(null);
	const foregroundImg = useRef<HTMLImageElement>(null);
	gsap.registerPlugin(ScrollTrigger, useGSAP);
	useGSAP(
		() => {
			let introTl = gsap.timeline({ defaults: { duration: 1.25 } });
			introTl
				.to(".frontBgImg .water", {
					delay: 0.5,
					y: 0,
					ease: "expo.out"
				})
				.to(".frontBgImg > img", {
					y: 0,
					autoAlpha: 1,
					duration: 1.5,
					ease: "expo.out",
					delay: 0.4
				}, "<")
				.to(
					".firstText .h1",
					{
						y: 0,
						autoAlpha: 1,
						ease: "expo.out",
					},
				)
				.to(
					".firstContent h1",
					{
						autoAlpha: 1,
						ease: "Power2.InOut",
					}
				)
			let tl = gsap.timeline({
				defaults: {
					duration: 1.25,
				},
				scrollTrigger: {
					trigger: introRef.current,
					pin: introRef.current,
					scrub: 1,
					snap: 1,
				},
				onLeave: () => {
					tl.to(".bannerSec", {
						autoAlpha: 0,
					});
				},
				onEnterBack: () => {
					tl.to(".bannerSec", {
						autoAlpha: 1,
					});
				},
			});
			tl
				.to([".frontBgImg > img", ".frontBgImg > .water"], {
					yPercent: 25,
					xPercent: 25,
					scale: 1.5,
				})
				// .to([".frontBgImg > .water"], {
				// 	opacity: 0
				// })
				.to(
					".bannerSec .backBgImg img",
					{
						autoAlpha: 0,
					},
					"<"
				)
				.to(
					".firstContent",
					{
						autoAlpha: 0,
					},
					"<"
				)
				.to(
					".secondContent",
					{
						autoAlpha: 1,
						duration: 1,
					},
					"-=0.5"
				)
				.to([".textriter", "#typewriter"], {
					opacity: 1,
				})
				.to(".cursorContainer", {
					xPercent: 100,
				});
		},
		{
			scope: introRef,
		}
	);
	return (
		<>
			<section className="bannerSec h-svh" ref={introRef}>
				<div className="h-full w-full inset-0 relative">
					<div className="backBgImg inset-0 absolute">
						<Image
							src="/banner/background.jpg"
							alt=""
							height={959}
							width={1920}
							className="front-img block w-full h-full object-cover pointer-events-none"
							priority={true}
							ref={foregroundImg}
						/>
					</div>
					<div className="frontBgImg ">
						<Image
							src="/banner/buildings.png"
							alt=""
							width={4000}
							height={0}
							priority={true}
							className="building"
						/>
						<div className="water w-full  flex  flex-col">
							<Image
								src="/banner/sand.png"
								alt=""
								height={0}
								width={3000}
								priority={true}
							/>
							<Image
								src="/banner/water.png"
								alt=""
								height={0}
								width={3000}
								priority={true}
								className="water-sand h-fit"
							/>
						</div>
					</div>

					<div ref={firstSec} className="firstContent">
						<div className="container mx-auto px-4 text-center">
							<div className="block firstText">
								{/* <img src="/Heading.svg" alt="" className="headingSVG opacity-0 translate-y-full" /> */}
								<div className="h1">FUTURE READY</div>
							</div>
							<h1>FACILITIES MANAGEMENT SOLUTIONS</h1>
						</div>
					</div>
					<div
						ref={secondSec}
						className="secondContent container absolute inset-0 h-full px-4 mx-auto"
					>
						<div className="absolute z-30 top-1/2  -translate-y-1/2">
							<h3
								ref={h3Ref}
								className="2xl:text-[90px] sm:text-[80px] text-[12vw] text-[#000000] leading-[97%] w-full lg:w-[688px] font-montserrat font-semibold"
							>
								DEFINING TOMORROW’S STANDARDS
							</h3>
							<div className="relative max-lg:inline-block w-auto lg:w-fit" id="typewriter">
								<h6
									id="typewriterTrigger"
									ref={textRef}
									className="text-[12vw] sm:text-[80px] z-[99] 2xl:text-[90px] w-full text-[#023343] overflow-hidden leading-[97%] textcover font-montserrat font-[600]"
								>
									TODAY.
								</h6>
								<div className="cursorContainer">
									<span className="textriter" ref={coverRef}></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default IntroSection;