import React from 'react'
import Header from '../../components/header/header';
import Image from 'next/image';
// import softFM from "../../../../public/services/SoftFM.png";
import { Footer } from '../../components/footer/Footer';
import Card from './Card';
import { cardData } from './cardData';
import InputField from './InputField';
import Button from './Button';

const TotalFM = () => {
	const cardDataLength: number = cardData.length;

	return (
		<section className='bg-white'>
			<Header color={true} />
			<section className='container mx-auto px-4'>
				<div className="pt-28 pb-8 lg:pb-32 xl:pb-52">
					<div className="grid grid-cols-12 md:gap-x-10 lg:gap-x-[80px] lg:gap-y-0 gap-y-5">
						<div className="col-span-12 md:col-span-8 lg:col-span-9 lg:pt-[100px] pt-[30px]">
							<h1 className='font-montserrat font-bold text-black text-3xl md:text-5xl lg:text-6xl xl:text-[80px] xl:leading-[89px] -tracking-[0.96px] mb-2'>Soft FM</h1>
							<p className='2xl:text-[40px] xl:text-[30px] lg:text-[25px] md:text-[22px] text-[18px] font-normal font-montserrat text-[#278CB3] my-5 lg:my-0'>Holistic Soft Services Management</p>
							<p className='2xl:mt-[80px] xl:mt-[50px] lg:mt-9 font-latomax-sm:text-[16px] 3xl:text-[22px] xl:text-[20px] md:text-[18px] font-normal text-[#707070] 2xl:leading-[40px] xl:leading-[30px] xl:max-w-[89%]'>Ontegra’s Soft FM services are crafted with a meticulous touch, ensuring that every aspect of facility care resonates with comfort and excellence. Our expertise spans various industries, including the dynamic realms of banking, hospitality, retail, and expansive shopping malls, each with their unique demands and standards.</p>
						</div>
						<div className="col-span-12 md:col-span-4 lg:col-span-3 max-sm:mt-3 max-lg:mt-6 max-xl:mt-6
						max-2xl:mt-6 md:mx-auto lg:mx-0 mx-0">
							<Image 
								src='/services/SoftFM.png' 
								className='w-full h-full object-cover' 
								alt='services'
								height='609'
								width='391'
							/>
						</div>
					</div>
				</div>
			</section>
			<section className='container mx-auto px-4'>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					{/* {cardData.map((item, index) => {
                        return <Card key={index} iconPath={item.icon} title={item.title} description={item.description} isLastChild={index === (cardDataLength - 1) && (index % 2 == 0) ? true : false} />
                    })} */}

					<div className='bg-[#EFEFEF] p-7 md:p-10'>
						<div>
							<h3 className='font-lato font-bold text-black text-2xl lg:text-[30px] lg:leading-10 tracking-[0.93px] mb-6'>Precision Cleaning and Hygiene</h3>
							<p className='text-[#707070] font-lato font-normal text-basemax-sm:text-[16px] lg:text-[22px] lg:leading-10 tracking-[0.68px]'>At Ontegra, cleanliness transcends mere aesthetics. Following BICSc standards, we deliver hygienic solutions that ensure wellness and immaculate spaces. Our specialized teams are trained to uphold the highest levels of cleanliness, which is particularly critical in high-traffic areas like banks and retail centers.</p>
						</div>
					</div>

					<div className='bg-[#EFEFEF] p-7 md:p-10'>
						<div>
							<h3 className='font-lato font-bold text-black text-2xl lg:text-[30px] lg:leading-10 tracking-[0.93px] mb-6'>Tailored Guest Services</h3>
							<p className='text-[#707070] font-lato font-normal text-basemax-sm:text-[16px] lg:text-[22px] lg:leading-10 tracking-[0.68px]'>In the hospitality sector, our soft services are the silent ambassadors of your brand. From concierge to housekeeping, we provide a suite of services designed to enhance the guest experience and reinforce the luxurious ambiance that hotels and restaurants are known for.</p>
						</div>
					</div>

					<div className='bg-[#EFEFEF] p-7 md:p-10'>
						<div>
							<h3 className='font-lato font-bold text-black text-2xl lg:text-[30px] lg:leading-10 tracking-[0.93px] mb-6'>Customized Retail Support</h3>
							<p className='text-[#707070] font-lato font-normal text-basemax-sm:text-[16px] lg:text-[22px] lg:leading-10 tracking-[0.68px]'>Understanding the pulse of retail environments, we offer bespoke soft FM solutions that cater to the bustling energy of shopping malls. Our services ensure a pristine shopping experience that complements the consumer journey and brand image of retail clients.</p>
						</div>
					</div>

					<div className='bg-[#EFEFEF] p-7 md:p-10'>
						<div>
							<h3 className='font-lato font-bold text-black text-2xl lg:text-[30px] lg:leading-10 tracking-[0.93px] mb-6'>Efficient Waste Management</h3>
							<p className='text-[#707070] font-lato font-normal text-basemax-sm:text-[16px] lg:text-[22px] lg:leading-10 tracking-[0.68px]'>Sustainability is not an afterthought but a core principle. We implement eco-conscious waste management practices, contributing to cleaner, greener spaces while supporting our clients’ environmental goals.</p>
						</div>
					</div>
				</div>
				<div className="lg:my-[100px] xl:mb-[200px] my-7">
					<div className="w-full">
						<h2 className='font-lato font-bold text-[30px]'>Across every service and sector, Ontegra deploys innovative methodologies and smart integration to ensure that our soft FM services not only meet but exceed client expectations. </h2>
					</div>
				</div>
			</section>
			<section className='lg:min-h-screen flex flex-col justify-center lg:mb-[100px]  2xl:pb-[190px] md:mb-14 mb-[250px]'>
				<div className='bg-[#278CB3]'>
					<div className="flex lg:flex-row flex-col container mx-auto px-4 items-center py-5 lg:py-0 lg:h-[40vh]">
						<div className="lg:w-[50%]">
							<h2 className='3xl:text-[100px] 2xl:text-[75px] xl:text-[60px] md:text-[45px] font-lato font-bold text-white text-[30px]'>Let’s Talk?</h2>
						</div>
						<div className="lg:w-[50%] w-full 3xl:py-[50px] mt-5 lg:mt-0 py-10 px-10 3xl:px-[65px] bg-[#EFEFEF] ">
							<form className='flex flex-col gap-4'>
								<InputField label='Service Required?' type='text' />
								<InputField label='Name' type='text' />
								<InputField label='Email' type='email' />
								<InputField label='Phone' type='number' />
								<InputField label='Company' type='text' />
								<InputField label='Details' type='text' isTextArea={true} />
								<Button title='Submit' />
							</form>
						</div>
					</div>
				</div>
			</section>
			{/* <Footer /> */}
		</section>
	)
}

export default TotalFM;