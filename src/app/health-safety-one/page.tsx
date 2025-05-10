import React from "react";
import Header from "../components/header/header";
import { Footer } from "../components/footer/Footer";
import "../../app/globals.css";

const healthy = () => {
  return (
    <>
    <section className='bg-white scrollingSection'>
            <Header color={true} />
            <section className="bg-[url('/Sustainable.png')]  lg:py-[150px] md:py-[140px] sm:py-[100px] py-48  bg-cover  flex items-center bg-no-repeat">
                <div className="container mx-auto px-4">
                    <div className="">
                        <div className="flex flex-col">
                            <div className="lg:w-[45%] xl:w-[63%] 2xl:w-[60%] lg:[w-60%]">
                                <h1 className='xl:max-w-[80%] text-black text-[30px] xl:text-[40px] 2xl:text-[50px] 3xl:text-[60px] 2xl:leading-[77px] font-bold '>Sustaining the Future, Today</h1>
                                <p className='text-white xl:leading-[25px]  2xl:leading-[35px] mt-5  lg:text-[14px] 2xl:text-[19px] 3xl:text-[20px] font-lato font-normal'>Our Green Vision for 2030: Net-Zero Carbon Emissions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container mx-auto px-4 mb-5 pt-14 pb-14 '>
                {/* <p className='text-[#000] xl:leading-[25px]  2xl:leading-[35px]   lg:text-[26px] 2xl:text-[19px] 3xl:text-[20px]'>Our Health and Safety Policy</p> */}
                <p className='text-[#707070] xl:leading-[25px] 2xl:leading-[35px] mt-5 lg:text-[18px] 2xl:text-[19px] 3xl:text-[20px] text-lato font-normal '>In our quest to uphold the mantle of environmental guardianship, Ontegra is firmly on the path to achieving net-zero carbon emissions by 2030. This ambitious vision is fueled by the adoption of sustainable practices in every facet of our operations. Our ap</p>
                <p className='text-[#707070] xl:leading-[25px]  2xl:leading-[35px] mt-5  lg:text-[18px] 2xl:text-[19px] 3xl:text-[20px] text-lato font-normal'>We champion the use of eco-friendly chemicals in our cleaning services, minimizing the ecological footprint and ensuring the safety of both our clients and the planet. In our maintenance operations, we prioritize the use of eco-friendly gases and seek innovations that deliver efficiency without compromise.
</p>

                <p className='text-[#707070] xl:leading-[25px]  2xl:leading-[35px] mt-5  lg:text-[18px] 2xl:text-[19px] 3xl:text-[20px] text-lato font-normal'>Ontegra’s commitment to sustainability extends beyond operational adjustments. We are at the vanguard, setting benchmarks by adhering to global best practices and standards in environmental stewardship. Our sustainable practices resonate with global movements within the FM industry, where a green approach is not just an option but a necessity.</p>

                <p className='text-[#707070] xl:leading-[25px]  2xl:leading-[35px] mt-5  lg:text-[18px] 2xl:text-[19px] 3xl:text-[20px] text-lato font-normal'>With each green initiative, Ontegra reaffirms its dedication to a sustainable present and a flourishing future, echoing our promise of delivering excellence in facility management while nurturing the world we all share.
</p>

            </section>
           
            {/* <Footer isScrollable={false} /> */}
        </section>
    </>
  );
};

export default healthy;



