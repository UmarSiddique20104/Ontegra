import React from 'react'
import Header from '../../components/header/header';
import Image from 'next/image';
import hardFM from "../../../../public/services/HardFM.png";
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
				<div className="pt-28 pb-10 lg:pb-32 xl:pb-52">
					<div className="grid grid-cols-12 md:gap-x-10 lg:gap-x-[80px] lg:gap-y-0 gap-y-5">
						<div className="col-span-12 md:col-span-8 lg:col-span-9 lg:pt-[100px] pt-[30px]">
							<h1 className='font-montserrat font-bold text-black text-3xl md:text-5xl lg:text-6xl xl:text-[80px] xl:leading-[89px] -tracking-[0.96px] mb-2'>Hard FM</h1>
							<p className='2xl:text-[40px] xl:text-[30px] lg:text-[25px] md:text-[22px] text-[18px] font-normal font-montserrat text-[#278CB3] my-5 lg:my-0'>Reinforcing Foundations</p>
							<p className='2xl:mt-[80px] xl:mt-[50px] lg:mt-9 font-lato 3xl:text-[22px] xl:text-[20px] md:text-[18px] font-normal text-[#707070] 2xl:leading-[40px] xl:leading-[30px] xl:max-w-[89%]'>At Ontegra, we regard the physical integrity and optimal functionality of infrastructure as the bedrock of our service offerings. Our Hard Facilities Management (Hard FM) services are crafted to ensure your assets are not just maintained but fortified against the test of time.</p>
						</div>
						<div className="col-span-12 md:col-span-4 lg:col-span-3 max-sm:mt-3 max-lg:mt-6 max-xl:mt-6
						max-2xl:mt-6 md:mx-auto lg:mx-0 mx-0">
							<Image
								src='/services/HardFM.png'
								className='w-full h-full object-cover'
								alt='Energy Management'
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
							<Image src='/wrench.png' alt='icon' width={50} height={50} className='mb-6' />
							<h3 className='font-lato font-bold text-black text-2xl lg:text-[30px] lg:leading-10 tracking-[0.93px] mb-6'>Industry-Specific Security Expertise</h3>
							<p className='text-[#707070] font-lato font-normal text-base max-sm:text-[16px] lg:text-[22px] lg:leading-10 tracking-[0.68px]'>Our deep understanding of different industries enables us to customize security solutions that align with the unique challenges and risks of each sector. This bespoke strategy enhances our efficiency and effectiveness in safeguarding assets, information, and people.</p>
						</div>
					</div>

					<div className='bg-[#EFEFEF] p-7 md:p-10'>
						<div>
							<Image src='/ac.png' alt='icon' width={50} height={50} className='mb-6' />
							<h3 className='font-lato font-bold text-black text-2xl lg:text-[30px] lg:leading-10 tracking-[0.93px] mb-6'>Technology-Enhanced Vigilance</h3>
							<p className='text-[#707070] font-lato font-normal text-base max-sm:text-[16px] lg:text-[22px] lg:leading-10 tracking-[0.68px]'>Ontegra’s security services are bolstered by state-of-the-art surveillance and monitoring technologies. By integrating advanced systems and intelligent analytics, we ensure proactive prevention and swift response to any potential or real-time threats.</p>
						</div>
					</div>

					<div className='bg-[#EFEFEF] p-7 md:p-10'>
						<div>
							<Image src='/path 201.png' alt='icon' width={50} height={50} className='mb-6' />
							<h3 className='font-lato font-bold text-black text-2xl lg:text-[30px] lg:leading-10 tracking-[0.93px] mb-6'>Intelligent Energy Optimization</h3>
							<p className='text-[#707070] font-lato font-normal text-base max-sm:text-[16px] lg:text-[22px] lg:leading-10 tracking-[0.68px]'>We offer a suite of Energy Management Services designed to transcend traditional practices. With a blend of industry expertise and advanced technology, we create a synergy between operational demands and energy efficiency.</p>
						</div>
					</div>

					<div className='bg-[#EFEFEF] p-7 md:p-10'>
						<div>
							<Image src='/city.png' alt='icon' width={50} height={50} className='mb-6' />
							<h3 className='font-lato font-bold text-black text-2xl lg:text-[30px] lg:leading-10 tracking-[0.93px] mb-6'>Building Energy Audit</h3>
							<p className='text-[#707070] font-lato font-normal text-base max-sm:text-[16px] lg:text-[22px] lg:leading-10 tracking-[0.68px]'>Through comprehensive evaluations, we identify opportunities for energy savings, ensuring that each system performs at its peak with the least environmental impact.</p>
						</div>
					</div>

					<div className='bg-[#EFEFEF] p-7 md:p-10 lg:col-span-2'>
						<div>
							<Image src='/connection.png' alt='icon' width={50} height={50} className='mb-6' />
							<h3 className='font-lato font-bold text-black text-2xl lg:text-[30px] lg:leading-10 tracking-[0.93px] mb-6'>Cutting-edge Technology Integration</h3>
							<p className='text-[#707070] font-lato font-normal text-base max-sm:text-[16px] lg:text-[22px] lg:leading-10 tracking-[0.68px]'>In the digital era, infrastructure is incomplete without smart technology. We integrate Building Management Systems (BMS), Energy Management, and Smart Automation to bring your facilities into the future. By leveraging IoT, we interconnect every element of your facility, enabling seamless communication between systems. This connectivity ensures that whether it’s lighting, security, or energy management, all systems operate in a symphony of efficiency, intuitively responding to both the environment and occupant needs.</p>
						</div>
					</div>
				</div>
				<div className="lg:my-[100px] xl:mb-[200px] my-7">
					<div className="2xl:w-[80%] xl:w-[55%] lg:w-[68%]">
						<h2 className='font-lato font-bold text-black text-[30px] leading-[40px]'>Connect with us to explore how we can solidify the foundations of your assets, ensuring a legacy of strength and functionality.</h2>
					</div>
				</div>
			</section>
			<section className='lg:min-h-screen flex flex-col justify-center lg:mb-[100px]  2xl:pb-[190px] md:mb-14 mb-[250px]'>
				<div className='bg-[#278CB3]'>
					<div className="flex lg:flex-row flex-col container mx-auto px-4 items-center py-5 lg:py-0 lg:h-[40vh]">
						<div className="lg:w-[50%]">
							<h1 className='3xl:text-[100px] 2xl:text-[75px] xl:text-[60px] md:text-[45px] font-lato font-bold text-white text-[30px]'>Let’s Talk?</h1>
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