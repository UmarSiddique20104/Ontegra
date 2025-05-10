"use client";
import React, { useState } from "react";
import Header from '../components/header/header';
import { Footer } from '../components/footer/Footer';
import Image from 'next/image';
import Link from 'next/link';


const Team = () => {
    const [state, setState] = useState<number>(0);
    return (
        <section className='bg-white min-h-screen'>
            <Header color={true} />
            {/* <div className="h-[0vh] scrollingSection"></div> */}
            <section className='min-h-screen pt-40 pb-12 flex items-center justify-center'>
                <div className="container max-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-5">
                        <div className="col-span-1 md:row-span-2">
                            <div className="h-full relative overflow-hidden">
                                <Link
                                    href='/services/total-fm'
                                    className="block h-full group"
                                >
                                    <div className="img h-full grayscale group-hover:grayscale-0 transition-all">
                                        <Image
                                            src='/services/TotalFacilitiesManagement.png'
                                            alt="Total Facilities Management"
                                            height='726'
                                            width='391'
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 text-center py-5 px-4 bg-gradient-to-r from-[#278CB3]/[0] from-0% via-[#0D2F3C] via-[47%] to-[#000001] to-100% bg-gradient-180">
                                        <h2 className="font-poppins uppercase font-semibold text-white text-base md:text-lg lg:text-[22px] lg:leading-[30px]">Total Facilities Management</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="h-full relative overflow-hidden">
                                <Link
                                    href='/services/hard-fm'
                                    className="block h-full group"
                                >
                                    <div className="img h-full grayscale group-hover:grayscale-0 transition-all">
                                        <Image
                                            src='/services/HardFM.png'
                                            alt="Hard fM"
                                            height='726'
                                            width='391'
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 text-center py-5 px-4 bg-gradient-to-r from-[#278CB3]/[0] from-0% via-[#0D2F3C] via-[47%] to-[#000001] to-100% bg-gradient-180">
                                        <h2 className="font-poppins uppercase font-semibold text-white text-base md:text-lg lg:text-[22px] lg:leading-[30px]">Hard fM</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="h-full relative overflow-hidden">
                                <Link
                                    href='/services/soft-fm'
                                    className="block h-full group"
                                >
                                    <div className="img h-full grayscale group-hover:grayscale-0 transition-all">
                                        <Image
                                            src='/services/SoftFM.png'
                                            alt="Soft fM"
                                            height='726'
                                            width='391'
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 text-center py-5 px-4 bg-gradient-to-r from-[#278CB3]/[0] from-0% via-[#0D2F3C] via-[47%] to-[#000001] to-100% bg-gradient-180">
                                        <h2 className="font-poppins uppercase font-semibold text-white text-base md:text-lg lg:text-[22px] lg:leading-[30px]">Soft fM</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="h-full relative overflow-hidden">
                                <Link
                                    href='/services/security'
                                    className="block h-full group"
                                >
                                    <div className="img h-full grayscale group-hover:grayscale-0 transition-all">
                                        <Image
                                            src='/services/SecurityServices.png'
                                            alt="Security services"
                                            height='726'
                                            width='391'
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 text-center py-5 px-4 bg-gradient-to-r from-[#278CB3]/[0] from-0% via-[#0D2F3C] via-[47%] to-[#000001] to-100% bg-gradient-180">
                                        <h2 className="font-poppins uppercase font-semibold text-white text-base md:text-lg lg:text-[22px] lg:leading-[30px]">Security services</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="h-full relative overflow-hidden">
                                <Link
                                    href='/services/energy-management'
                                    className="block h-full group"
                                >
                                    <div className="img h-full grayscale group-hover:grayscale-0 transition-all">
                                        <Image
                                            src='/services/EnergyManagement.png'
                                            alt="Energy Management"
                                            height='726'
                                            width='391'
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 text-center py-5 px-4 bg-gradient-to-r from-[#278CB3]/[0] from-0% via-[#0D2F3C] via-[47%] to-[#000001] to-100% bg-gradient-180">
                                        <h2 className="font-poppins uppercase font-semibold text-white text-base md:text-lg lg:text-[22px] lg:leading-[30px]">Energy Management</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="h-full relative overflow-hidden">
                                <Link
                                    href='/services/specialized-services'
                                    className="block h-full group"
                                >
                                    <div className="img h-full grayscale group-hover:grayscale-0 transition-all">
                                        <Image
                                            src='/services/SpecializedServices.png'
                                            alt="Specialized Services"
                                            height='726'
                                            width='391'
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 text-center py-5 px-4 bg-gradient-to-r from-[#278CB3]/[0] from-0% via-[#0D2F3C] via-[47%] to-[#000001] to-100% bg-gradient-180">
                                        <h2 className="font-poppins uppercase font-semibold text-white text-base md:text-lg lg:text-[22px] lg:leading-[30px]">Specialized Services</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="h-full relative overflow-hidden">
                                <Link
                                    href='/services/home-services'
                                    className="block h-full group"
                                >
                                    <div className="img h-full grayscale group-hover:grayscale-0 transition-all">
                                        <Image
                                            src='/services/ResidentialServices.png'
                                            alt="Residential services"
                                            height='726'
                                            width='391'
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 text-center py-5 px-4 bg-gradient-to-r from-[#278CB3]/[0] from-0% via-[#0D2F3C] via-[47%] to-[#000001] to-100% bg-gradient-180">
                                        <h2 className="font-poppins uppercase font-semibold text-white text-base md:text-lg lg:text-[22px] lg:leading-[30px]">Residential services</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <Footer /> */}
        </section >
    )
}

export default Team;