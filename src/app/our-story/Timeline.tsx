import React from 'react'
import { lato } from '../components/fonts/fonts';

const Timeline = (props: { title: string, year: number, description: string, shouldReverse?: boolean }) => {
    return (
        <div className={`md:mb-[100px] mb-[50px] md:flex justify-between items-center w-full ${props.shouldReverse && "md:flex-row-reverse"}`}>
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-black shadow-xl w-4 h-4 rounded-full absolute -left-2 md:left-[49.59%]"></div>
            <div className={`${props.shouldReverse && "md:text-end"} order-1 bg-[#FAFAFA] md:w-[50%] w-full md:px-[80px] px-5 py-[32px]`}>
                <div className={`${props.shouldReverse && "md:float-right"} md:max-w-72`}>
                    <h3 className="font-bold text-black font-montserrat text-3xl  md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] 3xl:text-[60px] max-sm:mt-5 leading-normal  3xl:leading-[68px]">{props.year}</h3>
                    <p className='text-[25px] font-montserrat'>{props.title}</p>
                    <p className={`text-[18px] text-[#707070] ${props.shouldReverse && "md:ms-auto md:text-end"} ${lato.className}`}>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Timeline;