import React from 'react'
import Header from '../components/header/header';
import { Footer } from '../components/footer/Footer';
import Card from './Card';
import { Data } from './CardData';
import Image from 'next/image';
import TechiImage from "../../../public/icons/techi.png";
import "../globals.css";

const Techi = () => {
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
											src='/Techi@3x.png'
											alt='Techi'
											width='722'
											height='710'
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
									<h1 className='lg:text-[35px] xl:text-[40px] 2xl:text-[50px] 3xl:text-[60px] font-montserrat 2xl:leading-[78px] text-[24px] font-bold'>Meet <span className='text-[#278cb3]'>Techi,</span><br /> Our AI Expert in Excellence</h1>
									<p className={`font-montserrat 3xl:leading-[33px] 2xl:leading-[25px] text-[#A8A8A8] 3xl:text-[18px] 2xl:text-[15px] xl:text-[14px] lg:text-[12px] font-medium xl:mt-10 mt-5`}>In a world where precision and swiftness are paramount, Ontegra introduces Techi – an Artificial Intelligence revolutionizing facilities management operations. Our journey, deeply rooted in expertise since 2002 and fortified by Deyaar’s legacy, continues as we harness the potential of AI. </p>
									<p className={`font-montserrat 3xl:leading-[33px] 2xl:leading-[25px] text-[#A8A8A8] 3xl:text-[18px] 2xl:text-[15px] xl:text-[14px] lg:text-[12px] font-medium xl:mt-10 mt-5`}>Techi is more than just innovation; it’s our pledge to deliver unsurpassed efficiency. His integration into our core operations is a testament to our relentless drive to merge human-centric service with the acumen of AI, ensuring seamless facilities management.</p>

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
							<h1 className='font-montserrat text-white font-bold xl:text-[30px] lg:text-[25px] 2xl:text-[43px] leading-[56px]'>Coming <span className='text-[#278CB3]'>Live,</span> on 15th June 2024</h1>
							<p className='text-[#9D9D9D] font-lato font-normal text-[18px]'>Currently perfecting the experience during our beta phase</p>
						</div>
					</div>
				</div>
			</div>

			{/* <Footer /> */}
		</section>
	)
}

export default Techi;