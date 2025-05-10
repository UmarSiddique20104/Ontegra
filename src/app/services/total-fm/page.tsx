import React from 'react'
import Header from '../../components/header/header';
import Image from 'next/image';
import totalFmImage from "../../../../public/services/TotalFacilitiesManagement.png";
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
							<h1 className='font-montserrat font-bold text-black text-3xl md:text-5xl lg:text-6xl xl:text-[80px] xl:leading-[89px] -tracking-[0.96px] mb-2'>Total Facilities Management</h1>
							<p className='2xl:text-[40px] xl:text-[30px] lg:text-[25px] md:text-[22px] text-[18px] font-normal font-montserrat text-[#278CB3] my-5 lg:my-0'>Total Mastery, Singular Focus</p>
							<p className='2xl:mt-[80px] xl:mt-[50px] max-sm:text-[16px] lg:mt-9 font-lato 3xl:text-[22px] xl:text-[20px] md:text-[18px] font-normal text-[#707070] 2xl:leading-[40px] xl:leading-[30px] xl:max-w-[89%]'>At Ontegra, our Total Facilities Management (TFM) service represents the quintessence of comprehensive care for your properties. As custodians of your facilities, we transcend the conventional, piecemeal approach to management. Instead, we offer a holistic solution where all aspects of facilities management coalesce under one expert umbrella.</p>
						</div>
						<div className="col-span-12 md:col-span-4 lg:col-span-3 max-sm:mt-3 max-lg:mt-6 max-xl:mt-6
						max-2xl:mt-6  md:mx-auto lg:mx-0 mx-0">
							<Image
								src='/services/TotalFacilitiesManagement.png'
								className='w-full h-full object-cover'
								alt='Total Facilities Management'
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
							<Image src='/pattern.png' alt='icon' width={50} height={50} className='mb-6' />
							<h3 className='font-lato font-bold text-black text-2xl lg:text-[30px] lg:leading-10 tracking-[0.93px] mb-6'>Seamless Synergy of Services</h3>
							<p className='text-[#707070] font-lato font-normal text-base max-sm:text-[16px] lg:text-[22px] lg:leading-10 tracking-[0.68px]'>From the intricate gears of Mechanical, Electrical, and Plumbing (MEP) services to the vigilant eyes of security surveillance, our integrated service offering covers every facet of building and facility management. TFM by Ontegra is about synchronizing a multitude of services, including cleaning and specialized tasks, within a cohesive, efficient framework.</p>
						</div>
					</div>

					<div className='bg-[#EFEFEF] p-7 md:p-10'>
						<div>
							<Image src='/origami.png' alt='icon' width={50} height={50} className='mb-6' />
							<h3 className='font-lato font-bold text-black text-2xl max-sm:text-[16px] lg:text-[30px] lg:leading-10 tracking-[0.93px] mb-6'>A Tailored, Agile Approach</h3>
							<p className='text-[#707070] font-lato font-normal text-base lg:text-[22px] lg:leading-10 tracking-[0.68px]'>Understanding that each facility has its unique rhythm and requirements, we blend our in-house expertise with a curated network of partners to provide targeted solutions. Whether it’s the day-to-day running of a single building, the multifaceted demands of an entire community, or the varied needs of a diverse portfolio, our approach remains adaptable, vigilant, and always client-centered</p>
						</div>
					</div>

					<div className='bg-[#EFEFEF] p-7 md:p-10'>
						<div>
							<Image src='/count.png' alt='icon' width={50} height={50} className='mb-6' />
							<h3 className='font-lato font-bold text-black text-2xl lg:text-[30px] lg:leading-10 tracking-[0.93px] mb-6'>A Single Point of Accountability</h3>
							<p className='text-[#707070] font-lato font-normal text-base max-sm:text-[16px] lg:text-[22px] lg:leading-10 tracking-[0.68px]'>With Ontegra’s TFM, the complexity of managing multiple service providers is eliminated. We stand as your sole point of contact, assuming total accountability for the smooth operation of your facilities. This simplification of processes translates to a streamlined, worry-free experience for you, freeing you to focus on your core business operations.</p>
						</div>
					</div>

					<div className='bg-[#EFEFEF] p-7 md:p-10'>
						<div>
							<Image src='/handshake.png' alt='icon' width={50} height={50} className='mb-6' />
							<h3 className='font-lato font-bold text-black text-2xl lg:text-[30px] lg:leading-10 tracking-[0.93px] mb-6'>Long-term Strategic Partnership</h3>
							<p className='text-[#707070] font-lato font-normal text-base max-sm:text-[16px] lg:text-[22px] lg:leading-10 tracking-[0.68px]'>Opting for Ontegra’s TFM service is not just a decision for the present; it’s an investment in your future. Leveraging our extensive experience and capabilities, we assure not only the maintenance but also the enhancement and value appreciation of your property over time.</p>
						</div>
					</div>
                </div>
                <div className="lg:my-[100px] xl:mb-[200px] my-7">
                    <div className="2xl:w-[43%] xl:w-[55%] lg:w-[68%]">
                        <h2 className='font-lato font-bold text-[30px]'>Partner with us for TFM services that encapsulate our commitment to innovation, reliability, and above all, client satisfaction.</h2>
                    </div>
                </div>
            </section>
            <section className='lg:min-h-screen flex flex-col justify-center lg:mb-[100px] lg:pb-[150px] 2xl:pb-[190px] md:mb-14 mb-[250px]'>
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