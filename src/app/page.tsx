import React from "react";
import Header from "./components/header/header";
import { Footer } from "./components/footer/Footer";
import IntroSection from "./pages/homeSections/IntroSection";
import Redefining from "./pages/homeSections/Redefining";
import Integration from "./pages/homeSections/Integration";
import TechSection from "./pages/homeSections/TechSection";
import Team from "./pages/homeSections/Team";
import Expertise from "./pages/homeSections/Expertise";
import ISOS from "./pages/homeSections/ISOStandards";
import TrustedByTheBest from "./pages/homeSections/TrustedByTheBest";
import AwardSection from "./pages/homeSections/AwardSection";
import GreenSection from "./pages/homeSections/GreenSection";
import "./globals.css";
const Home = () => {
	return (
		<>
			<Header color={false} />
			<IntroSection />
			<Redefining />
			<Integration />
			<TechSection />
			<Team />
			<Expertise />
			<ISOS />
			<TrustedByTheBest />
			{/* <AwardSection /> */}
			<GreenSection />
			<Footer />
		</>
	);
};

export default Home;
