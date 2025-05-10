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
            <section className='pt-16 min-h-screen scrollingSection'>
                <div className="bg-white px-4 pb-5 md:pb-0 lg:px-0">
                    <div className="container mx-auto px-4 py-[150px]">
                        <TeamDetailsContent title='Adnan Jabri'
                            designation={"General Manager"}
                            description='In the realm of facilities management, Ontegra stands as a beacon of progress and innovation. Our transformation from Deyaar Facilities Management to Ontegra is not just a rebranding but a reaffirmation of our commitment to pioneering the future of our industry.'
                            description2={""}
                            description3={""}
                            imageUrl='/team/AdnanJabri.png' buttonTitle='Discover Our Legacy'
                        />
                    </div>
                </div>
            </section>
            {/* <Footer isScrollable /> */}
        </section >

    )
}
export default Page;
