import { lato } from "@/app/components/fonts/fonts";
import React from "react";
import Image from "next/image"; // Import Image component from Next.js

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import Link from "next/link";

const RecognizePageContent = (props: {
	title1?: String;
	textColorh1: String;
	textColorp: String;
	title2?: String;
	description: string;
	buttonTitle: string;
	imageUrl: string;
	shouldReverse?: boolean;
}) => {
	return (
		<section className=" relative z-10">
			<div
				className={`flex flex-col justify-center lg:justify-between max-lg:gap-8 items-center !lg:pb-[88px] container mx-auto px-4 min-h-screen ${props.shouldReverse ? "lg:flex-row-reverse" : "lg:flex-row"
					}`}
			>
				<div className="w-full lg:w-1/3 max-lg:!hidden">
					{/* <img src={props.imageUrl} alt="elevating standards" className='' /> */}
					<div className="relative max-lg:h-56 lg:min-h-screen imgRow top-0">
						<Image
							className="absolute"
							src="/FMCompany2022.png"
							alt=""
							fill={false}
							width="592"
							height="241"
						/>

						<Image
							className="absolute"
							src="/FMCompany2022.png"
							alt=""
							fill={false}
							width="592"
							height="241"
						/>

						<Image
							className="absolute"
							src="/FMCompany2022.png"
							alt=""
							fill={false}
							width="592"
							height="241"
						/>
					</div>
				</div>
				<div
					className={`awardContent ${props.shouldReverse ? `lg:w-3/5` : `lg:w-3/5`
						}`}
				>
					{props?.title1 && (
						<h1
							className={`max-sm:hidden max-[2560px]:block font-montserrat text-[${props.textColorp}] font-bold text-2xl md:text-[40px] md:leading-snug lg:text-[80px] lg:leading-[89px] lg:mb-16 md:mb-8 mb-5`}
						>
							{props.title1}{" "} 
							<span className={`text-[#EEB229]`}>{props.title2}</span>
						</h1>
					)}
					{props?.title1 && (
						<h1
							className={`max-sm:block max-[2560px]:hidden font-montserrat text-[${props.textColorp}] font-bold text-2xl md:text-[40px] md:leading-snug lg:text-[80px] lg:leading-[89px] lg:mb-16 md:mb-8 mb-5`}
						>
							{props.title1}
							<br />
							<span className={`text-[#EEB229] max-sm:block max-[2560px]:inline `}>{props.title2}</span>
						</h1>
					)}
					<p
						className={`${lato.className} lg:w-[70%] text-[#707070] text-base md:text-[22px] md:leading-[40px]`}
					>
						{props.description}
					</p>
					<button className="animateButton block w-fit hover:bg-transparent border border-black  hover:text-black mt-[30px] bg-black rounded-full px-5 py-[7px] font-normal font-montserrat text-white">
						{props.buttonTitle}
					</button>
				</div>
			</div>
		</section>
	);
};

export default RecognizePageContent;
