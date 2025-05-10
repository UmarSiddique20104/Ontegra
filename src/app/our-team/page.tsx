"use client";
import React, { useState } from "react";
import Header from '../components/header/header';
// import { lato } from '../components/fonts/fonts';
// import Carousel from './Carousel';
import { Footer } from '../components/footer/Footer';
import Image from 'next/image';
import Link from 'next/link';
import teamData from "./teamData";


const Team = () => {
    const [state, setState] = useState<number>(0);
    return (
        <section className='bg-white min-h-screen'>
            <Header color={true} />
            {/* <div className="h-[0vh] scrollingSection"></div> */}
            <section className='min-h-screen pt-40 pb-40 2xl:pb-60'>

                <div className='flex items-center justify-center h-full'>
                    <div className="container max-auto px-4">
                        <div className='heading text-center mb-16 xl:mb-24'>
                            <h4 className='uppercase text-[#B7B7B7] font-montserrat font-semibold text-[25px] leading-8'>BEHIND THE SCENES</h4>
                            <h1 className='text-3xl md:text-6xl font-montserrat font-bold text-primary md:leading-[76px] mt-2'><span className='text-[#B7B7B7]'>Ontegra’s</span> Leadership</h1>
                        </div>

                        <div className='team-member grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                            {
                                teamData.map((item, index: number) => {
                                    return <div key={index} className='member-card h-full relative overflow-hidden group/team'>
                                        <Link
                                            href={item?.link}
                                            className='block h-full grayscale group-hover/team:grayscale-0'
                                        >
                                            <div className='member-img h-full 2xl:h-[483px]'>
                                                <Image
                                                    src={item?.path}
                                                    alt={item?.title}
                                                    height='483'
                                                    width='398'
                                                    className='w-full h-full object-cover'
                                                />
                                            </div>

                                            <div className='absolute inset-x-0 bottom-0 px-4 py-5 bg-black/[0.53]'>
                                                <h2 className='font-montserrat font-semibold text-3xl text-white'>{item?.title}</h2>
                                                <p className='font-lato font-normal text-base leading-8 text-primary'>{item?.designation}</p>
                                            </div>
                                        </Link>
                                    </div>
                                })
                            }

                            {/*
                            <div className='member-card relative overflow-hidden group/team'>
                                <Link
                                    href='#'
                                    className='block grayscale group-hover/team:grayscale-0'
                                >
                                    <div className='member-img 2xl:h-[483px]'>
                                        <Image
                                            src='/team/AdnanJabri.png'
                                            alt='Adnan Jabri'
                                            height='483'
                                            width='398'
                                            className='w-full h-full object-cover'
                                        />
                                    </div>

                                    <div className='absolute inset-x-0 bottom-0 px-4 py-5 bg-black/[0.53]'>
                                        <h2 className='font-montserrat font-semibold text-3xl text-white'>Adnan Jabri</h2>
                                        <p className='font-lato font-normal text-base leading-8 text-primary'>General Manager</p>
                                    </div>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>

            </section>

            {/* <div className="h-[0vh] scrollingSection"></div>
            <section className='px-4 lg:px-0 md:pt-8 pt-5 mx-auto container'>
                <div className="lg:py-[150px] px-5 md:px-0">
                    <div className="flex justify-between lg:flex-row flex-col">
                        <div className="lg:w-[21%] mt-14">
                            <div className="flex flex-col">
                                <h4 className='uppercase text-[#B7B7B7] font-montserrat font-semibold text-[25px]'>BEHIND THE SCENES</h4>
                                <h1 className='md:text-[60px] text-[30px] font-montserrat font-bold text-black md:leading-[76px] mt-[9px]'><span className='text-[#B7B7B7]'>Ontegra’s</span> Leadership</h1>
                                <p className={`${lato.className} md:leading-[40px] leading-[32px] text-[16px] md:text-[22px] mt-5 lg:mt-[100px] text-[#707070]`}>We are committed to advancing the FM sector in the region with AI and cutting-edge technology. Our focus is on leveraging AI, Machine Learning to enhance customer experiences, ensuring sustainable asset and building management</p>
                            </div>
                        </div>
                        <div className="lg:w-[70%] md:me-5 mt-10 mb-10 lg:mb-0 lg:mt-0">
                            <Carousel />
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <Footer /> */}
        </section>
    )
}

export default Team;