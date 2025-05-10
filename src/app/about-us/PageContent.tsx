import { lato } from "@/app/components/fonts/fonts";
import Link from "next/link";
import React from "react";

const PageContent = (props: {
	title: string;
	description: string;
	buttonTitle: string;
	buttonLink: string;
	imageUrl: string;
	shouldReverse?: boolean;
}) => {
	return (
		<section>
			<div
				className={`min-h-screen items-center flex flex-col justify-between max-sm:mt-8 ${props.shouldReverse ? "lg:flex-row-reverse" : "lg:flex-row"
					}`}
			>
				<div className="lg:w-[33%] ">
					<img
						src={props.imageUrl}
						alt="elevating standards"
						className="max-w-full h-full object-cover"
					/>
				</div>
				<div
					className={`${props.shouldReverse ? "lg:w-[53%]" : "lg:w-[57%]"
						}  sm:mt-6 lg:mt-0`}
				>
					<h1 className="font-montserrat font-bold  text-3xl  md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] 3xl:text-[60px] max-sm:mt-5 leading-normal  3xl:leading-[68px]">
						{props.title}
					</h1>
					<p
						className={`${lato.className} md:leading-[28px] 3xl:md:leading-[40px] leading-[35px] text-[#707070] text-[18px] md:text-[18px]  lg:text-[18px] 2xl:text-[18px] 3xl:text-[22px]  md:mt-[10px] lg:mt-[20px] 2xl:mt-[30px] 3xl:mt-[50px] text-justify`}
					>
						{props.description}
					</p>
					<Link href={props.buttonLink} className="animateButton block w-fit mx-auto md:mx-0 hover:bg-transparent border border-black  hover:text-black mt-[30px] bg-black rounded-full px-5 py-[7px] font-normal font-montserrat text-white">
						{props.buttonTitle}
					</Link>
				</div>
			</div>
		</section>
	);
};

export default PageContent;
