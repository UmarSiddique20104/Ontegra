import Link from 'next/link'
import React from 'react'

export const Topbar = () => {
	return (
		<div className='bg-black py-3 relative z-10 w-full'>
			<div className='container mx-auto px-4'>
				<div className="flex flex-col justify-center md:justify-between md:flex-row gap-4">
					<div className='topbar-left'>
						<ul className='flex justify-center max-sm:flex-col max-sm:text-center gap-4 md:space-x-14 text-white text-base leading-5 font-montserrat font-medium'>
							
							<li className='max-md:hidden'>
								<Link href='tel:8006683472' className='inline-flex space-x-2 items-center text-white hover:text-[#278CB3] fill-white hover:fill-[#278CB3]'>
									<svg xmlns="http://www.w3.org/2000/svg" width="12.586" height="13.504" viewBox="0 0 12.586 13.504"><path d="M12.048,9.4c-.816-.7-1.644-1.12-2.45-.424L9.117,9.4C8.765,9.7,8.111,11.13,5.58,8.219s-1.025-3.36-.672-3.663l.484-.422c.8-.7.5-1.577-.079-2.482L4.964,1.1c-.581-.9-1.213-1.5-2.017-.8L2.513.685a4.076,4.076,0,0,0-1.589,2.7C.634,5.3,1.549,7.5,3.643,9.9s4.141,3.621,6.081,3.6a4.087,4.087,0,0,0,2.891-1.2l.436-.38c.8-.7.3-1.406-.513-2.105Z" transform="translate(-0.872 0)" fill="currenColor" /></svg>
									<span>800 ONTEGRA (6683472)</span>
								</Link>
							</li>
						</ul>
					</div>

					<div className='topbar-right max-md:hidden'>
						<ul className='flex justify-center md:justify-end space-x-5 text-white text-base leading-5 font-montserrat font-medium'>
							<li>
								<Link href='https://www.facebook.com/ontegra.ae' target='_blank' className='text-white hover:text-[#278CB3] fill-white hover:fill-[#278CB3] w-[15px] h-[15px] block'>
									<svg xmlns="http://www.w3.org/2000/svg" width="8.251" height="15.296" viewBox="0 0 8.251 15.296">
										<path d="M30.7,18.734H28.8c-.306,0-.4-.115-.4-.4V16.015c0-.306.115-.4.4-.4h1.9V13.929a4.252,4.252,0,0,1,.517-2.163,3.176,3.176,0,0,1,1.7-1.417,4.259,4.259,0,0,1,1.474-.249h1.876c.268,0,.383.115.383.383v2.182c0,.268-.115.383-.383.383-.517,0-1.034,0-1.551.019a.691.691,0,0,0-.785.785c-.019.574,0,1.129,0,1.723h2.221c.306,0,.421.115.421.421v2.316c0,.306-.1.4-.421.4H33.932v6.241c0,.325-.1.44-.44.44H31.1c-.287,0-.4-.115-.4-.4Z" transform="translate(-28.4 -10.1)" fill="currenColor" />
									</svg>
								</Link>
							</li>
							<li>
								<Link href='https://www.instagram.com/ontegra.ae/' target='_blank' className='text-white hover:text-[#278CB3] fill-white hover:fill-[#278CB3] w-[15px] h-[15px] block'>
									<svg xmlns="http://www.w3.org/2000/svg" width="13.78" height="13.78" viewBox="0 0 13.78 13.78">
										<g transform="translate(0 0)">
											<path d="M23.357,20.83a2.529,2.529,0,1,0,2.53,2.527A2.529,2.529,0,0,0,23.357,20.83Z" transform="translate(-16.468 -16.467)" fill="currenColor" />
											<path d="M15.7,5H8.076A3.08,3.08,0,0,0,5,8.076V15.7A3.079,3.079,0,0,0,8.076,18.78H15.7A3.077,3.077,0,0,0,18.78,15.7V8.076A3.079,3.079,0,0,0,15.7,5ZM11.89,16.354a4.463,4.463,0,1,1,4.465-4.465A4.471,4.471,0,0,1,11.89,16.354Zm4.558-8.116a.944.944,0,1,1,.945-.943A.944.944,0,0,1,16.448,8.238Z" transform="translate(-5 -5)" fill="currenColor" />
										</g>
									</svg>
								</Link>
							</li>
							<li>
								<Link href='https://www.linkedin.com/company/deyaar-facilities-management/' target='_blank' className='text-white hover:text-[#278CB3] fill-white hover:fill-[#278CB3] w-[15px] h-[15px] block'>
									<svg xmlns="http://www.w3.org/2000/svg" width="13.554" height="13.78" viewBox="0 0 13.554 13.78">
										<path d="M12.2,0H1.355A1.371,1.371,0,0,0,0,1.378V12.4A1.371,1.371,0,0,0,1.355,13.78H12.2A1.371,1.371,0,0,0,13.554,12.4V1.378A1.371,1.371,0,0,0,12.2,0ZM4.066,11.713H2.033v-6.2H4.066ZM3.05,4.341A1.24,1.24,0,1,1,4.27,3.1,1.225,1.225,0,0,1,3.05,4.341Zm8.471,7.372H9.488V8.061a1.017,1.017,0,1,0-2.033,0v3.652H5.422v-6.2H7.455v.827a2.181,2.181,0,0,1,1.694-.965,2.421,2.421,0,0,1,2.372,2.411Z" fill="currenColor" />
									</svg>
								</Link>
							</li>
							<li>
								<Link href='https://x.com/ontegra' target='_blank' className='text-white hover:text-[#278CB3] fill-white hover:fill-[#278CB3] w-[15px] h-[15px] block'>
									<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
										<g transform="translate(-0.116 0.059)">
											<rect width="14" height="14" rx="1" transform="translate(0.116 -0.059)" fill="currenColor" />
											<g transform="translate(2.114 2.114)">
												<path d="M483.965,356.79l4.021,5.376-4.046,4.371h.911l3.542-3.827,2.862,3.827h3.1l-4.247-5.678,3.766-4.069h-.911l-3.262,3.524-2.636-3.524Zm1.339.671h1.424l6.286,8.405h-1.424Z" transform="translate(-483.94 -356.79)" fill='#000' />
											</g>
										</g>
									</svg>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
