import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/experience.css";

const experiences = [
	{
		company: "FedEx",
		title: "Senior Full Stack Developer",
		type: "Full-time",
		duration: "Sep 2023 – Present · 1 yr 10 mos",
		location: "Dallas, Texas, United States · Remote",
		logo: "fedex.png",
	},
	{
		company: "Exelon",
		title: "Full Stack Developer",
		type: "Full-time",
		duration: "Jun 2021 – Aug 2023 · 2 yrs 3 mos",
		location: "Baltimore, Maryland, United States · Hybrid",
		logo: "exelon.png",
	},
	{
		company: "WSFS Bank",
		title: "Full Stack Developer",
		type: "Full-time",
		duration: "Feb 2020 – May 2021 · 1 yr 4 mos",
		location: "Wilmington, Delaware, United States · Hybrid",
		logo: "wsfs-bank.png",
	},
	{
		company: "The TJX Companies, Inc.",
		title: "Full Stack Developer",
		type: "Full-time",
		duration: "Jul 2018 – Feb 2020 · 1 yr 8 mos",
		location: "Framingham, Massachusetts, United States · On-site",
		logo: "tjx-companies.png",
	},
	{
		company: "NEWGEN SOFTWARE TECHNOLOGIES LIMITED",
		title: "Associate Software Engineer",
		type: "Internship",
		duration: "May 2017 – Jun 2018 · 1 yr 2 mos",
		location: "Bengaluru, Karnataka, India · Hybrid",
		logo: "newgen-software.jpeg",
	},
];

const Experience = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "experience");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Experience | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO?.description} />
				<meta name="keywords" content={currentSEO?.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="experience" />
				<div className="content-wrapper">
					<div className="experience-logo-container">
						<div className="experience-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="experience-container">
						<div className="title experience-title">Professional Experience</div>
						<div className="experience-list">
							{experiences.map((exp, index) => (
								<div
									key={index}
									className="experience-item"
									style={{ animationDelay: `${index * 0.2}s` }}
								>
									<div className="company-header">
										<img
											src={`/logos/${exp.logo}`}
											alt={`${exp.company} logo`}
											className="company-logo"
										/>
										<h3 className="experience-company">{exp.company}</h3>
									</div>
									<p className="experience-role">
										{exp.title} · {exp.type}
									</p>
									<p className="experience-duration">{exp.duration}</p>
									<p className="experience-location">{exp.location}</p>
								</div>
							))}
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Experience;
