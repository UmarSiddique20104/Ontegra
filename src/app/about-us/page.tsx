"use client";

import React, { useEffect } from 'react'
import Counter from './Counter';
import PageContent from './PageContent';
import { Footer } from '@/app/components/footer/Footer';
import Header from '../components/header/header';
import "../globals.css";
const AboutUs: React.FC = () => {
    const [shouldStartCount, setShouldStartCount] = React.useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000) {
                setShouldStartCount(true);
            } else {
                setShouldStartCount(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className='bg-white'>
            <Header color={true} />
            <section className='pt-[100px] max-sm:pt-[120px] sm:pt-[140px] md:pt-[145px] lg:pt-16 min-h-screen scrollingSection'>
                <div className="bg-white">
                    <div className="container px-4 mx-auto ">
                        <PageContent title='Elevating Standards in Facility Management' description='Ontegra, more than a facilities management company, is your expert in proactive asset care. With roots stretching back to 2002 and the backing of Deyaar, we possess a deep understanding of customer needs. Our approach transcends traditional FM services, as we employ global best practices to not only manage but also enhance and extend the life cycle of your assets. Our capabilities have earned us the trust of a diverse clientele, managing a substantial portfolio across various industries.' imageUrl='/elevatingStandards.png' buttonTitle='Discover Our Legacy' buttonLink='/services' />
                    </div>
                </div>
            </section>
            <section className='min-h-screen items-center flex bg-black  mt-10' >
                <div className="container scrollingSection py-10 px-4 lg:py-[130px] mx-auto">
                    <div className="flex flex-col ">
                        <h1 className='font-montserrat text-3xl max-md:text-center  md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[60px] text-[#3B3B3B] font-bold'>Numbers Crafting the Future</h1>
                    </div>
                    <div className="flex flex-col md:flex-row flex-wrap justify-between md:gap-0 gap-5 lg:gap-0 mt-5 lg:mt-[150px]">
                        <Counter shouldCount={shouldStartCount} countTill={20} title='Years' description='Two decades of pioneering FM solutions, leading the industry with innovation and service excellence' />
                        <Counter shouldCount={shouldStartCount} countTill={2000} title='Qualified Staff' description='A robust team of over two thousand experts, dedicated to upholding the highest standards of facility management' />
                        <Counter shouldCount={shouldStartCount} countTill={25000} title='Managed Units' description='Over twenty-five thousand units under our careful stewardship, ensuring operational efficiency and client satisfaction' />
                        <Counter shouldCount={shouldStartCount} countTill={30} isMillion={true} title='Sq. Ft. Portfolio' description='A portfolio exceeding thirty million square feet, showcasing our capability in managing diverse spaces with precision' />
                    </div>
                </div>
            </section>
            <section className='min-h-screen'>
                <div className="bg-white scrollingSection  mt-10 lg:mt-0 mb-5 lg:mb-0  lg:px-0">
                    <div className="container px-4 mx-auto">
                        <PageContent shouldReverse={true} title='Crafting Excellence in Every Detail' description='Ontegra’s signature approach is defined by our ability to tune into the unique needs of our customers. We craft bespoke solutions that encompass more than mere management – we aim to revolutionize the essence of asset care. Our expansive portfolio and commitment to quality are evident in our successful projects and satisfied clientele, each a testament to our unparalleled service.' imageUrl='/excellenceInDetail.png' buttonTitle='Discover More' buttonLink='/our-clients' />
                    </div>
                </div>
            </section>
            <section className='min-h-screen max-lg:mt-11'>
                <div className="bg-white scrollingSection  mb-5 lg:mb-0  lg:px-0">
                    <div className="container mx-auto px-4 max-lg:pb-7">
                        <PageContent title='We Always Deliver Beyond Expectations' description='In a world where details make the masterpiece, Ontegra ensures every pixel of your facility management is perfect. We’re not just providing services; we’re crafting experiences. From intricate planning to flawless execution, our team is dedicated to ensuring excellence. We handle everything with an unwavering commitment to delivering beyond what’s expected, every single time.' imageUrl='/person.png' buttonTitle='Get Started' buttonLink='/contact-us' />
                    </div>
                </div>
            </section>
            {/* <Footer isScrollable /> */}
        </section >

    )
}
export default AboutUs;