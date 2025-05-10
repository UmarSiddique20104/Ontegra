import React from "react";
import Header from "../components/header/header";
import { Footer } from "../components/footer/Footer";
import ContentCard from "./ContentCard";
import Image from "next/image";
import Badge from "../../../public/badge.png";

const IsoStandard = () => {
  return (
    <section className="bg-white scrollingSection">
      <Header color={true} />
      <section className="bg-gradient-to-r from-[#191c25] to-[#282e3b] pt-[100px]  md:py-[20px] pb-14 bg-right md:bg-contain 4xl:h-[70vh] 3xl:h-[75vh] 2xl:h-[80vh] lg:h-[90vh] md:h-[70vh] xl:h-[90vh] bg-no-repeat   ">
        <div className="container mx-auto px-4">
          <div className="lg:pt-[40px] md:pt-[30px] max-md:pt-[20px] pt-[90px] flex justify-between items-center sm:flex-col-reverse max-sm:flex-col-reverse md:flex-row min-md:flex-row w-[100%]">
            <div className="flex flex-col lg:w-[45%] xl:w-[63%] 2xl:w-[60%] md:w-[50%]">
              <div >
                <h1 className="xl:max-w-[80%] text-white text-[30px] xl:text-[40px] 2xl:text-[50px] 3xl:text-[60px] 2xl:leading-[77px] font-bold font-montserrat">
                  Upholding <span className="text-[#278cb3]">Excellence</span>{" "}
                  with ISO Certifications
                </h1>
                <p className="text-[#7E7E7E] xl:leading-[25px] lg:mt-7 2xl:leading-[35px] mt-5 md:mt-0 xl:mt-7  max-sm:text-[16px] lg:text-[14px] 2xl:text-[19px] 3xl:text-[20px] font-lato font-normal">
                  At Ontegra, our adherence to the highest standards is not
                  merely a pursuit but our promise. Our ISO certifications
                  reflect our dedication to delivering exceptional service
                  quality, operational excellence, and sustainable environmental
                  practices.
                </p>
              </div>
            </div>
            <div className=" flex max-md:justify-center min-md:justify-end md:w-[50%] lg:w-[45%] xl:w-[37%] 2xl:w-[40%] ">
              <Image className="w-[90%] p-[60px]" src={Badge} alt="/" />
            </div>
          </div>
        </div>
      </section>
      <div className="h-[10vh] scrollingSection lg:block hidden"></div>
      <section className="container lg:mb-[100px] mb-10 mx-auto min-h-screen">
        <div className="2xl:mb-[100px] mt-5 md:my-4 2xl:pt-7 2xl:pb-9">
          <div className="flex justify-between items-center px-4 lg:w-[50%]">
            <div className="w-[20%]">
              <img
                src="/buraeau.png"
                alt="icon"
                className="2xl:h-[90px] lg:h-[60px] object-contain"
              />
            </div>
            <div className="w-[20%]">
              <img
                src="/buraeau2.png"
                alt="icon"
                className="2xl:h-[90px] lg:h-[60px] object-contain"
              />
            </div>
            <div className="w-[20%]">
              <img
                src="/bisc_logo.png"
                alt="icon"
                className="2xl:h-[90px] lg:h-[60px] object-contain"
              />
            </div>
            <div className="w-[20%]">
              <img
                src="/ISSA-logo.png"
                alt="icon"
                className="2xl:h-[90px] lg:h-[60px] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap gap-4 max-sm:gap-1 px-4 2xl:mt-[70px]">
          <ContentCard
            scrollTo={true}
            title="Quality Management Systems"
            edition="ISO 9001"
            description="ISO 9001 certifies our unwavering commitment to quality management principles, including a strong customer focus and a process of continuous improvement that ensures clients receive consistent, high-quality services."
          />
          <ContentCard
            title="Environmental Management Systems"
            edition="ISO 14001"
            description="With ISO 14001 certification, we demonstrate our dedication to environmental management, guaranteeing that our operations enhance environmental performance and reduce waste, while maintaining our efficiency."
          />
          <ContentCard
            title="Occupational Health & Safety Management Systems"
            description="Our OHSMS certification underscores our prioritization of workplace health and safety, reducing the risk of work-related injuries and diseases to create safer working conditions for our staff and clients."
            edition="ISO 45001"
          />
          <ContentCard
            scrollTo={true}
            title="Facility Management Systems"
            description="This certification represents our proficiency in facility management, ensuring that our services enhance the efficiency of our clients’ operations and conform to the best FM practices globally."
            edition="ISO 41001"
          />
          <ContentCard
            title="British Institute of Cleaning Science"
            description="The BICS certification is a testament to our excellence in cleaning science and our commitment to the highest standards of practice and professionalism. As a BICS-certified entity, Ontegra ensures efficient, innovative, and ethical cleaning services, contributing to healthier, safer, and more welcoming spaces for all our clients."
            edition="BICSc"
          />
          <ContentCard
            title="The Worldwide Cleaning Industry Association"
            description="Our affiliation with ISSA places us at the forefront of the global cleaning industry. It signals our dedication to cutting-edge industry trends, best practices, and lifelong learning in pursuit of exceptional cleanliness and hygiene across the facilities we manage."
            edition="ISSA"
          />
        </div>
      </section>
      {/* <Footer isScrollable={true} /> */}
    </section>
  );
};

export default IsoStandard;
