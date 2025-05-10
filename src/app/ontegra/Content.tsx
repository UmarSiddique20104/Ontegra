import React from "react";
import Image from "next/image";
import contentImage from "../../../public/architecturer.png";
import Link from "next/link";

const Content = () => {
	return (
		<section className="container mx-auto px-4 max-sm:pt-5 sm:py-8 md:py-8 lg:mt-[90px] 2xl:mt-0 3xl:mt-[100px] 4xl:mt-[150px] 2xl:pb-0 lg:pb-16">
			<div className="flex items-center justify-between max-sm:flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row 2xl:flex-row">
				<div className="w-[48%] max-sm:w-[100%] sm:w-[100%] md:w-[48%] 2xl:w-[48%] xl:w-[45%] lg:w-[42%]">
					<h1 className="max-sm:text-[28px] sm:text-[28px] md:text-[28px]  lg:text-[32px] xl:text-[40px] 2xl:text-[50px] 3xl:text-[60px] font-montserrat font-bold xl:leading-[60px] 2xl:leading-[78px] lg:leading-[40px] sm:leading-[30px] md:leading-[40px]">
						<span className="text-[#278cb3]">Tailored</span> FM Services at Your
						Fingertips
					</h1>
					<p className="font-lato text-[#707070] max-sm:text-[16px] lg:text-[13px] lg:mt-3 2xl:text-[18px] 3xl:text-[22px] font-normal xl:mt-[40px] 2xl:mt-[70px] text-justify">
						Explore our comprehensive suite of facilities management services
						designed to meet today’s demands and tomorrow’s challenges. From
						proactive maintenance to energy management and beyond, our services
						are shaped by our dedication to innovation, sustainability, and our
						clients’ ultimate satisfaction. Learn how Ontegra’s tailored
						services can elevate your facilities management experience.
					</p>
					<Link href='/services' className="animateButton block w-fit mx-auto md:mx-0 hover:bg-transparent border border-black  hover:text-black mt-[30px] bg-black rounded-full px-5 py-[7px] font-normal font-montserrat text-white">
						Discover Our Services
					</Link>
				</div>
				<div className="w-[45%] max-sm:w-[100%] sm:w-[100%] md:w-[45%] lg:w-[45%] 2xl:w-[45%] sm:pb-[10px] max-sm:pb-[10px] ">
					<Image
						src={contentImage}
						className="ms-auto max-w-full lg:max-h-[350px] xl:max-h-[400px] object-cover 2xl:max-h-[580px]"
						alt="content image"
					/>
				</div>
			</div>
		</section>
	);
};

export default Content;
