import React from 'react'

const ContentCard = (props: {  title: string, description: string }) => {
    return (
        <div className="lg:col-span-3 md:col-span-6 col-span-12 xl:py-7 lg:py-0 py-7 h-full 4xl:h-full 3xl:h-full bg-[#F0F0F0] ">
            <div className="text-center">
                <div className="flex justify-center ">
               
                </div>
                <h2 className={`sm:text-[28px] lg:text-[28px] 4xl:max-w-[85%] mx-auto xl:text-[22px] 2xl:text-[20px] 4xl:text-[28px] 3xl:text-[28px] lg:py-3 text-[22px] py-5 mt-[25px] font-semibold px-10 font-montserrat`}>
                    {props.title}
                </h2>
                <p
                    className={` text-justify    sm:px-6 px-4 pb-5 lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] mt-4 xl:mt-7 3xl:mt-[60px]  tracking-[1px]  text-[#707070] font-lato`}
                >
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default ContentCard