"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import teamData from "./teamData";
import Link from "next/link";

function Carousel() {
    const [state, setState] = useState<number>(0);

    return (
        <div className="flex md:flex-row flex-col md:gap-0 gap-7 md:overflow-x-scroll hideScroll">
            {
                teamData.map((item, index: number) => {
                    return (
                        <div key={index} className={`md:mx-5 select-none group !h-[688px] transition-all ease-in-out duration-500 w-full md:w-[200px] me-2 hover:md:w-[514px]`}>
                            <Link href={item.link}>
                                <img src={item.path} alt="pic" className="select-none focus-visible:ring-0 !h-[688px] rounded-[29px] w-full object-cover ease-in-out" />
                            </Link>
                            <div className={`select-none transform z-10 px-9 py-7 ease-in-out transition-all  pointer-events-none bg-black/60 md:bg-transparent group-hover:md:bg-black/60 duration-500 group-hover:md:w-[514px] translate-y-[-100%] md:translate-y-[-125%] group-hover:md:!translate-y-[-100%] rounded-br-[27px] rounded-bl-[29px]`}>
                                <h1 className={`text-white w-full font-montserrat font-bold group-hover:rotate-0 rotate-0 md:rotate-[270deg] text-[18px] md:text-[41px] capitalize`}>{item.title}</h1>
                                <p className={`text-[#1ABFFF] group-hover:md:block md:hidden font-montserrat font-medium text-[20px] mt-2`}>{item.designation}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}


export default Carousel;
