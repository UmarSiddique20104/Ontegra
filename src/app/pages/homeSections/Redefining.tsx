"use client";

import HomePageContent from "@/app/components/reuseable/PageContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

const Redefining = () => {
	const introRef = useRef<HTMLDListElement>(null);
	gsap.registerPlugin(ScrollTrigger, useGSAP);

	useGSAP(
		() => {
			let mm = gsap.matchMedia('')

			mm.add("(min-width: 992px)", () => {
				let tl = gsap.timeline({
					defaults: {
						duration: 1.25,
					},
					scrollTrigger: {
						trigger: introRef.current,
						start: "top top",
						end: "bottom 15%",
						markers: false,
					},
				});
				tl.to(".redefiningSec .content", {
					x: 0,
					autoAlpha: 1,
				}).to(
					".redefiningSec .imgCont img",
					{
						x: 0,
						autoAlpha: 1,
					},
					"<"
				);
			})

			mm.add("(max-width: 991px)", () => {
				let tl = gsap.timeline({
					defaults: {
						duration: 1.25,
					},
					scrollTrigger: {
						trigger: introRef.current,
						start: "top top",
						end: "bottom 15%",
						markers: false,
					},
				});
				tl.to(".redefiningSec .content", {
					x: 0,
					autoAlpha: 1,
				}).to(
					".redefiningSec .imgCont img",
					{
						y: 0,
						autoAlpha: 1,
					},
					"<"
				);
			})
		},
		{
			scope: introRef,
		}
	);

	return (
		<section
			ref={introRef}
			className="bg-white overflow-hidden min-h-screen relative z-10 redefiningSec max-md:pb-12"
		>
			<div className="container mx-auto px-4 md:h-full">
				<div className="lg:px-0">
					<div className="bg-white scrollingSection relative">
						<div className="mx-auto ">
							<HomePageContent
								textColorh1={"#000"}
								textColorp={"#278CB3"}
								title1={"Redefining"}
								title="the Landscape of Facilities Management"
								description="By integrating cutting-edge artificial intelligence to provide smarter, more efficient service solutions that are prepared for the challenges of tomorrow"
								imageUrl="/RedefiningWoman.png"
								shouldReverse={true}
								buttonTitle="Discover How"
								url="/smart-integration"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Redefining;
