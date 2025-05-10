import React from 'react'
import Header from '../components/header/header';
import Image from 'next/image';
import abuDhabiPolice from "../../../public/clients/abu_dhabi_police.png";
import departMentOfCulture from "../../../public/clients/department-of-culture-and-tourism-in-abu-dhabi-logo-vector.png";
import Eo from "../../../public/clients/logo-eo@2x.png";
import emiratesRedCrescent from "../../../public/clients/red_cresent.png";
import dewa from "../../../public/clients/dewa-logo-F9CDE9D031-seeklogo.com (1).png";
import abuDhabiCivilDefence from "../../../public/clients/CivilDefense.png";
import dubaiWorldTradeCenter from "../../../public/clients/Artboard.png";
import sharjahCity from "../../../public/clients/Sharjah-Chartity.png";
import islamicAffairs from "../../../public/clients/artwork-3-15.png";
import dubaiIslamicBank from "../../../public/clients/dubai_islamic_bank.png";
import EMMAR from "../../../public/clients/emaar.png";
import kaizen from "../../../public/clients/kaizen.png";
import provis from "../../../public/clients/provis.png";
import deyaar from "../../../public/clients/deyaar.png";
import millenium from "../../../public/clients/Millennium_Hotels_And_Resorts_Logo.png";
import centralPark from "../../../public/clients/centralPark.png";
import coop from "../../../public/clients/coop-logo.png";
import tabreed from "../../../public/clients/tabreed.png";
import three60 from "../../../public/clients/three60.png";
import DHL from "../../../public/clients/dhl-logo-freelogovectors.net_.png";
import fedex from "../../../public/clients/purepng.com-fedex-logologobrand-logoiconslogos-251519939539h7rji.png";
import distrikt from "../../../public/clients/disttrikt.png";
import oneTower from "../../../public/clients/one_tower.png";
import raim from "../../../public/clients/raim.png";
import aldarUniversity from "../../../public/clients/aldar.png";


