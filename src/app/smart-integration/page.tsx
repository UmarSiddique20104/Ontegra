import "../globals.css";
import React from "react";
import Header from "../components/header/header";
import { Footer } from "../components/footer/Footer";
import ContentCard from "./ContentCard";

const MyComponent = () => {
    return (
        <>
            <Header color={true} />
            <div className=" my-container scrollingSection bg-white ">
                <div className="min-h-full mysection ">
                    <div className="container mx-auto px-4  bg-white lg:pt-0 md:pt-10 pt-16">
                        <div className="grid grid-cols-12  ">
                            <div className="sm:col-span-6 col-span-12  lg:pt-[130px] xl:pt-[200px] sm:pt-20 pt-14">
                                <h1 className={`text-[#278CB3] 2xl:text-[45px] 3xl:text-[60px] md:text-[32px] lg:text-[42px] text-[32px] font-bold font-montserrat`}>
                                Smart Integration
                                </h1>
                                      <h1
                                    className={`  text-black 2xl:text-[45px] 3xl:text-[60px] md:text-[32px] lg:text-[42px] text-[32px] font-bold font-montserrat`}
                                >
                                 The Future of Facility Management 
                                </h1>

                                <div className="pt-5">
                                    <p
                                        className={`text-[#C6C6C6] text-[16px] xl:text-[18px] 2xl:text-[18px] 3xl:text-[22px] 2xl:leading-10 leading-7  sm:tracking-[1px] font-lato sm:text-start text-justify`}
                                    >
                                      In the realm of facility management, the future has arrived. At Ontegra, we’re not just participants in the evolution of our industry; we’re active pioneers, propelling it forward with the integration of artificial intelligence and automation. We recognize that in the digital transformation era, embracing technology is not merely an option but a necessity for staying ahead.
                                    </p>
                                   
                                </div>
                            </div>
                            <div className="sm:col-span-6 col-span-12">
                                <div className="flex md:justify-end justify-center h-full md:pe-5">
                                <div className="md:h-[100vh] h-[280px] w-[50%] md:pt-0 pt-5">
                                    <img  src="/RedefiningWoman.png"    className="object-cover h-full w-full" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="3xl:h-[5vh] 2xl:h-[3vh] lg:h-[10vh] scrollingSection hidden md:block bg-white"></div>
                <div className="py-8 w-full bg-white 2xl:py-[160px] xl:py-[100px] ">
                    <div className="container mx-auto px-4 ">
                        <div className="grid grid-cols-12 gap-4 md:!gap-4 ">
                            <ContentCard title="AI Driven FM Solutions"  description="Where precision meets proficiency—our Mechanical, Electrical, and Plumbing (MEP) services ensure your systems operate seamlessly. From intricate electrical fixtures to robust mechanical workings, we deploy rigorous attention to detail and expertise for a harmonious operational symphony." />
                            <ContentCard title="Automation and Efficiency"  description="Ontegra’s automation protocols ensure that facility operations are streamlined and seamless. By reducing manual interventions, we minimize human error and free up our skilled workforce to focus on what truly matters—innovation and personalized client service. Our automated systems control heating, ventilation, air conditioning, and lighting, ensuring optimal comfort and energy use." />
                            <ContentCard title="Digital Systems for a Connected World"  description="We champion digital systems that connect every aspect of facilities management. From integrated building management systems to IoT-enabled devices, our interconnected networks ensure a harmonized operation. This connectivity not only provides unparalleled control and monitoring capabilities but also enhances the safety and security of the premises we manage." />
                            <ContentCard title="Evolving with Technology"  description="The digitization of our services at Ontegra is a testament to our belief that the best results are achieved when technology complements human expertise. Our digital journey is marked by constant evolution, ensuring that we not only keep pace with emerging technologies but also lead the way in implementing them." />
                        </div>
                    </div>
                    <div className="min-h-[100vh] scrollingSection sm:pt-[20vh] pt-10">
                    <div className="container mx-auto px-4 ">
                    <h2 className={`sm:text-[28px] lg:text-[28px]  mx-auto   lg:py-3 text-[22px] py-5 mt-[25px] font-semibold  font-montserrat`}>
                    The digitization of our services at Ontegra is a testament to our belief that the best results are achieved when technology complements human expertise. Our digital journey is marked by constant evolution, ensuring that we not only keep pace with emerging technologies but also lead the way in implementing them.
                  
                </h2>
                    </div>
                    </div>
                    
                    
                </div>
                {/* <Footer isScrollable={true} /> */}
            </div>
        </>
    );
};

export default MyComponent;
