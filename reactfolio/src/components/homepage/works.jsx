import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
						<img src="/logos/fedex.png" alt="FedEx" className="work-image" />

							<div className="work-title">Fedex</div>
							<div className="work-subtitle">
								Seniar Full Stack Developer
							</div>
							<div className="work-duration">Sep 2023 - Present</div>
						</div>

						<div className="work">
						<img src="/logos/exelon.png" alt="Exelon Coorparation" className="work-image" />
							<div className="work-title">Exelon Coorparation</div>
							<div className="work-subtitle">
								Full Stack Developer
							</div>
							<div className="work-duration">Jun 2021 – Aug 2023</div>
						</div>

						<div className="work">
						<img src="/logos/wsfs-bank.png" alt="WSFS Bank" className="work-image" />
							<div className="work-title">WSFS Bank</div>
							<div className="work-subtitle">
								Full Stack Developer
							</div>
							<div className="work-duration">Feb 2020 – May 2021</div>
						</div>

						<div className="work">
						<img src="/logos/tjx-companies.png" alt="The TJX Companies, Inc." className="work-image" />
							<div className="work-title">The TJX Companies, Inc.</div>
							<div className="work-subtitle">
								Full Stack Developer 
							</div>
							<div className="work-duration">Jul 2018 – Feb 2020</div>
						</div>

						<div className="work">
						<img src="/logos/newgen-software.jpeg" alt="Newgen Softeare Technologies Limited" className="work-image" />
							<div className="work-title">Newgen Softeare Technologies Limited</div>
							<div className="work-subtitle">
								Software Enginner Intern
							</div>
							<div className="work-duration">May 2017 – Jun 2018</div>
						</div>



					</div>
				}
			/>
		</div>
	);
};

export default Works;