const OurClients = () => {
    return (
        <section className='bg-white'>
            <Header color={true} />
            <div className="2xl:pt-[150px] xl:pt-[120px] lg:pt-[100px] max-md:pt-[120px] pt-[90px] container mx-auto px-4 bg-white">
                <h1 className='3xl:text-[80px] 2xl:text-[60px] xl:text-[40px] lg:text-[30px] font-bold leading-[89px] !font-montserrat text-[20px]'>Our Clients</h1>
                <div className="flex max-lg:gap-5 lg:flex-row flex-col min-h-[80vh] pb-10 items-stretch justify-between 3xl:mt-[80px] 2xl:mt-[40px]">
                    <div className="lg:w-[40%] 4xl:!h-[770px] 3xl:!h-[775px] 2xl:!h-[700px]">
                        <form className='h-full'>
                            <fieldset className="border-2 border-[#278CB3] rounded-[18px] max-xl:px-[30px] px-4 3xl:py-[62px] 2xl:py-[40px] xl:py-[30px] lg:py-[25px] py-5 h-full">
                                <legend className="font-bold px-3 text-[#278CB3] lg:text-[14px] xl:text-[17px] 2xl:text-[21px] !font-montserrat">Government</legend>
                                <div className="flex flex-wrap max-md:gap-3 gap-5 max-md:mt-5 2xl:px-[34px] xl:px-[15px] justify-between">
                                    <div className="card max-md:w-[47%] flex items-center justify-center py-[24px] 2xl:w-[30%] xl:w-[28%] lg:w-[28%] md:w-[21%] px-[20px] border border-[#707070] rounded-[7px]">
                                        <Image src={abuDhabiPolice} alt='Company Logo' height={100} />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center py-[24px] 2xl:w-[30%] xl:w-[28%] lg:w-[28%] md:w-[21%] px-[20px] border border-[#707070] rounded-[7px]">
                                        <Image src={departMentOfCulture} alt='Company Logo' height={100} />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center py-[24px] 2xl:w-[30%] xl:w-[28%] lg:w-[28%] md:w-[21%] px-[20px] border border-[#707070] rounded-[7px]">
                                        <Image src={Eo} alt='Company Logo' height={100} />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center py-[24px] 2xl:w-[30%] xl:w-[28%] lg:w-[28%] md:w-[21%] px-[20px] border border-[#707070] rounded-[7px]">
                                        <Image src={emiratesRedCrescent} alt='Company Logo' className='2xl:h-[100px] xl:h-[80px] lg:h-[50px]' />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center py-[25px] 2xl:w-[30%] xl:w-[28%] lg:w-[28%] md:w-[21%] px-[35px] border border-[#707070] rounded-[7px]">
                                        <Image src={dewa} alt='Company Logo' className='2xl:h-[100px] xl:h-[80px] lg:h-[50px]' />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center py-[24px] 2xl:w-[30%] xl:w-[28%] lg:w-[28%] md:w-[21%] px-[2px] border border-[#707070] rounded-[7px]">
                                        <Image src={abuDhabiCivilDefence} alt='Company Logo' className='w-full h-auto' />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center 2xl:w-[30%] xl:w-[28%] lg:w-[28%] border-[#707070] rounded-[7px] md:w-[21%]">
                                        <Image src={dubaiWorldTradeCenter} className='h-full rounded-[7px] max-lg:w-full' alt='Company Logo' />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center py-[24px] 2xl:w-[30%] xl:w-[28%] lg:w-[28%] px-[20px] border border-[#707070] rounded-[7px] md:w-[21%]">
                                        <Image src={sharjahCity} alt='Company Logo' height={100} />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center 2xl:w-[30%] xl:w-[28%] lg:w-[28%] border border-[#707070] rounded-[7px] md:w-[21%]">
                                        <Image src={islamicAffairs} alt='Company Logo' height={100} className='h-full rounded-[7px]' />
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div className="lg:w-[58%] 4xl:!h-[770px] 3xl:!h-[775px] 2xl:!h-[700px]">
                        <form className='h-full'>
                            <fieldset className="border-2  border-[#278CB3] rounded-[18px] px-4 3xl:py-[62px] 2xl:py-[40px] xl:py-[30px] lg:py-[25px] py-5 h-full">
                                <legend className="lg:text-[14px] xl:text-[17px] font-bold px-3 text-[#278CB3] 2xl:text-[21px] !font-montserrat">Private Sector</legend>
                                <div className="flex justify-between flex-wrap max-md:gap-3 gap-5 xl:px-[15px] 2xl:px-[34px] px-5">
                                    <div className="card flex items-center max-md:w-[47%] justify-center w-[22%] px-[20px] border border-[#707070] rounded-[7px]">
                                        <Image src={dubaiIslamicBank} height={100} alt='Company Logo' />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center w-[22%] px-[20px] border border-[#707070] rounded-[7px]">
                                        <Image src={EMMAR} height={100} alt='Company Logo' />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center py-[24px] w-[22%] px-[20px] border border-[#707070] rounded-[7px]">
                                        <Image src={kaizen} height={100} alt='Company Logo' />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center py-[24px] w-[22%] px-[20px] border border-[#707070] rounded-[7px]">
                                        <Image src={provis} height={100} alt='Company Logo' />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center py-[24px] w-[22%] px-[20px] border border-[#707070] rounded-[7px]">
                                        <Image src={deyaar} height={100} alt='Company Logo' />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center py-[24px] w-[22%] px-[20px] border border-[#707070] rounded-[7px]">
                                        <Image src={millenium} height={100} alt='Company Logo' />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center py-[24px] w-[22%] px-[20px] border border-[#707070] rounded-[7px]">
                                        <Image src={centralPark} height={100} alt='Company Logo' />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center py-[24px] w-[22%] px-[20px] border border-[#707070] rounded-[7px]">
                                        <Image src={coop} height={100} alt='Company Logo' />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center py-[24px] w-[22%] px-[20px] border border-[#707070] rounded-[7px]">
                                        <Image src={tabreed} height={100} alt='Company Logo' />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center py-[24px] w-[22%] px-[20px] border border-[#707070] rounded-[7px]">
                                        <Image src={three60} height={100} alt='Company Logo' />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center py-[24px] w-[22%] px-[20px] border border-[#707070] rounded-[7px]">
                                        <Image src={DHL} height={100} alt='Company Logo' />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center py-[24px] w-[22%] px-[20px] border border-[#707070] rounded-[7px]">
                                        <Image src={fedex} height={100} alt='Company Logo' />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] h-fit justify-center w-[22%]">
                                        <Image src={distrikt} className='rounded-[7px] w-[100%] 3xl:h-[150px] 2xl:h-[120px] xl:h-[94px] lg:h-[80px] h-[80px] sm:h-[120px]' alt='Company Logo' />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] h-fit justify-center w-[22%]  rounded-[7px]">
                                        <Image src={oneTower} className='rounded-[7px] w-[100%] 3xl:h-[150px] 2xl:h-[120px] xl:h-[94px] lg:h-[80px] h-[80px] sm:h-[120px]' alt='Company Logo' />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] h-fit bg-red-400 justify-center w-[22%] rounded-[7px]">
                                        <Image src={raim} className='rounded-[7px] w-[100%] 3xl:h-[150px] 2xl:h-[120px] xl:h-[94px] lg:h-[80px]' alt='Company Logo' />
                                    </div>
                                    <div className="card flex items-center max-md:w-[47%] justify-center w-[22%] px-[20px] border border-[#707070] rounded-[7px]">
                                        <Image src={aldarUniversity} height={100} alt='Company Logo' />
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default OurClients;
