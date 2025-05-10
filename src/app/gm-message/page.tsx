import React from 'react'
import "../globals.css";
import Header from '../components/header/header';
import { Footer } from '../components/footer/Footer';
import generalManager from "../../../public/Adnan.png"
import Image from 'next/image';

const Page: React.FC = () => {

	return (
		<section className='bg-white'>
			<Header color={true} />
			<section className='pt-16'>
				<div className="bg-white px-4 pb-5 md:pb-0 lg:px-0">
					<div className="container mx-auto px-4 3xl:py-[150px] lg:pt-[100px] pt-20 lg:pb-10">
						<section>
							<div className={`flex flex-col justify-between lg:flex-row max-lg:gap-8`}>
								<div className="2xl:w-[47%] lg:w-[35%] max-sm:w-full mx-auto">
									<Image src={generalManager} alt='General Manager' className='max-w-full  max-md:w-full md:w-3/5 md:mx-auto' />
									<h3 className="text-black 2xl:text-[26px] lg:text-[18px] font-medium font-montserrat mt-3 gm-heading flex flex-col justify-center items-center">
										<span className="name font-extrabold">Adnan Jabri</span>
										<span className="title text-lg text-gray-500">General Manager Ontegra</span>
									</h3>
								</div>
								<div className={`lg:w-[50%] mt-5 md:mt-0 text-justify lg:pr-12 xl:pr-24`}>
									<h1 className='font-montserrat font-bold xl:text-[40px] lg:text-[35px] !leading-tight xl:leading-[65px] text-[24px] mb-5 text-left'>A Word from <br className='hidden lg:block' />Our General Manager</h1>
									<p className={`font-montserrat 3xl:leading-[33px] 2xl:leading-[25px] text-[#A8A8A8] max-sm:text-[16px] 3xl:text-[18px] 2xl:text-[15px] xl:text-[14px] lg:text-[12px] font-medium mt-4`}>In the realm of facilities management, Ontegra stands as a beacon of progress and innovation. Our transformation from Deyaar Facilities Management to Ontegra is not just a rebranding but a reaffirmation of our commitment to pioneering the future of our industry.</p>
									<p className={`font-montserrat 3xl:leading-[33px] 2xl:leading-[25px] text-[#A8A8A8] max-sm:text-[16px] 3xl:text-[18px] 2xl:text-[15px] xl:text-[14px] lg:text-[12px] font-medium mt-4`}>As we embark on this new chapter, we carry with us over two decades of expertise, an enduring legacy of excellence, and a vision that consistently looks forward. Our focus remains fixed on delivering intelligent, AI-driven FM solutions that not only meet today’s demands but are designed to evolve with tomorrow’s advancements.</p>
									<p className={`font-montserrat 3xl:leading-[33px] 2xl:leading-[25px] text-[#A8A8A8] max-sm:text-[16px] 3xl:text-[18px] 2xl:text-[15px] xl:text-[14px] lg:text-[12px] font-medium mt-4`}>Ontegra is more than our new name — it is our promise to you.A promise of operational performance excellence, of sustainability leadership, and of a partnership that puts your needs at the core of everything we do.</p>
									<p className={`font-montserrat 3xl:leading-[33px] 2xl:leading-[25px] text-[#A8A8A8] max-sm:text-[16px] 3xl:text-[18px] 2xl:text-[15px] xl:text-[14px] lg:text-[12px] font-medium mt-4`}>We pledge to maintain the highest standards, to foster innovation, and to continue providing the bespoke service that has become synonymous with our name.We believe in a world where facilities management transcends the operational to become a catalyst for better living spaces and working environments.At Ontegra, we don’t just manage facilities; we elevate and sustain them with the utmost precision and care.</p>
									<p className={`font-montserrat 3xl:leading-[33px] 2xl:leading-[25px] text-[#A8A8A8] max-sm:text-[16px] 3xl:text-[18px] 2xl:text-[15px] xl:text-[14px] lg:text-[12px] font-medium mt-4`}>Thank you for joining us on this remarkable journey.Together, we will not only imagine the future of facilities management but also shape it.</p>
									<p className={`font-montserrat 3xl:leading-[33px] 2xl:leading-[25px] text-[#A8A8A8] max-sm:text-[16px] 3xl:text-[18px] 2xl:text-[15px] xl:text-[14px] lg:text-[12px] font-medium mt-4`}>Onward and upward to the future of integration in facilities management.</p>
								</div>
							</div>
						</section>
					</div>
				</div>
			</section>
			{/* <Footer /> */}
		</section >

	)
}
export default Page;

