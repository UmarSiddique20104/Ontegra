// import { Menu } from "@/types/menu";

const menuData = [
	{
		id: 1,
		title: "Home",
		path: "/",
		newTab: false,
		submenu: [],
	},
	{
		id: 2,
		title: "About Us",
		path: "/about-us",
		newTab: false,
		submenu: [
			{
				title: "Ontegra",
				submenu: [],
				path: '/ontegra'
			},
			// {
			//   title: "Our Story",
			//   path: "",
			// },
			// {
			//   title: "Leadership",
			//   submenu: [],
			//   path: ''

			// },
			{
				title: "Vision & Mission",
				submenu: [],
				path: '/our-vision'

			},
			{
				title: "Our Team",
				submenu: [],
				path: '/our-team'
			},
			{
				title: "Core Values",
				submenu: [],
				path: '/values'
			},
			{
				title: "General Manager’s Message",
				submenu: [],
				path: '/gm-message'
			},
			{
				title: "Service Excellence ",
				submenu: [
					{
						title: "ISO Standards",
						path: "/iso-standards"
					},
					{
						title: "Health and Safety",
						path: "/health-safety"
					},
					{
						title: "Alegra - AI Concierge",
						path: "/alegra"
					},
					{
						title: "Techi - AI Expert",
						path: "/techi"
					},
					// {
					//   title: "Sustainable Practices",
					//   path: ""
					// },
					// {
					//   title: "Clients Testimonials",
					//   path: ""
					// },
					// {
					//   title: "Awards and Appreciations",
					//   path: ""
					// },
					// {
					//   title: "Corporate Social Responsibility",
					//   path: ""
					// },
				],
				path: ''
			},
			// {
			//   title: "Innovative FM Solutions",
			//   submenu: [
			//     {
			//       title: "AI Integration",
			//       path: ""
			//     },
			//     {
			//       title: "Fully Automated CAFM",
			//       path: ""
			//     },
			//     {
			//       title: "Alegra - 24x7 AI Concierge",
			//       path: ""
			//     },
			//     {
			//       title: "Techi - AI Expert in Excellence",
			//       path: ""
			//     },
			//   ],
			//   path: ''
			// },

		],
	},
	{
		id: 3,
		title: "Services",
		path: "/services",
		newTab: false,
		submenu: [
			{
				title: "Total Facilities Management",
				submenu: [],
				path: '/services/total-fm'
			},
			{
				title: "Hard FM",
				submenu: [],
				path: '/services//hard-fm'
			},
			{
				title: "Soft FM",
				submenu: [],
				path: '/services/soft-fm'
			},
			{
				title: "Security Services",
				submenu: [],
				path: '/services/security'
			},
			{
				title: "Specialized Services",
				submenu: [],
				path: '/services/specialized-services'
			},
			{
				title: "Energy Management",
				submenu: [],
				path: '/services/energy-management'
			},
			{
				title: "Home Services",
				submenu: [],
				path: '/services/home-services'
			},
		],
	},
	{
		title: "Our Clients",
		submenu: [],
		path: '/our-clients'
	},
	// {
	//   id: 4,
	//   title: "Sustainability",
	//   path: "/sustainability",
	//   newTab: false,
	//   submenu: [],
	// },
	{
		id: 5,
		title: "AI Integration",
		path: "/ai-integration",
		newTab: false,
		submenu: [],
	},
	{
		id: 6,
		title: "Contact Us",
		path: "/contact-us",
		newTab: false,
		submenu: [],
	},
	{
		id:7,
		title: "Log Service Request",
		path: "/service-request",
		newTab: false,
		submenu: [],
	},
	
];
export default menuData;
