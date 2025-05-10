import React from 'react';
import { lato } from '../components/fonts/fonts';
import Image from 'next/image';

const Content = (props: { title: string, description: string, shouldReverse?: boolean, ImagePath: string }) => {
    return (
        <div className={`${props.shouldReverse ? '' : 'pt-28'} bg-[#FAFAFA] md:min-h-screen pb-8 max-md:pb-8 max-md:mt-8 flex items-center`}>
            <div className="container mx-auto px-4">
                <div className={`${props.shouldReverse ? "md:flex-row-reverse" : ''} flex md:flex-row flex-col justify-between items-center -mx-4`}>
                    <div className="w-full md:w-1/2 px-4">
                        <Image src={props.ImagePath} alt='' height='529' width='536' className={`${props.shouldReverse ? "md:float-right" : ''} imgMH`} />
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <div className={`${props.shouldReverse ? "md:float-right" : ''} md:max-w-2xl`}>
                            <h1 className='font-montserrat text-[32px] md:text-[60px] leading-normal mt-5 md:mt-0 font-bold'>{props.title}</h1>
                            <p className={`${lato.className} text-[#707070] text-[18px] max-sm:text-[16px] md:text-[22px] mt-[20px] text-justify`}>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content