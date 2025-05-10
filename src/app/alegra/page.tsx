import React from 'react'
import Header from '../components/header/header';
import { Footer } from '../components/footer/Footer';
import Card from './Card';
import { Data } from './CardData';
import Image from 'next/image';
import AlegraImage from "../../../public/icons/alegra.png";
import "../globals.css";

const Alegra = () => {
	return (
		<section className='bg-white relative'>
			<Header color={true} />

			<div className='bg-white relative'>
				<div className='md:absolute md:inset-0 md:pointer-events-none'>
					<div className='container mx-auto px-4 md:min-h-screen md:sticky md:top-0 md:bottom-0'>
						<div className='flex justify-end md:min-h-screen'>
							<div className='w-full md:w-1/3 md:min-h-screen'>
								<div className='imgG md:min-h-screen pt-28 md:pt-0 flex items-center md:items-end justify-center'>
									<div className='avatar relative max-md:max-w-52 w-full'>
										<Image
											src='/Alegra@3x.png'
											alt='Alegra'
											width='624'
											height='724'
											className='h-auto w-full relative z-10'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='min-h-screen'>
					<div className='container px-4 mx-auto'>
						<div className="flex flex-col md:flex-row justify-between">
							<div className='md:w-1/2'>
								<div className='pt-10 md:pt-36 pb-24'>
									<h1 className='lg:text-[35px] xl:text-[40px] 2xl:text-[50px] 3xl:text-[60px] font-montserrat 2xl:leading-[78px] text-[24px] font-bold'>Introducing <span className='text-[#278cb3]'>Alegra,</span> Your 24/7 AI Concierge</h1>
									<p className='font-montserrat 3xl:leading-[33px] 2xl:leading-[25px] text-[#A8A8A8] 3xl:text-[18px] 2xl:text-[15px] xl:text-[14px] lg:text-[12px] font-medium xl:mt-10 mt-5'>At Ontegra, we are at the forefront of integrating artificial intelligence into the day-to-day operations of facilities management, transcending traditional service offerings. Alegra represents our commitment to innovation, a virtual assistant designed to streamline processes, enhance customer experience, and ensure efficiency without compromising the personal touch.</p>
									<p className='font-montserrat 3xl:leading-[33px] 2xl:leading-[25px] text-[#A8A8A8] 3xl:text-[18px] 2xl:text-[15px] xl:text-[14px] lg:text-[12px] font-medium xl:mt-10 mt-5'>Alegra is not merely a technological advancement; she embodies our ethos of proactive customer service. She has been created to understand the nuances of human interaction, providing immediate, detailed responses and action to a wide range of queries and tasks. With her at your service, Alegra can:</p>

									<div className="flex flex-col mt-5">
										{
											Data.map((item, index) => {
												return <Card index={index} title={item.title} description={item.description} key={index} iconPath={item.iconPath} />
											})
										}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='customGradient py-14'>
					<div className="container mx-auto px-4">
						<div className="flex flex-col">
							<h1 className='font-montserrat text-white font-bold xl:text-[30px] lg:text-[25px] 2xl:text-[43px] leading-[56px]'>Coming <span className='text-[#278CB3]'>Live,</span> on 30th June 2024</h1>
							<p className='text-[#9D9D9D] font-lato font-normal text-[18px]'>Currently perfecting the experience during our beta phase</p>
						</div>
					</div>
				</div>
			</div>

			{/* <Footer /> */}
		</section>
	)
}

export default Alegra;