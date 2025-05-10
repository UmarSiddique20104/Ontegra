import React from 'react'
import Image, { StaticImageData } from 'next/image'

const ContentCard = (props: { path: StaticImageData, title: string, description: string }) => {
    return (
        <div className="lg:col-span-4 md:col-span-6 col-span-12 xl:py-7 lg:py-0 py-7 h-full 4xl:h-full 3xl:h-full bg-[#F0F0F0] ">
            <div className="text-center">
                <div className="flex justify-center pt-7">
                    <Image
                        alt="image"
                        src={props.path}
                        height={100}
                        width={100}
                        className="object-cover sm:h-[60px] sm:w-auto h-20 w-20"
                    />
                </div>
                <h2 className={`sm:text-[28px] lg:text-[16px] 4xl:max-w-[85%] mx-auto xl:text-[16px] 2xl:text-[20px] 4xl:text-[35px] 3xl:text-[28px] lg:py-3 text-[22px] py-5 mt-[25px] font-semibold px-10 font-montserrat`}>
                    {props.title}
                </h2>
                <p
                    className={` sm:px-6 px-4 pb-5 max-sm:text-[16px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] mt-4 xl:mt-7 3xl:mt-[60px]  tracking-[1px] sm:text-center text-justify text-[#707070] font-lato`}
                >
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default ContentCard