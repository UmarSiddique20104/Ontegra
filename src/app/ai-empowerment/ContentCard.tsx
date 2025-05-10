import React from 'react'

const ContentCard = (props: {  title: string, description: string }) => {
    return (
        <div className="xl:col-span-8 lg:col-span-6 col-span-12  xl:h-[23vh]  bg-[#F0F0F0] ">
            <div className="text-start">
          
                <h2 className={`sm:text-[28px] sm:px-6 px-4  xl:pt-[2vh] pt-3 lg:text-[28px]  mx-auto xl:text-[22px] 2xl:text-[20px] 4xl:text-[28px] 3xl:text-[28px]  text-[22px]  font-semibold font-montserrat`}>
                    {props.title}
                </h2>
                <p
                    className={` text-start 2xl:leading-10 leading-7  sm:px-6 px-4 pb-5 lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px]    tracking-[1px]  text-[#707070] font-lato`}
                >
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default ContentCard