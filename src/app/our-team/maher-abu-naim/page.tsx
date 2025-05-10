"use client";

import React, { useEffect } from 'react'
import "../../globals.css";
import TeamDetailsContent from '../../components/reuseable/TeamDetailsContent';
import Header from '../../components/header/header';
import { Footer } from '../../components/footer/Footer';
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
                <div className="bg-white px-4 pb-5 md:pb-0 lg:px-0">
                    <div className="container mx-auto px-4 3xl:py-[150px] lg:pt-[100px] pt-20 lg:pb-10">
                        <TeamDetailsContent title='Maher Abu Naim'
                            designation={"Security Manager"}
                            description="With over a decade in security management, including pivotal roles during Expo 2020, Maher leads Ontegra's security strategies and team training with expertise and precision."
                            description2={""}
                            description3={""}
                            imageUrl='/team/MaherAbuNaim.jpg' buttonTitle='Discover Our Legacy'
                        />
                    </div>
                </div>
            </section>
            {/* <Footer isScrollable /> */}
        </section >

    )
}
export default Page;