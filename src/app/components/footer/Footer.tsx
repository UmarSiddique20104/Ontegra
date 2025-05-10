import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = (props: { isScrollable?: boolean }) => {
	return (
		<div className={`${props.isScrollable && "scrollingSection"}`}>
			<div className="pt-16 mt-4 pb-8 px-5 bg-[#000105]">
				<div className="container mx-auto ">
					<Image
						width={140}
						height={140}
						src="/footer.png"
						alt=""
						className=" min-[1800px]:w-[140px] h-auto w-[80px] footer-icon"
					/>
					<div className="grid grid-cols-12 gap-4 pb-16 mt-8">
						<div className="2xl:col-span-4 md:col-span-6 col-span-12 xl::flex justify-center">
							<div className="w-[90%]">
								<div className="2xl:text-[35px] lg:text-30px text-[25px] text-white font-medium montserrat">
									This is the part where you get in touch and we make amazing
									things happen!
								</div>
								<div className="flex gap-3  mt-8">
									<button className="text-lg md:text-xl md:leading-[32px] font-medium rounded-[28px] px-7 py-2 bg-[#278CB3] font-montserrat text-white">
										<Link href="/contact-us">
										Let’s Do It!
										</Link>
									</button>
								</div>
							</div>
						</div>
						<div className="2xl:col-span-3 md:col-span-6 col-span-12 md:ps-3">
							<div>
								<h5 className="footer-head pb-3 md:mt-0 mt-4">What’s New</h5>
								<div className="mt-4">
									<Link href='/press-release' className="flex gap-x-2">
										<Image
											width={66}
											height={66}
											src="/footer-img-1.png"
											alt=""
											className="footer-img"
										/>
										<div>
											<h6 className="text-[15px] text-white font-montserrat">
												Deyaar FM Rebrands as Ontegra
											</h6>
											<span className="text-[#278CB3] text-[14px] font-montserrat">
												21 March 2024
											</span>
										</div>
									</Link>
								</div>
								{/* <div className="mt-7 flex gap-x-2">
									<Image
										width={66}
										height={66}
										src="/footer-img-2.png"
										alt=""
										className="footer-img"
									/>
									<div>
										<h6 className="text-[15px] text-white font-montserrat">
											Ontegra launches 24/7 AI Helpdesk Alegra
										</h6>
										<h6 className="text-[#278CB3] text-[14px] font-montserrat">
											01 April 2024
										</h6>
									</div>
								</div> */}
							</div>
						</div>
						<div className="2xl:col-span-2 md:col-span-6 col-span-12">
							<div>
								<h5 className="footer-head pb-3 2xl:mt-0 mt-4 text-white mb-5">Quick Links</h5>
								<ul className="space-y-6">
									<li>
										<Link className="text-[15px] font-montserrat leading-5 font-normal text-white hover:text-primary" href='/ontegra'>Ontegra</Link>
									</li>
									<li>
										<Link className="text-[15px] font-montserrat leading-5 font-normal text-white hover:text-primary" href='/services'>Services</Link>
									</li>
									<li>
										<Link className="text-[15px] font-montserrat leading-5 font-normal text-white hover:text-primary" href='/iso-standards'>ISO Standards</Link>
									</li>
									<li>
										<Link className="text-[15px] font-montserrat leading-5 font-normal text-white hover:text-primary" href='/health-safety'>Health and Safety</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="2xl:col-span-3 md:col-span-6 col-span-12 md:ps-3">
							<div className="2xl:w-[75%]">
								<h5 className="footer-head pb-3 2xl:mt-0 mt-4 text-white mb-5">
									Get in Touch
								</h5>

								<ul className="space-y-5">
									<li>
										<Link href='tel:8006683472' className="inline-flex items-center gap-x-3 text-[15px] font-montserrat leading-5 font-normal text-white hover:text-primary">
											<Image width={21} height={21} src="/calling.png" alt="" />
											<span>800 ONTEGRA (6683472)</span>
										</Link>
									</li>
									<li>
										<Link href='mailto:info@ontegra.ae' className="inline-flex items-center gap-x-3 text-[15px] font-montserrat leading-5 font-normal text-white hover:text-primary">
											<Image width={21} height={21} src="/mail.png" alt="" />
											<span>info@ontegra.ae</span>
										</Link>
									</li>
									{/* <li>
										<Link href='' className="inline-flex items-center gap-x-3 text-[15px] font-montserrat leading-5 font-normal text-white hover:text-primary">
											<Image width={21} height={21} src="/whatsapp.png" alt="" />
											<span>+971 800 339227</span>
										</Link>
									</li> */}
									<li>
										<Link href='https://maps.app.goo.gl/Mjoxz79j3jrhmK2Z7' target="_blank" className="inline-flex items-center gap-x-3 text-[15px] font-montserrat leading-5 font-normal text-white hover:text-primary">
											<Image width={21} height={21} src="/location.png" alt="" />
											<span>51 Tower, Business Bay Dubai, UAE</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-4">
					<h6 className="text-[14px] text-white xl:text-center mt-5 font-montserrat">
						Copyright © 2024{" "}
						<span className="text-white font-montserrat">
							Ontegra
						</span>
						. All rights reserved.
					</h6>
					{/* <Image
						width={317}
						height={52}
						src="/footer-link.svg"
						alt=""
						className="md:float-right md:-mt-10 mt-3"
					/> */}
				</div>
			</div>
		</div>
	);
};
