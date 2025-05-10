import React from 'react'

const   InputField = (props: { label: string, type: string, isTextArea?: boolean }) => {
    return (
        <div>
            <label className='font-montserrat text-[15px] font-medium'>{props.label}</label>
            {
                !props.isTextArea ? <input type={props.type} className='font-montserrat outline-none font-normal py-2 text-[28px]  px-3 text-base w-full bg-white border-0 text-black 3xl:p-4 2xl:p-2 xl:p-1 md:py-2 lg:py-0' /> : 
                
                <textarea className='!w-full 3xl:h-[250px] 2xl:h-[220px] xl:h-[140px] h-[250px]  font-montserrat font-normal py-2 text-[22px]  bg-white border-0 outline-none text-black px-3 3xl:p-4 2xl:p-2 xl:p-1' />
            }
        </div>
    )
}

export default InputField;