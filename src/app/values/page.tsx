"use client";
import Header from "@/app/components/header/header";
import Image from "next/image";
import { Footer } from "@/app/components/footer/Footer";
import "../globals.css";
const Page = () => {
	return (
		<>
			<Header color={true} />
			<div className="min-h-screen bg-white relative scrollingSection">

				<div className="absolute inset-x-0 bottom-0">
					<Image
						src='/Foreground01.png'
						className="h-[20vh] w-[100vw] mydiv4 object-fill"
						alt=''
						width='1920'
						height='215'
					/>
				</div>
				<div className="py-24 max-sm:py-28 min-h-screen relative z-10 flex items-center">
					{/* <hr className="2xl:mt-40 xl:mt-20 sm:block hidden" /> */}
					<div className="container mx-auto px-4 pt-5">
						<div className="grid grid-cols-10 gap-4 text-center mydiv">
							<div className="col-span-2">
								<h1 className="flex justify-center lg:text-[270px] md:text-[100px] text-[48px] sm:text-[50px] lg:leading-[20.25rem] font-bold">S</h1>
							</div>
							<div className="col-span-2">
								<h1 className="flex justify-center lg:text-[270px] md:text-[100px] text-[48px] sm:text-[50px] lg:leading-[20.25rem] font-bold">M</h1>
							</div>
							<div className="col-span-2">
								<h1 className="flex justify-center lg:text-[270px] md:text-[100px] text-[48px] sm:text-[50px] lg:leading-[20.25rem] font-bold">A</h1>
							</div>
							<div className="col-span-2">
								<h1 className="flex justify-center lg:text-[270px] md:text-[100px] text-[48px] sm:text-[50px] lg:leading-[20.25rem] font-bold">R</h1>
							</div>
							<div className="col-span-2">
								<h1 className="flex justify-center lg:text-[270px] md:text-[100px] text-[48px] sm:text-[50px] lg:leading-[20.25rem]  font-bold">T</h1>
							</div>
						</div>
						<div className="grid grid-cols-10 gap-4 text-center">
							<div className="lg:col-span-2 col-span-10 lg:py-0 py-5 text-center">
								<h2 className="font-montserrat font-bold text-[25px] text-center text-[#278CB3] uppercase tracking-[0.78px] mydiv2">
									SUSTAINABLE
								</h2>
								<div className="flex justify-center">
									<p className="text-[#707070] font-lato text-[22px] leading-[31px] mydiv3">
										Committed to eco-friendly and sustainable FM practices
									</p>
								</div>
							</div>
							<div className="lg:col-span-2 col-span-10 lg:py-0 py-5 text-center">
								<h2 className="font-montserrat font-bold text-[25px] text-center text-[#278CB3] uppercase tracking-[0.78px] mydiv2">
									METHODICAL
								</h2>
								<div className="flex justify-center">
									<p className="text-[#707070] font-lato text-[22px] leading-[31px] mydiv3">
										Excellence in FM through AI and technology
									</p>
								</div>
							</div>
							<div className="lg:col-span-2 col-span-10 lg:py-0 py-5 text-center">
								<h2 className="font-montserrat font-bold text-[25px] text-center text-[#278CB3] uppercase tracking-[0.78px] mydiv2">
									AGILE
								</h2>
								<div className="flex justify-center">
									<p className="text-[#707070] font-lato text-[22px] leading-[31px] mydiv3">
										Quick and effective response to FM challenges
									</p>
								</div>
							</div>
							<div className="lg:col-span-2 col-span-10 lg:py-0 py-5 text-center">
								<h2 className="font-montserrat font-bold text-[25px] text-center text-[#278CB3] uppercase tracking-[0.78px] mydiv2">
									RELIABLE
								</h2>
								<div className="flex justify-center">
									<p className="text-[#707070] font-lato text-[22px] leading-[31px] mydiv3">
										Dependable and consistent in service delivery
									</p>
								</div>
							</div>
							<div className="lg:col-span-2 col-span-10 lg:py-0 py-5 text-center lg:pe-4">
								<h2 className="font-montserrat font-bold text-[25px] text-center text-[#278CB3] uppercase tracking-[0.78px] mydiv2">
									TECHNOLOGY
								</h2>
								<div className="flex justify-center">
									<p className="text-[#707070] font-lato text-[22px] leading-[31px] mydiv3">
										Embracing cutting-edge technology for advanced FM solutions
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <Footer isScrollable={true} /> */}
		</>
	);
};

export default Page;
