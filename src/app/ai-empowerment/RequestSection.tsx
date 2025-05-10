import React from "react";
import InputField from "./InputField";
import Button from "./Button";

const RequestSection = () => {
  return (
    <>
      <section className="lg:min-h-screen flex flex-col justify-center max-lg:mt-5 lg:mb-[100px] md:mb-4 mb-[40px]">
        <div className="bg-[#278CB3]">
          <div className="flex lg:flex-row flex-col container mx-auto px-4 items-center py-5 lg:py-0 lg:h-[40vh]">
            <div className="lg:w-[50%]">
              <h1 className="3xl:text-[100px] 2xl:text-[75px] xl:text-[60px] md:text-[45px] font-lato font-bold text-white text-[30px]">
                Request Demo!
              </h1>
            </div>
            <div className="lg:w-[50%] w-full 3xl:py-[50px] mt-5 lg:mt-0 py-10 px-10 3xl:px-[65px] bg-[#EFEFEF] ">
              <form className="flex flex-col gap-4">
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
    </>
  );
};

export default RequestSection;
