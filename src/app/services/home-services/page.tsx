import React from "react";
import Header from "../../components/header/header";
import Image from "next/image";
import homeServices from "../../../../public/services/ResidentialServices.png";
import { Footer } from "../../components/footer/Footer";
import Card from "./Card";
import { cardData } from "./cardData";
import InputField from "./InputField";
import Button from "./Button";

const TotalFM = () => {
  const cardDataLength: number = cardData.length;

  return (
    <section className="bg-white">
      <Header color={true} />
      <section className="container mx-auto px-4">
        <div className="pt-[110px] min-h-screen">
          <div className="grid grid-cols-12 lg:gap-x-[80px] lg:gap-y-0 gap-y-5">
            <div className="lg:col-span-9 col-span-12 lg:pt-[100px] pt-[30px]">
              <h1 className="font-montserrat font-bold text-black text-3xl md:text-5xl lg:text-6xl xl:text-[80px] xl:leading-[89px] -tracking-[0.96px] mb-2">
                Home Services
              </h1>
              <p className="2xl:text-[40px] xl:text-[30px] lg:text-[25px] md:text-[22px] text-[18px] font-normal font-montserrat text-[#278CB3] my-5 lg:my-0">
                Empowering Efficiency
              </p>
              <p className="2xl:mt-[80px] xl:mt-[50px] lg:mt-9 font-lato max-sm:text-[16px] 3xl:text-[22px] xl:text-[20px] md:text-[18px] font-normal text-[#707070] 2xl:leading-[40px] xl:leading-[30px] xl:max-w-[89%]">
                At Ontegra, we’re revolutionizing energy management by
                integrating smart solutions into the very fabric of our
                facilities management services. Our approach is not just about
                conserving energy; it’s about optimizing usage and harnessing
                innovation for smarter consumption and cost-effective
                operations.
              </p>
            </div>
            <div
              className="lg:col-span-3 col-span-12 md:mx-auto  max-lg:mt-6 max-xl:mt-7
						max-2xl:mt-6 lg:mx-0 mx-0 max-sm:mt-3 max-lg:mb-11 max-lg:w-full max-lg:h-fit"
            >
              <Image
                src={homeServices}
                className="w-full lg:max-w-full 2xl:h-[500px] xl:h-[400px] lg:h-[370px] md:h-[85%] h-[300px] object-cover"
                alt="services"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4">
        <div className="flex justify-between lg:gap-5 gap-3 items-stretch flex-wrap">
          {cardData.map((item, index) => {
            return (
              <Card
                key={index}
                iconPath={item.icon}
                title={item.title}
                description={item.description}
                isLastChild={
                  index === cardDataLength - 1 && index % 2 == 0 ? true : false
                }
              />
            );
          })}
        </div>
        <div className="lg:my-[100px] 2xl:mb-[200px] my-9">
          <div className="2xl:w-[80%] xl:w-[55%] lg:w-[68%]">
            <h2 className="font-lato font-bold 
             md:text-[30px] text-[24px]">
              With Ontegra, security is more than a service—it’s a promise{" "}
              <br />A promise to deliver peace of mind with vigilance,
              expertise, and unwavering dedication to the safety of our clients’
              facilities and their occupants.
            </h2>
          </div>
        </div>
      </section>
      <section className="lg:min-h-screen flex flex-col justify-center lg:mb-[100px] lg:pb-[190px] md:mb-14 mb-[250px]">
        <div className="bg-[#278CB3]">
          <div className="flex lg:flex-row flex-col container mx-auto px-4 items-center py-5 lg:py-0 lg:h-[40vh]">
            <div className="lg:w-[50%]">
              <h1 className="3xl:text-[100px] 2xl:text-[75px] xl:text-[60px] md:text-[45px] font-lato font-bold text-white text-[30px]">
                Let’s Talk?
              </h1>
            </div>
            <div className="lg:w-[50%] w-full 3xl:py-[50px] mt-5 lg:mt-0 py-10 px-10 3xl:px-[65px] bg-[#EFEFEF] ">
              <form className="flex flex-col gap-4">
                <InputField label="Service Required?" type="text" />
                <InputField label="Name" type="text" />
                <InputField label="Email" type="email" />
                <InputField label="Phone" type="number" />
                <InputField label="Company" type="text" />
                <InputField label="Details" type="text" isTextArea={true} />
                <Button title="Submit" />
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </section>
  );
};

export default TotalFM;
