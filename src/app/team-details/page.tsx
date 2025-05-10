"use client";

import React, { useEffect } from 'react'
import "../globals.css";
import TeamDetailsContent from '../components/reuseable/TeamDetailsContent';
import Header from '../components/header/header';
import { Footer } from '../components/footer/Footer';
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
            <section className='pt-16 min-h-screen scrollingSection'>
                <div className="bg-white px-4 pb-5 md:pb-0 lg:px-0">
                    <div className="container mx-auto px-4 py-[150px]">
                        <TeamDetailsContent title='Adnan Jabri'
                            designation={"General Manager"}
                            description='With years of experience and extensive knowledge in the field of facilities management, Jabri has played a crucial role in positioning Deyaar as a frontrunner in the regional FM industry.'
                            description2={"Jabri has been serving Deyaar Facilities Management for over a year. Under his strategic vision, he spearheads the strategic growth of the Facilities Management business of Deyaar, oversees every aspect of building an industry expert team, and promotes aggressive new business developments and strategies to increase profitability and add value to clients, in line with Deyaar’s corporate goals. Jabri brings to the table over 20 years of extensive experience working in senior management roles, financial oversight, bidding, protocol development, and process improvements."}
                            description3={" Prior to joining Deyaar, Jabri held the position of General Manager at MAB Facilities Management, where he was in charge of Jordan and Egypt’s entire P&L management. His responsibilities also entailed service development by employing ERP, CAFM, and client applications. Furthermore, he has also served as the General Manager of SERVEU LLC and FITOUT LLC, two fully owned subsidiaries of Union Properties. Throughout his career, Jabri has held senior finance and advisory positions in a number of multinational organisations, including Kingdom Hotel Investments, Majid Al Futtaim Group, and Arthur Andersen & EY in Dubai."}
                            imageUrl='/AdnanJabri.png' buttonTitle='Discover Our Legacy'
                        />
                    </div>
                </div>
            </section>
            {/* <Footer isScrollable /> */}
        </section >

    )
}
export default Page;