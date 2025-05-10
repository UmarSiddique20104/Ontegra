"use client";
//ts-nocheck

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const Expertise = () => {
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

					gsap.set(".text-wrapper", {
						yPercent: 100,
						autoAlpha: 0,
					});
					gsap.set("#expertSlider .swiper-slide", {
						yPercent: 100,
						autoAlpha: 0,
					});
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
								tl.to(".text-wrapper", {
									yPercent: 0,
									autoAlpha: 1,
								}).to(
									"#expertSlider .swiper-slide",
									{
										yPercent: 0,
										autoAlpha: 1,
										stagger: 0.1,
									},
									"-=0.5"
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
		{
			scope: introRef,
		}
	);
	return (
		<section
			ref={introRef}
			id="expertise"
			className="h-full min-h-screen bg-white"
		>
			<div className="container mx-auto px-4 h-full">
				<div className="flex justify-center flex-col h-full">
					<div className="text-wrapper">
						<h2 className="font-montserrat font-extrabold italic uppercase text-4xl lg:text-[53px] lg:leading-[54px] text-[#3E3E3E] max-md:mb-3">
							A Spectrum of <span className="text-primary">Expertise</span>
						</h2>
						<h3 className="font-montserrat font-medium text-xl lg:text-[29px] lg:leading-[42px] text-[#7C7C7C]">
							Our Comprehensive FM Services
						</h3>
					</div>

					<div className="mt-0 2xl:mt-[100px] relative">
						<Swiper
							slidesPerView={2}
							spaceBetween={26}
							centeredSlides={false}
							loop={false}
							navigation={true}
							modules={[Navigation]}
							className="experts-slider"
							id="expertSlider"
							breakpoints={{
								// when window width is >= 640px
								640: {
									slidesPerView: 3,
									centeredSlides: false,
								},
								// when window width is >= 768px
								768: {
									slidesPerView: 4,
									centeredSlides: false,
								},
								// when window width is >= 1024px
								1024: {
									slidesPerView: 5,
									centeredSlides: false,
								},
								// when window width is >= 1200px
								1200: {
									slidesPerView: 5,
									centeredSlides: false,
								},
							}}
						>
							<SwiperSlide>
								{({ isActive }) => (
									// <div className={`human ${isActive ? "sm:scale-115" : ""}`}>
									<div className={`human w-full group ${isActive ? "" : ""}`}>
										<div
											className={`${isActive
													? "pb-[124%] 2xl:pb-[calc(124%+40px)] 2xl:-mt-5 1xl:pb-[calc(124%+40px)] 1xl:-mt-5 6xl:pb-[calc(114%+40px)] 6xl:-mt-5"
													: "pb-[124%] 2xl:pb-[124%] 1xl:pb-[124%] 6xl:pb-[114%]"
												} mb-4 md:mb-6 relative`}
										>
											<Link href='/services/total-fm'>
												<Image
													className={`${isActive
															? // ? "sm:scale-110"
															""
															: "grayscale group-hover:grayscale-0"
														} w-full !h-full object-cover absolute top-0 left-0`}
													src="/TotalFacilitiesManagement.png"
													alt="Total Facilities Management"
													height="394"
													width="280"
												/>
											</Link>
										</div>
										<h4
											className={`font-montserrat 2xl:leading-[27px] uppercase ${isActive
													? "text-[#434343] sm:text-black font-semibold sm:font-bold text-sm sm:text-lg md:text-xl 2xl:text-[28px]"
													: "text-[#434343] font-semibold text-sm sm:text-base md:text-lg 2xl:text-[22px]"
												}`}
										>
											Total Facilities Management
										</h4>
									</div>
								)}
							</SwiperSlide>
							<SwiperSlide>
								{({ isActive }) => (
									<div className={`human w-full group ${isActive ? "" : ""}`}>
										<div
											className={`${isActive
													? "pb-[124%] 2xl:pb-[calc(124%+40px)] 2xl:-mt-5 1xl:pb-[calc(124%+40px)] 1xl:-mt-5 6xl:pb-[calc(114%+40px)] 6xl:-mt-5"
													: "pb-[124%] 2xl:pb-[124%] 1xl:pb-[124%] 6xl:pb-[114%]"
												} mb-4 md:mb-6 relative`}
										>
											<Link href='/services/hard-fm'>
												<Image
													className={`${isActive
															? ""
															: "grayscale group-hover:grayscale-0"
														} w-full !h-full object-cover absolute top-0 left-0`}
													src="/HardFM.png"
													alt="Hard FM"
													height="394"
													width="280"
												/>
											</Link>
										</div>
										<h4
											className={`font-montserrat 2xl:leading-[27px] uppercase ${isActive
													? "text-[#434343] sm:text-black font-semibold sm:font-bold text-sm sm:text-lg md:text-xl 2xl:text-[28px]"
													: "text-[#434343] font-semibold text-sm sm:text-base md:text-lg 2xl:text-[22px]"
												}`}
										>
											Hard FM
										</h4>
									</div>
								)}
							</SwiperSlide>
							<SwiperSlide>
								{({ isActive }) => (
									<div className={`human w-full group ${isActive ? "" : ""}`}>
										<div
											className={`${isActive
													? "pb-[124%] 2xl:pb-[calc(124%+40px)] 2xl:-mt-5 1xl:pb-[calc(124%+40px)] 1xl:-mt-5 6xl:pb-[calc(114%+40px)] 6xl:-mt-5"
													: "pb-[124%] 2xl:pb-[124%] 1xl:pb-[124%] 6xl:pb-[114%]"
												} mb-4 md:mb-6 relative`}
										>
											<Link href='/services/soft-fm'>
												<Image
													className={`${isActive
															? ""
															: "grayscale group-hover:grayscale-0"
														} w-full !h-full object-cover absolute top-0 left-0`}
													src="/SoftFM.png"
													alt="Soft FM"
													height="394"
													width="280"
												/>
											</Link>
										</div>
										<h4
											className={`font-montserrat 2xl:leading-[27px] uppercase ${isActive
													? "text-[#434343] sm:text-black font-semibold sm:font-bold text-sm sm:text-lg md:text-xl 2xl:text-[28px]"
													: "text-[#434343] font-semibold text-sm sm:text-base md:text-lg 2xl:text-[22px]"
												}`}
										>
											Soft FM
										</h4>
									</div>
								)}
							</SwiperSlide>
							<SwiperSlide>
								{({ isActive }) => (
									<div className={`human w-full group ${isActive ? "" : ""}`}>
										<div
											className={`${isActive
													? "pb-[124%] 2xl:pb-[calc(124%+40px)] 2xl:-mt-5 1xl:pb-[calc(124%+40px)] 1xl:-mt-5 6xl:pb-[calc(114%+40px)] 6xl:-mt-5"
													: "pb-[124%] 2xl:pb-[124%] 1xl:pb-[124%] 6xl:pb-[114%]"
												} mb-4 md:mb-6 relative`}
										>
											<Link href='/services/security'>
												<Image
													className={`${isActive
															? ""
															: "grayscale group-hover:grayscale-0"
														} w-full !h-full object-cover absolute top-0 left-0`}
													src="/SecurityServices.png"
													alt="Security Services"
													height="394"
													width="280"
												/>
											</Link>
										</div>

										<h4
											className={`font-montserrat 2xl:leading-[27px] uppercase ${isActive
													? "text-[#434343] sm:text-black font-semibold sm:font-bold text-sm sm:text-lg md:text-xl 2xl:text-[28px]"
													: "text-[#434343] font-semibold text-sm sm:text-base md:text-lg 2xl:text-[22px]"
												}`}
										>
											Security Services
										</h4>
									</div>
								)}
							</SwiperSlide>
							<SwiperSlide>
								{({ isActive }) => (
									<div className={`human w-full group ${isActive ? "" : ""}`}>
										<div
											className={`${isActive
													? "pb-[124%] 2xl:pb-[calc(124%+40px)] 2xl:-mt-5 1xl:pb-[calc(124%+40px)] 1xl:-mt-5 6xl:pb-[calc(114%+40px)] 6xl:-mt-5"
													: "pb-[124%] 2xl:pb-[124%] 1xl:pb-[124%] 6xl:pb-[114%]"
												} mb-4 md:mb-6 relative`}
										>
											<Link href='/services/energy-management'>
												<Image
													className={`${isActive
															? ""
															: "grayscale group-hover:grayscale-0"
														} w-full !h-full object-cover absolute top-0 left-0`}
													src="/EnergyManagement.png"
													alt="Energy Management"
													height="394"
													width="280"
												/>
											</Link>
										</div>

										<h4
											className={`font-montserrat 2xl:leading-[27px] uppercase ${isActive
													? "text-[#434343] sm:text-black font-semibold sm:font-bold text-sm sm:text-lg md:text-xl 2xl:text-[28px]"
													: "text-[#434343] font-semibold text-sm sm:text-base md:text-lg 2xl:text-[22px]"
												}`}
										>
											Energy Management
										</h4>
									</div>
								)}
							</SwiperSlide>
							<SwiperSlide>
								{({ isActive }) => (
									<div className={`human w-full group ${isActive ? "" : ""}`}>
										<div
											className={`${isActive
													? "pb-[124%] 2xl:pb-[calc(124%+40px)] 2xl:-mt-5 1xl:pb-[calc(124%+40px)] 1xl:-mt-5 6xl:pb-[calc(114%+40px)] 6xl:-mt-5"
													: "pb-[124%] 2xl:pb-[124%] 1xl:pb-[124%] 6xl:pb-[114%]"
												} mb-4 md:mb-6 relative`}
										>
											<Link href='/services/specialized-services'>
												<Image
													className={`${isActive
															? ""
															: "grayscale group-hover:grayscale-0"
														} w-full !h-full object-cover absolute top-0 left-0`}
													src="/SpecializedServices.png"
													alt="Specialized Services"
													height="394"
													width="280"
												/>
											</Link>
										</div>

										<h4
											className={`font-montserrat 2xl:leading-[27px] uppercase ${isActive
													? "text-[#434343] sm:text-black font-semibold sm:font-bold text-sm sm:text-lg md:text-xl 2xl:text-[28px]"
													: "text-[#434343] font-semibold text-sm sm:text-base md:text-lg 2xl:text-[22px]"
												}`}
										>
											Specialized Services
										</h4>
									</div>
								)}
							</SwiperSlide>
							<SwiperSlide>
								{({ isActive }) => (
									<div className={`human w-full group ${isActive ? "" : ""}`}>
										<div
											className={`${isActive
													? "pb-[124%] 2xl:pb-[calc(124%+40px)] 2xl:-mt-5 1xl:pb-[calc(124%+40px)] 1xl:-mt-5 6xl:pb-[calc(114%+40px)] 6xl:-mt-5"
													: "pb-[124%] 2xl:pb-[124%] 1xl:pb-[124%] 6xl:pb-[114%]"
												} mb-4 md:mb-6 relative`}
										>
											<Link href='/services/home-services'>
												<Image
													className={`${isActive
															? ""
															: "grayscale group-hover:grayscale-0"
														} w-full !h-full object-cover absolute top-0 left-0`}
													src="/ResidentialServices.png"
													alt="Residential services"
													height="394"
													width="280"
												/>
											</Link>
										</div>

										<h4
											className={`font-montserrat 2xl:leading-[27px] uppercase ${isActive
													? "text-[#434343] sm:text-black font-semibold sm:font-bold text-sm sm:text-lg md:text-xl 2xl:text-[28px]"
													: "text-[#434343] font-semibold text-sm sm:text-base md:text-lg 2xl:text-[22px]"
												}`}
										>
											Residential services
										</h4>
									</div>
								)}
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Expertise;
