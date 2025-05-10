import React from 'react'
import Header from '../components/header/header'
import { Footer } from '../components/footer/Footer'


const HealthAndSafety = () => {
    return (
        <>
            <section className='bg-white scrollingSection'>
                <Header color={true} />
                <section className="bg-[url('/healthy-and-safety.png')] lg:py-[150px] md:py-[140px] sm:py-[100px] py-48  bg-cover  flex items-center bg-no-repeat">
                    <div className="container mx-auto px-4">
                        <div className="">
                            <div className="flex flex-col">
                                <div className="lg:w-[45%] xl:w-[63%] 2xl:w-[60%] lg:[w-60%]">
                                    <h1 className='xl:max-w-[80%] text-white text-[30px] xl:text-[40px] 2xl:text-[50px] 3xl:text-[60px] 2xl:leading-[77px] font-bold '>Uncompromised Safety</h1>
                                    <p className='text-white xl:leading-[25px]  2xl:leading-[35px] mt-5  lg:text-[14px] 2xl:text-[19px] 3xl:text-[20px] font-lato font-normal'>At Ontegra, safeguarding well-being is paramount.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='container mx-auto px-4 mb-5 pt-14 pb-14 '>
                    <p className='text-[#000] xl:leading-[25px]  2xl:leading-[35px]   lg:text-[26px] 2xl:text-[19px] 3xl:text-[20px]'>Our Health and Safety Policy</p>
                    <p className='text-[#707070] xl:leading-[25px]  2xl:leading-[35px] mt-5 max-sm:text-[16px] lg:text-[18px] 2xl:text-[19px] 3xl:text-[20px] text-lato font-normal'>Ontegra is passionately committed to provide quality FM services which proactively manages QHSE risk and performance elements in its operations through consultation with our people and management. We strive to enhance our performance to exceed expectations of our customers and stakeholders, through innovative technology, effective monitoring and a commitment to continual process improvement to meet evolving business needs.
                        We are dedicated to promoting a positive HSE culture in our workplaces through improving employee awareness, effective accident prevention strategies, minimizing impact to the environment and complying with all legal requirements in the region. The QHSE policy shall be effectively communicated to our employees and interested parties as required. We are committed to regularly reviewing and updating this policy to ensure its ongoing suitability and effectiveness.</p>
                </section>
                {/* <Footer isScrollable={false} /> */}
            </section>
        </>
    )
}

export default HealthAndSafety;
