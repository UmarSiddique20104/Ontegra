import React from 'react'

const ContentCard = (props: { scrollTo?: boolean, customClass?: string, edition: string, title: string, description: string, }) => {
    return (
        <div className={`${props.scrollTo && "scrollingSection"} 2xl:w-[32.6%] lg:w-[32%] max-sm:w-[100%] text-center max-sm:my-3 mt-10 md:mt-0 bg-[#F0F0F0] pt-[40px] pb-[35px] px-[40px]`}>
            <h3 className={`${props.customClass} text-[#CD1338] font-montserrat font-semibold text-[26px]`}>{props.edition}</h3>
            <h3 className='font-montserrat font-semibold text-[18px] 2xl:text-[26px] lg:max-w-[82%] mx-auto'>{props.title}</h3>
            <p className='text-[#707070] max-sm:text-[16px] xl:text-[16px] 2xl:text-[18px] font-lato font-normal mt-5 lg:text-[13px] xl:mt-10 leading-[29px]'>{props.description}</p>
        </div>
    )
}

export default ContentCard;