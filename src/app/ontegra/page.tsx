// import "../globals.css";
import React from "react";
import star from "../../../public/star.png";
import acheive from "../../../public/acheive.png";
import target from "../../../public/target.png";
import Header from "../components/header/header";
import ContentCard from "./ContentCard";
import { Footer } from "../components/footer/Footer";
import Content from "./Content";
// import Content from "./Content";

const MyComponent = () => {
    return (
        <>
            <Header color={true} />
            <div className=" my-container scrollingSection">
                <div className="about-us-section2 min-h-full mysection">
                    <div className="container mx-auto lg:pt-[130px] xl:pt-[200px] sm:pt-20 pt-20 px-4 background-blur">
                        <div className="grid grid-cols-12 max-sm:mt-[45px] sm:mt-[30px]">
                            <div className="sm:col-span-8 col-span-12 ">
                                <h1 className={`text-[#278CB3] 2xl:text-[45px] 3xl:text-[60px] text-[32px] font-bold font-montserrat`}>
                                    Pioneering
                                </h1>
                                <h1
                                    className={`  text-[#ffffff] 2xl:text-[45px] 3xl:text-[60px] text-[32px] font-bold font-montserrat`}
                                >
                                    Smarter FM Solutions
                                </h1>

                                <div className="pt-5">
                                    <p
                                        className={`text-[#C6C6C6] max-sm:text-[16px] lg:text-[14px] xl:text-[16px] 2xl:text-[16px] 3xl:text-[20px] sm:tracking-[1px] font-lato sm:text-start text-justify`}
                                    >
                                        Welcome to Ontegra, where our journey began over two decades
                                        ago with a vision to transform the traditional approach to
                                        facilities management. At Ontegra, we believe in smart
                                        solutions powered by human-centric AI, ensuring each client
                                        benefits from bespoke service excellence. Our unique
                                        approach marries Deyaar’s illustrious legacy with
                                        next-generation technologies, setting us apart as leaders in
                                        an ever-evolving industry.
                                    </p>
                                    <p
                                        className={`text-[#C6C6C6] 2xl:pt-10 max-sm:text-[16px] lg:text-[14px] xl:text-[16px] 2xl:text-[16px] 3xl:text-[20px] sm:pt-10 pt-4 sm:tracking-[1px] font-lato sm:text-start text-justify lg:pb-0 pb-6`}
                                    >
                                        As pioneers in integrating AI and Machine Learning, we
                                        extend the life cycle of assets and enhance operational
                                        efficiencies, all while keeping sustainability at the core
                                        of our operations. Ontegra is not just about managing; it’s
                                        about elevating and sustaining your environment with
                                        precision and care.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="3xl:h-[5vh] 2xl:h-[3vh] lg:h-[10vh] scrollingSection hidden md:block"></div>
                <div className="py-8 w-full bg-white 2xl:py-[160px] xl:py-[100px] ">
                    <div className="container mx-auto px-4 ">
                        <div className="grid grid-cols-12 gap-4 gap-y-4 md:!gap-4 ">
                            <ContentCard title="AI Driven FM Solutions" path={star} description="Embracing AI has been more than just a buzzword for us, we have been at the forefront of integrating this transformative technology into the core of our FM services. We envision to leverage AI not just for the sake of innovation, but to address tangible challenges within the FM domain. Our application of AI bridges communication gaps, catalyzes knowledge transfer, automates processes, and significantly enhances the overall customer experience" />
                            <ContentCard title="Decades of Industry Excellence" path={acheive} description="Our history is marked by relentless innovation and a steadfast pursuit of excellence in facility management. Each passing year has honed our expertise, shaping a legacy that not only reflects our past achievements but also illuminates our path forward. We stand as a benchmark for quality in the industry, ever-adaptive, customer-focused, and driven by expertise" />
                            <ContentCard title="Customer-Centric FM Solutions" path={target} description="We craft our facilities management solutions with the customer at the core. With over two decades of cross-industry expertise, we understand that each client is unique. Our approach is bespoke, harnessing advanced AI to design services that are as intuitive as they are impactful." />
                        </div>
                    </div>
                    <div className="3xl:h-[10vh] 2xl:h-[13vh] scrollingSection hidden  md:block"></div>
                    <Content />
                </div>
                {/* <Footer isScrollable={true} /> */}
            </div>
        </>
    );
};

export default MyComponent;
