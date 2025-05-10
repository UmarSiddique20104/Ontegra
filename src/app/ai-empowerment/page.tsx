"use client"
import "../globals.css";
import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import { Footer } from "../components/footer/Footer";
import ContentCard from "./ContentCard";
import RequestSection from "./RequestSection";

const MyComponent = () => {

  const [state, setState] = useState(true)
  useEffect(() => {

    var windowWidth = window.innerWidth;
    if (windowWidth > 1280) {
      setState(false)
    } else {
      setState(true)
    }


  })
  return (
    <>
      <Header color={true} />
      <div className=" my-container scrollingSection bg-white ">
        <div className="min-h-full mysection ">
          <div className="container mx-auto px-4 bg-white lg:pt-0 md:pt-10 pt-16">
            <div className="grid grid-cols-12  ">
              <div className="sm:col-span-8 col-span-12  lg:pt-[130px] 2xl:[150px] xl:pt-[180px] sm:pt-20 pt-14">
                <h1
                  className={`text-[#278CB3] 2xl:text-[45px] 3xl:text-[60px] text-[32px] font-bold font-montserrat`}
                >
                  AI Empowerment
                </h1>
                <h1
                  className={`  text-black 2xl:text-[45px] 3xl:text-[60px] text-[32px] font-bold font-montserrat`}
                >
                  Where Technology Meets Expertise
                </h1>

                <div className="pt-5 ">
                  <p
                    className={`text-[#C6C6C6] text-[16px] xl:text-[18px] 2xl:text-[18px] 3xl:text-[22px] sm:tracking-[1px] font-lato sm:text-start text-justify`}
                  >
                    In a world where efficiency is paramount, Ontegra stands at
                    the forefront of the Facilities Management (FM) industry by
                    harnessing the transformative power of Artificial
                    Intelligence (AI). As we embark on this journey, we invite
                    you to explore how our AI-driven operations are setting new
                    benchmarks in asset management and customer satisfaction.
                  </p>
                </div>
                <div className="    bg-[#F0F0F0] mt-[5vh] xl:block hidden">
                  <div className="text-start">
                    <h2
                      className={`sm:text-[28px] sm:px-6 px-4   lg:text-[28px]  mx-auto xl:text-[22px] 2xl:text-[20px] 4xl:text-[28px] 3xl:text-[28px] lg:py-3 text-[22px]  font-semibold font-montserrat`}
                    >
                      Navigating the AI Revolution in FM
                    </h2>
                    <p
                      className={` text-start   sm:px-6 px-4 pb-5 lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px]    leading-7  tracking-[1px]  text-[#707070] font-lato`}
                    >
                      Our AI integration goes beyond mere automation; it’s a
                      strategic enabler that optimizes every facet of our
                      operations. From predictive maintenance to intelligent
                      resource allocation, Ontegra’s AI systems are engineered
                      to think, learn, and act—safeguarding your assets and
                      ensuring seamless facility operations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4 col-span-12">
                <div className="flex md:justify-end  justify-center h-full md:pe-5">
                  <div className="sm:h-[100vh] h-[280px] w-[90%] lg:w-[80%] md:pt-0 pt-5">

                    <img
                      src="/AI.png"
                      className="object-cover  h-full w-full"
                      alt=""
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="3xl:h-[5vh] 2xl:h-[3vh] lg:h-[10vh] scrollingSection hidden md:block bg-white"></div>
        <div className="py-8 w-full bg-white 2xl:py-[140px] xl:py-[80px] ">
          <div className="container mx-auto px-4 ">
            <div className="grid grid-cols-12 gap-4 md:!gap-4  ">


              {state ?
                <ContentCard
                  title="Navigating the AI Revolution in FM"
                  description="   Our AI integration goes beyond mere automation; it’s a
                strategic enabler that optimizes every facet of our
                operations. From predictive maintenance to intelligent
                resource allocation, Ontegra’s AI systems are engineered
                to think, learn, and act—safeguarding your assets and
                ensuring seamless facility operations."
                /> :
                <>
                </>}

              <ContentCard
                title="Predictive Intelligence, Proactive Solutions"
                description="Ontegra’s AI capabilities are not just about reacting to the present but anticipating the future. Our predictive analytics dive deep into asset data, spotting trends, and preempting potential issues before they become problems. This means more uptime for your facilities and less downtime impacting your business."
              />
              <ContentCard
                title="Smart Systems for a Smarter Experience"
                description="Every Ontegra solution is powered by smart systems that adapt to your unique needs. Our dynamic AI algorithms fine-tune facility operations, deliver cost-effective energy management, and ensure the highest levels of comfort and safety for tenants and visitors."
              />
              <ContentCard
                title="Bridging the Digital Divide"
                description="In every project, Ontegra’s goal is to bridge the digital divide, making cutting-edge technology accessible and advantageous to all our clients. We democratize technology, so whether it’s a small retail space or a sprawling corporate campus, the benefits of our intelligent FM solutions are within reach."
              />
            </div>
          </div>
          <div className="min-h-[100vh] scrollingSection pt-7 lg:pt-[20vh]">
            <RequestSection />
          </div>
        </div>
        {/* <Footer isScrollable={true} /> */}
      </div>
    </>
  );
};

export default MyComponent;
