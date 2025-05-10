"use client";

import React, { useEffect } from 'react'

const Counter = (props: { shouldCount: boolean, countTill: number, title: string, isMillion?: boolean, description: string }) => {
    const [state, setState] = React.useState<string>("0");

    useEffect(() => {
        const runningCounter = () => {
            const step = props.countTill / 100;
            let currentCount = 0;

            const updateCounter = () => {
                currentCount += step;

                if (currentCount >= 1000) {
                    setState(Math.round(currentCount).toLocaleString());
                } else {
                    setState(Math.round(currentCount).toString());
                }

                if (currentCount < props.countTill) {
                    setTimeout(updateCounter, 30);
                }
            };

            updateCounter();
        };
        if (props.shouldCount) {
            runningCounter();
        }
    }, [props.countTill, props.shouldCount]);
    return (
        <div className="lg:w-[24%] md:w-[50%] text-center lg:mt-0 md:mt-10">
            <h2 className='font-montserrat font-semibold  text-3xl  md:text-[30px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] 3xl:text-[50px]   !leading-normal   text-white'>{state}{props.isMillion && "M"}+</h2>
            <p className='font-montserrat font-normal text-lg  md:text-[20px] lg:text-[24px] xl:text-[24px] 2xl:text-[24px] 3xl:text-[50px] !leading-normal text-white'>{props.title}</p>
            <p className='text-[#696969] font-medium text-[18px] font-montserrat mt-5 md:mt-[60px]'>{props.description}</p>
        </div>
    )
}

export default Counter;