"use client";

import PageContent from "@/app/about-us/PageContent";
import HomePageContent from "@/app/components/reuseable/PageContent";
import RecognizePageContent from "@/app/components/reuseable/RecognizePageContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

import { IoIosArrowRoundForward } from "react-icons/io";

const AwardSection = () => {
	const introRef = useRef<HTMLDListElement>(null);
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
					const conditions = context.conditions as {
						isDesktop: boolean;
						isMobile: boolean;
						reduceMotion: boolean;
					};
					// context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
					let { isDesktop } = conditions;

					gsap.set(".bottomImg", { autoAlpha: 0, y: 50 });
					gsap.set(".awardContent", { autoAlpha: 0, yPercent: 0 });
					gsap.set(".bottom-slide .swiper-slide", { autoAlpha: 0 });
					gsap.set(
						[".awardContent h1", ".awardContent p", ".awardContent button"],
						{ autoAlpha: 0 }
					);
					gsap.set(".imgRow img", { top: "50%", autoAlpha: 0 });
					let tl = gsap.timeline({
						defaults: {
							duration: 1.25,
						},
						scrollTrigger: {
							trigger: introRef.current,
							start: `${isDesktop ? "top top" : "top 25%"}`,
							end: "bottom 15%",
							pin: `${isDesktop ? true : false}`,
							markers: false,

							onEnter: () => {
								tl.to(".awardContent", {
									yPercent: 0,
									autoAlpha: 1,
								})
									.to([".awardContent h1"], { autoAlpha: 1 }, "<")
									.to(
										".bottomImg",
										{
											y: 0,
											autoAlpha: 1,
										},
										"-=0.5"
									)
									.to([".awardContent p", ".awardContent button"], {
										autoAlpha: 1,
										stagger: 0.3,
									})
									.to(
										".imgRow img:nth-child(1)",
										{
											top: "10%",
											autoAlpha: 1,
										},
										"<"
									)
									.to(".imgRow img:nth-child(1)", {
										autoAlpha: 0,
									})
									.to(
										".imgRow img:nth-child(2)",
										{
											top: "10%",
											autoAlpha: 1,
										},
										"<"
									)
									.to(".imgRow img:nth-child(2)", {
										autoAlpha: 0,
									})
									.to(
										".imgRow img:nth-child(3)",
										{
											top: "10%",
											autoAlpha: 1,
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
		{ scope: introRef }
	);

	return (
		<section
			ref={introRef}
			className="bg-white lg:overflow-hidden min-h-screen relative z-10"
		>
			<div className="h-full">
				<section className="lg:px-0 h-full">
					<div className="bg-white scrollingSection relative h-full">
						<div className="mx-auto">
							<RecognizePageContent
								textColorh1={"#278CB3"}
								textColorp={"#000"}
								title1={"Excellence"}
								title2="Recognized"
								description="Our esteemed clientele is a testament to our trusted, high-quality service. See the diverse portfolio that makes us a leader in FM"
								imageUrl="/Company.png"
								shouldReverse={true}
								buttonTitle="See Our Awards"
							/>
							<div className="overflow-hidden absolute left-0 right-0 z-60 bottom-0 h-32 max-sm:h-28 bottomImg">
								<Image
									src="/recognizeBottomImg.png"
									alt=""
									className="back-img block object-cover object-top h-full w-full pointer-events-none"
									width="1920"
									height="179"
									priority={true}
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default AwardSection;
