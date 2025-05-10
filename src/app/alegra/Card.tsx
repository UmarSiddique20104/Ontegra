import Image from 'next/image';
import React from 'react'

const Card = (props: { iconPath?: string, title?: string, description?: string, index: number }) => {
    return (
        <div className='bg-[#F0F0F0] py-4 px-6 my-2'>
            <Image src={props.iconPath!} alt='icons' className='lg:w-[25px] xl:w-[30px] 2xl:w-[45px]' height={45} width={45}/>
            <h1 className='lg:text-[15px] xl:text-[18px] 2xl:text-[24px] font-semibold font-montserrat leading-[32px] mt-5'>{props.index + 1}. {props.title}</h1>
            <p className='text-[#707070] font-lato lg:text-[12px] xl:text-[15px] 2xl:text-[22px] font-normal mt-3 xl:mt-6'>{props.description}</p>
        </div>
    )
}

export default Card;