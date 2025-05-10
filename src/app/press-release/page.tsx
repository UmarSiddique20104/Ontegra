"use client";

import React, { useEffect } from 'react'
import "../globals.css";
import Header from '../components/header/header';
import { Footer } from '../components/footer/Footer';
import Image from 'next/image';
const Page: React.FC = () => {
	const [shouldStartCount, setShouldStartCount] = React.useState<boolean>(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 1000) {
				setShouldStartCount(true);
			} else {
				setShouldStartCount(false);
			}
		};

		// Attach event listener for scroll
		window.addEventListener('scroll', handleScroll);

		// Remove event listener on component unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<section className='bg-white'>
			<Header color={true} />
			<section className='pt-16'>
				<div className="bg-white pb-5 md:pb-0">
					<div className="container mx-auto px-4 3xl:py-[150px] lg:pt-[100px] pt-20 lg:pb-10">

						<div className='mx-auto max-w-3xl'>
							<div className='post-img mb-10'>
								<Image
									src='/rofontegra.jpg'
									width={640}
									height={426}
									className='w-full h-auto'
									alt=''
								/>
							</div>

							<div className='post-content-wrapper'>
								<h1 className='font-montserrat font-bold text-black text-3xl md:text-4xl mb-5'>{`Deyaar Facilities Management unveils new brand identity ‘Ontegra’ to embrace tech-driven future`}</h1>

								<p className="font-montserrat font-medium text-primary text-base md:text-xl mb-8">{`Company also revealed its plans to launch two voice-based AI-powered assistants, 'Techi' and 'Alegra’`}</p>

								<small className="font-montserrat font-medium text-black text-xs">March 21, 2024</small>

								<div className='post-content text-justify [&_p]:font-montserrat [&_p]:text-[#A8A8A8] [&_p]:text-base [&_p]:md:text-xl [&_p]:!leading-normal [&_p]:py-2.5 [&_strong]:text-black'>
									<p>{`Dubai: Deyaar Facilities Management, a leading facility management (FM) solutions provider and subsidiary of Deyaar Development PJSC, has announced its rebranding as 'Ontegra' to embark on a progressive future towards integrated, technology-driven solutions in the FM industry. This strategic move aligns with the group’s commitment to enhancing operational excellence and setting higher standards through innovation and sustainability.`}</p>
									<p>{`In conjunction with its new brand identity, Ontegra will introduce new services, with stronger emphasis on utilising artificial intelligence to digitise the company's service delivery. Additionally, Ontegra is transitioning to a Microsoft-based system, highlighting its commitment to research and development. With the help of direct insights into shifts in consumer demand, the company will be better equipped to deliver customer-centric products and services.`}</p>
									<p>{`The term ‘Ontegra,’ which is a combination of the words ‘Onward’ and ‘Integration,’ denotes the fusion of cutting-edge technology with a commitment to operational excellence. This aligns with the company’s commitment to SMART (Sustainable, Methodical, Agile, Reliable, Technology-driven) principles and goals of utilising AI and technology to improve customer experiences, and guarantee sustainable asset and building management.`}</p>
									<p>{`Along with the new brand identity, the company also revealed its plans to introduce two new voice-based AI-powered assistants 'Techi' and 'Alegra’ built on OpenAI’s ChatGPT in the coming months. Techi is an in-house, multilingual operations assistant that can mimic human conversations and perform a variety of tasks like scheduling appointments, preparing quotes, generating invoices, and more. Similarly, Alegra, offers AI-powered customer support, seamlessly substituting for a conventional help desk representative to provide prompt and effective customer service. With revolutionary products designed to set new standards in the Facilities Management space, Ontegra reiterates its commitment to fully digitising internal and help desk operations, and leading the industry in digital transformation.`}</p>
									<p>{`Saeed Mohammed Al Qatami, Chief Executive Officer of Deyaar Development, said: “The rebranding of our facilities management arm to Ontegra marks a pivotal transition for Deyaar. We are heading into a new era and are firmly focused on harnessing the power of AI and cutting-edge technologies to help us transform our operational efficiency and service delivery. Today, embracing the power of digital transformation is non-negotiable – it will take us into the future, enabling us to meet the dynamic needs of our customers in a more integrated manner. This strategic rebranding and the introduction of innovative services are just the beginning. With Ontegra, we are charting a course towards a future where our operations are more sustainable, our methodologies more agile, and our services more aligned with the expectations of a digital world.”`}</p>
									<p>{`Adnan Jabri, General manager of Ontegra, stated, “We are delighted to be making this strategic shift as Deyaar Facilities Management transforms into Ontegra for a new future. The vision of seamless integration of machine learning and artificial intelligence into our core business processes marks a significant milestone in this forward-looking journey. This transformation is a major undertaking that impacts every aspect of the business, from internal operations to customer relations, and is far more than a simple, strategic decision.”`}</p>
									<p>{`“In keeping with global standards, we have committed ourselves to implementing cutting-edge technologies that will transform customer experiences and enhance overall productivity, efficiency and sustainability. As a result, Ontegra is well positioned to lead innovation with its revolutionary services and vision for a future where technology and operational excellence merge to reshape the Facilities Management landscape."`}</p>
									<p>{`Facility management services in UAE have matured to the point where advanced robotics, hardware, and software technologies are crucial to its further success. As a proud member of the Deyaar Group, Ontegra ensures that clients continue to receive exceptional service with these technologies and stands prepared to meet emerging challenges, solidifying its position as an innovator in the shifting landscape of facilities management.`}</p>
									<p>{`-Ends-`}</p>
									<p><strong>{`About Deyaar`}</strong></p>
									<p>{`Deyaar Development PJSC is a leading real-estate developer and real-estate services company, headquartered in Dubai. Since its establishment in 2002, the company has registered exponential growth to become an industry leader in the region, with a share capital of AED4.38 billion.`}</p>
									<p>{`Deyaar is well-positioned to play a pivotal role in the development of the region's property landscape. The company’s in-depth market intelligence, world-class services, and unrivalled property management support for communities across diverse portfolios have firmly consolidated its pioneering status in the region’s real estate landscape.`}</p>
									<p>{`Combining excellence with a vision to create natural living environments while placing customers at the core of its strategies, Deyaar serves as a one-stop real estate solutions provider. Under this profile, its scope includes the delivery of end-to-end property development and property management services across the UAE.`}</p>
									<p><strong>{`About Ontegra`}</strong></p>
									<p>{`In the ever-evolving field of facilities management, Ontegra has emerged as a market leader and innovator, carrying on the rich and long-standing legacy of Deyaar Facilities Management. The company offers comprehensive facilities management solutions for retail, commercial, and real estate projects in the UAE. Ontegra currently oversees 1000 properties and 20,000 units in the country. The company has over two decades of expertise backed by Deyaar Development’s strength. In 2007, Ontegra started operating as a division of the Deyaar Development PJSC Group. The firm remains committed to fostering sustainability and aims to achieve net-zero carbon footprint by 2030. By utilising AI, machine learning, and best-in-class IT technologies, the company is radically transforming FM operations and improving customer experiences.`}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <Footer isScrollable /> */}
		</section >

	)
}
export default Page;