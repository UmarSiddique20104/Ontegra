"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

function TrustedByTheBest() {
	const animationRef = useRef<HTMLDivElement>(null);
	gsap.registerPlugin(ScrollTrigger, useGSAP);

	useGSAP(() => {
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
				gsap.set(".TrustMainHeading", {
					yPercent: -100,
					autoAlpha: 0,
				});
				gsap.set(".itemsRow > *", {
					y: -100,
					autoAlpha: 0,
				});
				gsap.set(".logoSliderCont", {
					autoAlpha: 0,
				});
				let tl = gsap.timeline({
					defaults: {
						duration: 1.25,
					},
					scrollTrigger: {
						trigger: animationRef.current,
						start: `${isDesktop ? "top top" : "top 25%"}`,
						end: "bottom 15%",
						pin: `${isDesktop ? true : false}`,
						markers: false,

						onEnter: () => {
							tl.to(".TrustMainHeading", {
								yPercent: 0,
								autoAlpha: 1,
							})
								.to(
									".itemsRow > *",
									{
										stagger: 0.1,
										y: 0,
										autoAlpha: 1,
									},
									"-=0.25"
								)
								.to(
									".logoSliderCont",
									{
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
	});

	return (
		<section
			ref={animationRef}
		className="bg-white relative h-full min-h-screen py-14 md:my-5 max-sm:my-[300px]"
		>
			<div className="flex justify-center flex-col gap-8 h-full">
				<div className="container mx-auto px-4 mt-auto">
					<div className="flex flex-col lg:flex-row justify-between gap-12 xl:gap-[100px] items-center">
						<div className="TrustMainHeading max-lg:w-full">
							<h1 className="TrustMainHeading 3xl:text-[105px] 2xl:text-[90px]  xl:text-7xl md:text-[60px] text-[45px] -tracking-[1.26px] lg:w-[60%] trusted-text leading-[100%] font-montserrat font-bold text-black md:mt-7">
								Trusted by the <span className="text-primary">Best</span>
							</h1>
							<Link
								href="/our-clients"
								className="animateButton block w-fit hover:bg-transparent border border-black  hover:text-black mt-[30px] bg-black rounded-full px-5 py-[7px] font-normal font-montserrat text-white"
							>
								See Our Clients
							</Link>
						</div>

						<div className="flex flex-grow flex-col items-end itemsRow w-full lg:max-w-[812px]">
							<div className="w-full">
								<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-sm:gap-3">
									<div className="team1 flex flex-col px-6  py-[50px] rounded-[10px]  items-center justify-center bg-black">
										<div className="h-[82px] text-center">
											<Image
												src="/experiance.png"
												alt="future building"
												width={88}
												height={82}
											/>
										</div>

										<h6 className="font-montserrat text-center text-white pt-8  text-xl leading-6">
											Over 20 Years
											<br />
											of Experience
										</h6>
									</div>

									<div className="team2 flex flex-col px-6 py-[50px]  rounded-[10px] items-center justify-center bg-black">
										<div className="h-[82px]  text-center">
											<Image
												src="/qualified.png"
												alt="future building"
												width={75}
												height={61}
											/>
										</div>

										<h6 className="font-montserrat text-center text-white pt-8  text-xl leading-6">
											2000+
											<br />
											Qualified Staff
										</h6>
									</div>

									<div className="team3 flex flex-col px-6 py-[50px]  rounded-[10px]  items-center justify-center bg-black">
										<div className="h-[82px] text-center">
											<Image
												src="/manage.png"
												alt="future building"
												width={59}
												height={62}
											/>
										</div>

										<h6 className="font-montserrat text-center text-white pt-8  text-xl leading-6">
											25,000+
											<br />
											Managed Units
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-[#D0D0D0] py-5 logoSliderCont mt-auto">
					<div className="logo-slider !pt-0 ">
						<div className="logo-slide-track">
							<div className="logo-slide">
								<Image src="/trushLogo1.png" height="16" width="82" alt="" />
							</div>
							<div className="logo-slide">
								<Image src="/trushLogo2.png" height="71" width="128" alt="" />
							</div>
							<div className="logo-slide">
								<Image src="/trushLogo3.png" height="47" width="48" alt="" />
							</div>
							<div className="logo-slide">
								<Image src="/trushLogo4.png" height="59" width="59" alt="" />
							</div>
							<div className="logo-slide">
								<Image src="/trushLogo5.png" height="56" width="99" alt="" />
							</div>
							<div className="logo-slide">
								<Image src="/trushLogo6.png" height="57" width="136" alt="" />
							</div>
							<div className="logo-slide">
								<Image src="/trushLogo7.png" height="58" width="82" alt="" />
							</div>
							<div className="logo-slide">
								<Image src="/trushLogo8.png" height="71" width="128" alt="" />
							</div>
							<div className="logo-slide">
								<Image src="/trushLogo1.png" height="16" width="82" alt="" />
							</div>
							<div className="logo-slide">
								<Image src="/trushLogo2.png" height="71" width="128" alt="" />
							</div>
							<div className="logo-slide">
								<Image src="/trushLogo3.png" height="47" width="48" alt="" />
							</div>
							<div className="logo-slide">
								<Image src="/trushLogo4.png" height="59" width="59" alt="" />
							</div>
							<div className="logo-slide">
								<Image src="/trushLogo5.png" height="56" width="99" alt="" />
							</div>
							<div className="logo-slide">
								<Image src="/trushLogo6.png" height="57" width="136" alt="" />
							</div>
							<div className="logo-slide">
								<Image src="/trushLogo7.png" height="58" width="82" alt="" />
							</div>
							<div className="logo-slide">
								<Image src="/trushLogo8.png" height="71" width="128" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TrustedByTheBest;
