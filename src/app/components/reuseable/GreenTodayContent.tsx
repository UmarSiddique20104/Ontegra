import { lato } from "@/app/components/fonts/fonts";
import React from "react";

const GreenTodayContent = (props: {
    title: string;
    title1?: string;
    title2?: string;
    description: string;
    buttonTitle: string;
    imageUrl: string;
    shouldReverse?: boolean;
}) => {
    // Function to wrap specific text in the description with the desired color
    const formatDescription = (description: string) => {
        // Replace "net-zero carbon" with span having custom color
        return description.replace(
            "net-zero carbon",
            "<span style='color: #3C8E07'>net-zero carbon</span>"
        );
    };

    return (
        <section className="h-full">
            <div
                className={`flex flex-col justify-between items-start md:items-center 2xl:pt-[240px] md:pt-[120px] ${props.shouldReverse ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
            >
                <div className="md:w-2/5 lg:w-1/3 greenMainImg">
                    <img src={props.imageUrl} alt="elevating standards" className="max-lg:w-80" />
                </div>
                <div
                    className={`greenContent ${props.shouldReverse ? "md:w-3/5 lg:w-2/3" : "md:w-3/5 lg:w-2/3"
                        } pt-5 md:pt-0`}
                >
                    <h1
                        className={`font-montserrat text-[#000] font-semibold uppercase italic md:text-[40px] lg:text-[37px] text-[24px] md:max-w-[95%]`}
                    >
                        {props.title1}
                    </h1>

                    {props?.title2 && (
                        <h1
                            className={`font-montserrat text-[#3C8E07] font-bold md:text-[40px] lg:text-[50px] xl:text-[80px] text-[24px] md:max-w-[95%]`}
                        >
                            {props.title2}
                        </h1>
                    )}
                    <h1 className="font-montserrat font-bold md:text-[40px] lg:leading-[70px] lg:text-[80px] text-[24px] md:max-w-[95%]">
                        {props.title}
                    </h1>
                    <p
                        className={`${lato.className} xl:w-[70%] lg:w-[100%] md:leading-[40px] leading-[35px] text-[#707070] text-[22px] md:text-[22px] max-sm:text-[18px] mt-5 md:mt-[30px]`}
                        dangerouslySetInnerHTML={{
                            __html: formatDescription(props.description),
                        }}
                    ></p>
                    {/* <button className="animateButton block w-fit hover:bg-transparent border border-black  hover:text-black mt-[30px] bg-black rounded-full px-5 py-[7px] font-normal font-montserrat text-white">
                        {props.buttonTitle}
                    </button> */}
                </div>
            </div>
        </section>
    );
};

export default GreenTodayContent;
