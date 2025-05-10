import React from 'react'

const   InputField = (props: { label: string, type: string, isTextArea?: boolean }) => {
    return (
        <div>
            <label className='font-montserrat text-[15px] font-medium'>{props.label}</label>
            {
                !props.isTextArea ? <input type={props.type} className='font-montserrat font-normal text-base w-full bg-white border-0 text-black 3xl:p-4 2xl:p-2 xl:p-1 md:py-4 max-sm:py-3 sm:py-3 lg:py-0' /> : <textarea className='!w-full md:h-[200px] 3xl:h-[250px] 2xl:h-[220px] xl:h-[140px] resize-none font-montserrat font-normal text-base bg-white border-0 text-black 3xl:p-4 2xl:p-2 xl:p-1' />
            }
        </div>
    )
}

export default InputField;