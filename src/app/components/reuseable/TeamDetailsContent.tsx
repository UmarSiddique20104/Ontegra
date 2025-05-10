import { lato } from '@/app/components/fonts/fonts';
import React from 'react'

const TeamDetailsContent = (props: { title: string, designation: String, description: string, description2: string, description3: string, buttonTitle: string, imageUrl: string, shouldReverse?: boolean }) => {
    return (
        <section>
            <div className={`flex flex-col justify-between ${props.shouldReverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                <div className="lg:w-[33%]">
                    <img src={props.imageUrl} alt="elevating standards" className='max-w-full' />
                </div>
                <div className={`${props.shouldReverse ? "lg:w-[53%]" : "lg:w-[57%]"} mt-5 md:mt-0`}>
                    <h1 className='font-montserrat font-bold md:text-[40px] leading-[65px]  lg:text-[57px] text-[24px] md:max-w-[95%] max-md:leading-[40px] max-sm:pb-4'>{props.title}</h1>
                    <p className={`font-montserrat md:leading-[40px] leading-[35px] text-[#278CB3] text-[18px] font-medium md:text-[26px]`}>{props.designation}</p>
                    <p className={`font-montserrat md:leading-[40px] leading-[35px] text-[#A8A8A8] text-[14px] md:text-[18px] md:mt-[40px]`}>{props.description}</p>
                    <p className={`font-montserrat md:leading-[40px] leading-[35px] text-[#A8A8A8] text-[14px] md:text-[18px] md:mt-[40px] `}>{props.description2}</p>
                    <p className={`font-montserrat md:leading-[40px] leading-[35px] text-[#A8A8A8] text-[14px] md:text-[18px] md:mt-[40px] `}>{props.description3}</p>
                    {/* <div className='flex items-center flex-wrap gap-10 mt-5'>
                        <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                            <path d="M22.0648 17.9551C21.7593 17.6139 20.8197 16.7633 20.147 16.2566C19.4866 15.7375 18.4048 15.0352 17.9835 14.8177C17.2953 14.4598 16.2585 14.4999 15.6143 14.9326C15.085 15.301 14.5947 15.7226 14.1513 16.191L14.1416 16.2011C13.6414 16.7296 12.8321 16.8181 12.2295 16.4102C11.1324 15.6621 10.1085 14.812 9.17135 13.8711C8.23054 12.934 7.3804 11.9101 6.63228 10.813C6.2244 10.2104 6.31291 9.40106 6.84141 8.90086L6.85153 8.89118C7.31984 8.44776 7.74148 7.95752 8.10984 7.42814C8.54263 6.78402 8.5827 5.74717 8.22475 5.05902C8.00726 4.63811 7.30502 3.55767 6.78593 2.8955C6.27873 2.22276 5.42856 1.28321 5.08735 0.977656C4.5304 0.475741 3.58953 0.344979 2.93308 0.702483C2.38167 1.01564 1.86511 1.38653 1.39211 1.8089L1.34236 1.85292C-1.55994 4.34973 0.350856 11.3189 6.04143 16.9984C11.7241 22.6899 18.6914 24.602 21.1882 21.6997L21.2323 21.6499C21.6548 21.1771 22.0257 20.6605 22.3387 20.109C22.6975 19.453 22.5667 18.5121 22.0648 17.9551Z" fill="black" />
                        </svg>
                        <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none">
                            <path d="M14.1699 12.0753C13.5658 12.478 12.8642 12.6909 12.1407 12.6909C11.4173 12.6909 10.7156 12.478 10.1115 12.0753L0.16167 5.44183C0.106468 5.40501 0.0526887 5.36665 0 5.32721V16.1968C0 17.443 1.01133 18.432 2.23526 18.432H22.0461C23.2923 18.432 24.2813 17.4207 24.2813 16.1968V5.32715C24.2286 5.3667 24.1747 5.40515 24.1193 5.442L14.1699 12.0753Z" fill="black" />
                            <path d="M0.950863 4.25832L10.9007 10.8918C11.2773 11.1429 11.709 11.2684 12.1406 11.2684C12.5724 11.2684 13.0041 11.1429 13.3807 10.8918L23.3305 4.25832C23.9259 3.86162 24.2814 3.19767 24.2814 2.48109C24.2814 1.24895 23.279 0.246582 22.0469 0.246582H2.2345C1.00241 0.24662 0 1.24899 0 2.48227C0 3.19767 0.355495 3.86162 0.950863 4.25832Z" fill="black" />
                        </svg>
                        <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path d="M19.4955 0.00683594H7.01783C3.56064 0.00683594 0.739258 2.82822 0.739258 6.28541V18.783C0.739258 22.2203 3.56064 25.0417 7.01783 25.0417H19.5154C22.9726 25.0417 25.7939 22.2203 25.7939 18.7631V6.28541C25.7741 2.82822 22.9527 0.00683594 19.4955 0.00683594ZM9.0842 20.2731H5.50779V9.94129H9.0842V20.2731ZM7.27613 8.35178C6.26281 8.35178 5.44819 7.53715 5.44819 6.52384C5.44819 5.51052 6.26281 4.6959 7.27613 4.6959C8.28944 4.6959 9.10407 5.51052 9.10407 6.52384C9.0842 7.53715 8.26957 8.35178 7.27613 8.35178ZM21.0254 20.2731H21.0055H18.0252V15.2662C18.0252 14.0542 17.8663 12.5044 16.2171 12.5044C14.5283 12.5044 14.2501 13.8157 14.2501 15.1867V20.2731H11.2698V9.94129H14.0514V11.3321H14.1309C14.568 10.5374 15.5813 9.92142 17.1708 9.92142C20.4492 9.92142 21.0254 11.809 21.0254 14.6105L21.0254 20.2731Z" fill="black" />
                        </svg>
                    </div> */}
                </div>

            </div>
        </section>
    )
}

export default TeamDetailsContent;
