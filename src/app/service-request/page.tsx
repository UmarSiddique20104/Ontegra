"use client";

import React from 'react'
// import { Footer } from '@/app/components/footer/Footer';
import Header from '../components/header/header';
import "../globals.css";
import Link from 'next/link';
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BsTelephone } from "react-icons/bs";
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Select, { SingleValue } from "react-select";
import { COUNTRIES } from './countries';

// import CallingIcon from 'calling.png';
import Image from 'next/image';


const ContactUs = () => {
	type OptionValue = {
		value: string;
		label: string;
	};
	type FormData = {
		name: string,
		email: string,
		phone: string,
		country: SingleValue<OptionValue>,
		message: string,
		building : string,
		location : string
	}
	// const reCaptchaKey = "6Lc-qNUpAAAAAATV1RlcxyVs5zG3P9Vrlo7tof68";
	const reCaptchaKey = "6LcavtYpAAAAAJKMw5ZIZUnlYAAAhXZ0opfG5REy";
	const [captchaValue, setCaptchaValue] = useState(null);
	const [phone, setPhone] = useState('');
	const [selectedCountry, setSelectedCountry] = useState<SingleValue<OptionValue>>({"value": "AE", "label": "United Arab Emirates"});
	const [submitStatusError, setSubmitStatusError] = useState<string>('');
	const [submitStatusSuccess, setSubmitStatusSuccess] = useState<string>('');
	const [submitting, setSubmitting] = useState(false);

	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		phone: '',
		country: {value: "Air Conditioning", label: "Air Conditioning"},
		message: '',
		building: "",
		location:""
	});

	const handleCaptchaChange = (value: any) => {
		setCaptchaValue(value);
	};

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handlePhoneChange = (value: string) => {
		setFormData({ ...formData, phone: value });
	};

	const handleCountryChange = (option: SingleValue<OptionValue>) => {
		setFormData({ ...formData, country: option });
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setSubmitting(true);
		setSubmitStatusSuccess('');
		setSubmitStatusError('');

		try {
			if (!captchaValue) {
				setSubmitStatusError('Please complete the captcha.');
				setSubmitting(false);
				return;
			}

			if (formData.phone == '') {
				setSubmitStatusError('Please enter a valid phone.');
				setSubmitting(false);
				return;
			}

			const formDatas = new FormData();
			formDatas.append('name', formData.name);
			formDatas.append('email', formData.email);
			formDatas.append('phone', formData.phone);
			formDatas.append('serviceType', formData.country?.label || 'Air Conditioning');
			formDatas.append('message', formData.message);
			formDatas.append('location', formData.location);
			formDatas.append('buildingNo', formData.building);

			const response = await fetch('/api/send-email-service', {
				method: 'POST',
				body: formDatas,
			});
			console.log(response);
			if (response.ok) {
				setSubmitStatusSuccess('Thank you for contacting us!');
				setSubmitting(false);
				setFormData({
					name: '',
					email: '',
					phone: '',
					country: {value: "Air Conditioning", label: "Air Conditioning"},
					message: '',
					building : "",
					location:""
				});
			} else {
				// throw new Error('Failed to send email');
				setSubmitting(false);
				setSubmitStatusError('Failed to send email. Please try again later.');
			}
		} catch (error: any) {
			console.error('Error sending email:', error.message);
			setSubmitting(false);
			setSubmitStatusError('Failed to send email. Please try again later.');
		}
	};

	return (
		<section className='bg-white'>
			<Header color={true} />
			<section className='min-h-screen pt-40'>
				<div className="bg-white">
					<div className='contactInfo relative z-10'>
						<div className="container mx-auto px-4">
							<div className="xl:flex -mx-4">
								<div className="px-4">
									<h1 className='font-montserrat font-bold text-black text-3xl md:text-5xl lg:text-6xl xl:text-[80px] xl:leading-[89px] -tracking-[0.96px] lg:mb-[70px] md:mb-9 mb-5'>REQUEST FOR SERVICE</h1>

									<div className="md:flex mt-4 md:mt-10">
										<div className="md:w-3/5 px-6 lg:pl-10 lg:pr-28 py-10 bg-[#EDEDED]">
											<div className="contact-form">
												<form onSubmit={handleSubmit}>
													<div className="sm:flex sm:flex-wrap -mx-3">
														<div className="sm:w-1/2 px-3 mb-7">
															<label htmlFor="name" className='flex items-center gap-2 text-black font-montserrat font-medium text-base leading-5 mb-2 uppercase'>Your Name <span className=' text-red-600 font-bold text-xl h-5'>*</span></label>
															<input type="text" id='name' value={formData.name} name='name' required
																onChange={handleChange} className="border border-transparent rounded-none bg-white px-4 py-1 h-10 w-full focus:border-primary focus:outline-none focus:ring-0 input" />
														</div>
														<div className="sm:w-1/2 px-3 mb-7">
															<label htmlFor="phone" className='flex items-center gap-2 text-black font-montserrat font-medium text-base leading-5 mb-2 uppercase'>Your Phone Number <span className=' text-red-600 font-bold text-xl h-5'>*</span></label>
															<PhoneInput country={'ae'} value={formData.phone} onChange={handlePhoneChange} inputProps={{ id: 'phone', name: 'phone', required: true }} 
															inputClass='border !border-transparent !rounded-none bg-white px-4 py-1 !h-10 !w-full !focus:border-primary !focus:outline-none !focus:ring-0 input' />
														</div>
														<div className="sm:w-1/2 px-3 mb-7">
															<label htmlFor="email" className='flex items-center gap-2 text-black font-montserrat font-medium text-base leading-5 mb-2 uppercase'>Your Email <span className=' text-red-600 font-bold text-xl h-5'>*</span></label>
															<input type="email" id='email' value={formData.email} name='email' required
																onChange={handleChange} className="border border-transparent rounded-none bg-white px-4 py-1 h-10 w-full focus:border-primary focus:outline-none focus:ring-0 input" />
														</div>
														
														<div className="sm:w-1/2 px-3 mb-7">
															<label htmlFor="building" className='flex items-center gap-2 text-black font-montserrat font-medium text-base leading-5 mb-2 uppercase'>Your Building (BIN NO) <span className=' text-red-600 font-bold text-xl h-5'>*</span></label>
															<input type="text" id='building' value={formData.building} name='building' required
																onChange={handleChange} className="border border-transparent rounded-none bg-white px-4 py-1 h-10 w-full focus:border-primary focus:outline-none focus:ring-0 input" />
														</div>
														<div className="sm:w-1/2 px-3 mb-7">
															<label htmlFor="location" className='flex items-center gap-2 text-black font-montserrat font-medium text-base leading-5 mb-2 uppercase'>Your Location <span className=' text-red-600 font-bold text-xl h-5'>*</span></label>
															<input type="text" id='location' value={formData.location} name='location' required
																onChange={handleChange} className="border border-transparent rounded-none bg-white px-4 py-1 h-10 w-full focus:border-primary focus:outline-none focus:ring-0 input" />
														</div>
														<div className="sm:w-1/2 px-3 mb-7">
															<label htmlFor="country" className='flex items-center gap-2 text-black font-montserrat font-medium text-base leading-5 mb-2'>Service Type <span className=' text-red-600 font-bold text-xl h-5'>*</span></label>
															<Select
																options={COUNTRIES}
																value={formData.country}
																onChange={handleCountryChange}
																styles={{
																	control: (baseStyles, state) => ({
																		...baseStyles,
																		border: state.isFocused ? 'none' : 'none',
																		borderRadius: state.isFocused ? '0' : '0',
																	  }),
																}}
																required
																name='country'
																className='border !border-transparent rounded-none bg-white h-10 w-full focus:border-primary focus:outline-none focus:ring-0 input'
																
															/>
														</div>
														<div className="sm:w-full px-3">
															<label htmlFor="message" className='flex items-center gap-2 text-black font-montserrat font-medium text-base leading-5 mb-2'>Description of issue <span className=' text-red-600 font-bold text-xl h-5'>*</span></label>
															<textarea value={formData.message} name="message" required
																onChange={handleChange} id="message" cols={30} rows={4} className="border border-transparent rounded-none bg-white px-4 py-1 h-28 w-full focus:border-primary focus:outline-none focus:ring-0 input resize-none"></textarea>
														</div>
													</div>
													<ReCAPTCHA
														sitekey={reCaptchaKey}
														onChange={handleCaptchaChange}
													/>

													{submitStatusError && <p className="mt-4 text-md text-red-600">{submitStatusError}</p>}
													{submitStatusSuccess && <p className="mt-4 text-md text-teal-500">{submitStatusSuccess}</p>}


													<div className="mt-9">
														{submitting ?
															<button type='submit' className="flex items-center border-2 rounded-none px-6 py-2 bg-gray-400 text-white font-montserrat font-medium text-base leading-5">
																Submit <img className='w-12 h-8' src="/loading-unscreen.gif" alt="" />
															</button>
															:
															<button type='submit' className="border-2 border-primary rounded-none px-6 py-2 bg-primary text-white hover:bg-white hover:text-primary transition-colors duration-300 font-montserrat font-medium text-base leading-5">
																Submit
															</button>}
													</div>
												</form>

											</div>
										</div>

										<div className="md:w-2/5 bg-primary">
											<div className="py-10 px-6 lg:px-20">
												<h5 className="font-montserrat text-2xl font-medium text-white mb-9">Contact Information</h5>
												<ul className='space-y-7 sm:space-y-9'>
													<li>
														<Link href="tel:8006683472" className='font-montserrat text-base font-normal text-white no-underline hover:underline hover:opacity-80 flex items-center gap-4'>
															<Image src='/calling.png' alt='CallingIcon' width={21} height={21} />
															800 ONTEGRA (6683472)
														</Link>
													</li>
													<li>
														<Link href="mailto:Info@ontegra.ae" className='font-montserrat text-base font-normal text-white no-underline hover:underline hover:opacity-80 flex items-center gap-4'>
															<Image src='/mail.png' alt='MailIcon' width={21} height={21} />
															Info@ontegra.ae
														</Link>
													</li>
													<li>
														<div className='grid grid-cols-1 sm:grid-cols-2 gap-7'>
															<div className='address flex flex-col'>
																<Image src='/location.png' alt='LocationIcon' width={21} height={21} className='mb-3' />
																<h5 className='self-start pb-5 mb-5 font-montserrat text-base font-semibold text-white border-b border-solid border-b-[#E2E2E2]'>Dubai Office</h5>

																<Link href='https://maps.app.goo.gl/Mjoxz79j3jrhmK2Z7' target='_blank' className='font-montserrat text-base font-normal text-white no-underline hover:underline hover:opacity-80'>51 Tower, Business Bay Dubai, UAE</Link>
															</div>
															<div className='address flex flex-col'>
																<Image src='/location.png' alt='LocationIcon' width={21} height={21} className='mb-3' />
																<h5 className='self-start pb-5 mb-5 font-montserrat text-base font-semibold text-white border-b border-solid border-b-[#E2E2E2]'>Abu Dhabi Office</h5>

																<Link href='https://maps.app.goo.gl/AMZdqUYNbE1uRzec6' target='_blank' className='font-montserrat text-base font-normal text-white no-underline hover:underline hover:opacity-80'>Mussafah, M25, M floor M8 office Abu Dhabi, UAE</Link>
															</div>
														</div>
													</li>
												</ul>

											</div>
										</div>

									</div>

								</div>
							</div>
						</div>
					</div>

					<div className='map -mt-64'>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.3960139561837!2d55.284438200000004!3d25.1898642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6824e717ab0d%3A0x458fafee437122fb!2sFifty%20One%20Tower%20-%20Marasi%20Dr%20-%20Business%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1712212491955!5m2!1sen!2s" width="100%" height="500" style={{ border: '0' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
			</section>
			{/* <Footer /> */}
		</section >

	)
}
export default ContactUs;
