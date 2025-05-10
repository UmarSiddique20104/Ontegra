import React from 'react'

const Button = (props: { title: string }) => {
    return (
        <button className='bg-[#278CB3] lg:px-4 lg:py-2 xl:px-7 xl:py-4 3xl:w-[200px] 2xl:w-[150px] xl:w-[130px] lg:w-[120px] w-fit px-4 py-2 text-white border-[#278CB3] border rounded-full hover:bg-transparent hover:text-black transition-all duration-150 font-montserrat uppercase ease-in'>{props.title}</button>
    )
}

export default Button;