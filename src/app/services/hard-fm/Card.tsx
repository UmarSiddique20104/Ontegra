import Image from 'next/image';
import React from 'react'
const Card = (props: { iconPath: string, title: string, description: string, isLastChild?: boolean }) => {
    return (
        <div className={`bg-[#EFEFEF] py-[25px] px-[20px] ${props.isLastChild ? "w-full" : "md:w-[49%]"} w-full`}>
            <div className='flex 3xl:gap-[25px] 2xl:gap-[20px] lg:gap-[10px] gap-4 flex-col'>
                <Image src={props.iconPath} alt='icon' width={50} height={50} />
                <h3 className='font-lato 3xl:text-[30px] 2xl:text-[22px] font-bold'>{props.title}</h3>
                <p className='text-[#707070] 3xl:leading-[35px] 2xl:leading-[28px] font-lato font-normal 3xl:text-[20px] xl:text-[15px] lg:text-[12px]'>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;