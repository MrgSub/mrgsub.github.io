import Head from "next/head";
import React from "react";
import s from "styled-components";
import { FcGlobe, FcFeedback } from "react-icons/fc";

const BodyContainer = s.div`
	max-width: 800px;
	margin: 0 auto;
	min-height: 100vh;
	position: relative;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 80px;
`;

const BodyInner = s.div`
	width: 100%;
`;

const BodyHeader = s.div`
	position: fixed;
	width:100%;
	background: white;
	padding-bottom: 10px;
	max-width: 800px;
	display: grid;
	grid-template-columns: 80% 20%;
	align-items:center; 
`;

const BodyTitle = s.div`
	font-family: 'Caveat', cursive;
	font-size: 68px;
`;

const BodySubtitle = s.div`
	font-family: 'Raleway', sans-serif;
	font-size: 20px;
	font-weight: 200;
`;

const PortfolioContainer = s.div`
	padding-top: 160px;
`;

const PortfolioTitle = s.div`
	font-family: 'Caveat', cursive;
	font-size: 38px;
	margin-bottom: 20px;
`;

const PortfolioGrid = s.div`
	display: grid;
	grid-template-columns: 100%;
	column-gap: 20px;
	row-gap: 20px;
	justify-items: center;
`;

const ItemContainer = s.div`
	display: block;
	width: 100%;
	overflow: hidden;
	border:1px solid rgba(0,0,0,0.05); 
`;

const ItemThumb = s.div`
	background: url(${(p) => p.cover});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 300px;
	width: 100%;
`;

const ItemDetails = s.div`
	background: white;
	margin-top: 10px;
	padding: 10px;
	padding-bottom: 20px;
	display: grid;
	grid-template-columns: 75% 25%;
	column-gap: 10px;
`;

const ItemTitle = s.div`
	font-family: 'Raleway', sans-serif;
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 10px;
`;

const ItemSubTitle = s.div`
	font-family: 'Raleway', sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 1.3;
`;

const CTAContainer = s.div`
	display: flex;
	justify-content: flex-end;
	padding: 20px;
	padding-top:0;
	font-size: 32px;
`;

const Projects = [
	{
		title: "Reship",
		date: "2020 - Present",
		subtitle:
			"State of the art mobile app project management featuring authentication via Apple, Google and Facebook, a custom UI kit, Apple FaceID or TouchID, payments using ApplePay & GooglePay. CI/CD pipelines for Apple's AppStore and Google's PlayStore. Built using React Native",
		href: "https://reship.com",
		cover:
			"https://assets.website-files.com/5f0c9cbc3a05e30508c762fa/5f2c63a2426902dd05a1e7d9_Monark%20Labs-p-1080.jpeg",
	},
	{
		title: "PICKMO",
		date: "2021 - Present",
		subtitle: "What do you want to watch?",
		href: "https://pickmo.app/",
		cover: "https://i.imgur.com/SkeEHJ0.png",
	},
	{
		title: "Ballistic Supplements",
		date: "2021 - Present",
		subtitle: "",
		href: "https://ballisticsupps.myshopify.com/",
		cover: "",
	},
	{
		title: "Gogo Brokers",
		date: "2021",
		subtitle:
			"Partnering with well established brokers, we deliver the lowest priced customs brokering services for USA to Canada imports.",
		href: "https://www.gogobrokers.com/",
		cover: "",
	},
	{
		title: "Smart Nora",
		date: "2021",
		subtitle: "The revolutionary contact-free snoring solution.",
		href: "https://www.smartnora.com/",
		cover: "",
	},
	{
		title: "Cocobum",
		date: "2018 - 2019",
		subtitle:
			"An ecommerce platform initially based on Shopify, as we developed a entire new platform to better suit the customization needs of the store. Built using React and NodeJS",
		href: "https://cocobum.com",
		cover: "",
	},
	{
		title: "Offplan Linked",
		date: "2017 - 2018",
		subtitle:
			"Build a mobile application for both Android and iOS to increase sales and engagement in the real estate field for the brokers. Established online presence and increased in revenue. Built using React Native and NodeJS",
		href: "#",
		cover: "",
	},
	{
		title: "Biotouch UAE",
		date: "2016 - 2017",
		subtitle:
			"Built micro-services architecture using NodeJS and built and published a mobile application using Swift and Xcode. Used HTML5, CSS3 and Javascript for the front-end.",
		href: "https://biotouch.ae",
		cover: "",
	},
];

const PortfolioItem = ({ title, subtitle, href, cover, date }) => {
	return (
		<ItemContainer>
			{cover && <ItemThumb cover={cover} />}
			<ItemDetails>
				<div>
					<ItemTitle>
						{title}{" "}
						<span style={{ fontWeight: "100", fontSize: 18 }}>
							{date}
						</span>
					</ItemTitle>
					<ItemSubTitle>{subtitle}</ItemSubTitle>
				</div>
				<CTAContainer>
					<a href={href}>
						<FcGlobe style={{ cursor: "pointer" }} />
					</a>
				</CTAContainer>
			</ItemDetails>
		</ItemContainer>
	);
};

const FooterContainer = s.div`
	position:fixed;
	bottom:0;
	left:0;
	width: 100%;
	padding:10px;
	background: rgba(255,255,255,1);
	font-family: 'Raleway', sans-serif;
	color: black;
	font-size: 12px;
	display: flex;
	justify-content: space-between;
`;

export default function Home() {
	return (
		<React.Fragment>
			<Head>
				<title>AJXB | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<BodyContainer>
				<BodyInner>
					<BodyHeader>
						<div>
							<BodyTitle>AJXB</BodyTitle>
							<BodySubtitle>Creative Development</BodySubtitle>
						</div>
						<div
							style={{
								fontWeight: "bold",
								fontSize: 40,
								display: "flex",
								justifyContent: "center",
							}}
						>
							<a href={"mailto:1@ajxb.net"}>
								<FcFeedback />
							</a>
						</div>
					</BodyHeader>
					<PortfolioContainer>
						<PortfolioTitle>Projects</PortfolioTitle>
						<PortfolioGrid>
							{Projects.map((e) => (
								<PortfolioItem
									date={e.date}
									cover={e.cover}
									href={e.href}
									title={e.title}
									subtitle={e.subtitle}
								/>
							))}
						</PortfolioGrid>
					</PortfolioContainer>
				</BodyInner>
				<FooterContainer>
					<div>
						Built using React & Next by AJXB Consulting Ltd.{" "}
						{new Date().getFullYear()}
					</div>
				</FooterContainer>
			</BodyContainer>
		</React.Fragment>
	);
}
