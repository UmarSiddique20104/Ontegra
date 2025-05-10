import React from 'react'
import Header from '../components/header/header';
import Timeline from './Timeline';
import { lato } from '../components/fonts/fonts';
import { Footer } from '../components/footer/Footer';

const OurStory = () => {
    const data = [
        {
            year: 2005,
            title: "Our Inception",
            description: "Deyaar Facilities Management was formed. Deyaar Facilities Management was formed"
        },
        {
            year: 2010,
            title: "Our Inception",
            description: "Deyaar Facilities Management was formed. Deyaar Facilities Management was formed"
        },
        {
            year: 2015,
            title: "Our Inception",
            description: "Deyaar Facilities Management was formed. Deyaar Facilities Management was formed"
        },
        {
            year: 2020,
            title: "Our Inception",
            description: "Deyaar Facilities Management was formed. Deyaar Facilities Management was formed"
        },
        {
            year: 2024,
            title: "Our Inception",
            description: "Deyaar Facilities Management was formed.  Deyaar Facilities Management was formed"
        }
    ]
    return (
        <section
            className='bg-white'>
            <Header color={true} />
            <section className='container mx-auto px-4'>
                <div className="pt-[150px]">
                    <div className="flex flex-col relative md:items-center mb-[50px] md:mb-[150px] md:max-w-72 md:mx-auto max-md:p-5">
                        <h1 className={`text-3xl md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] 3xl:text-[60px] leading-normal  3xl:leading-[68px] text-black font-bold font-montserrat`}>2002</h1>
                        <p className='my-[10px] text-[25px] font-normal font-montserrat'>Our Inception</p>
                        <p className={`text-[#707070] text-[18px] mb-7 md:text-center ${lato.className}`}>Deyaar Facilities Management was formed. Deyaar Facilities Management was formed
                        </p>
                        <span className='bg-black absolute bottom-[40%] md:bottom-[-7%] -left-2 md:left-1/2 md:-translate-x-1/2 z-20 rounded-full h-4 w-4'></span>
                    </div>
                    <div className="flex relative justify-center">
                        <div className="mx-auto w-full h-full">
                            <div className=" overflow-hidden h-full">
                                <div className="absolute border-black top-[-154px] md:top-[-147px] h-[106%] md:h-[102.3%] left-0 md:left-[50%] border-l-2" ></div>
                                {
                                    data.map((item, index) => {
                                        return <Timeline shouldReverse={(index + 1) % 2 !== 0 ? true : false} key={index} year={item.year} title={item.title} description={item.description} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Footer isScrollable={false} /> */}
        </section>
    )
}

export default OurStory;