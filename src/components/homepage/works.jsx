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
							<img
								src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/ac4e792eabbada0c6c30563d6e3c88e5.jpg"
								alt="rvc"
								className="work-image"
							/>
							<div className="work-title">Renesas Design Vietnam Co., Ltd</div>
							<div className="work-subtitle">
								Hardware Engineer
							</div>
							<div className="work-duration">2020 - 2022</div>
						</div>

						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/C560BAQG1UnVUcD5XVA/company-logo_100_100/0/1650856320979?e=1695254400&v=beta&t=wTJlcjWJzuwjCnarUKIhX7gZYS8k7ATbfdvcusKDbyM"
								alt="cpay"
								className="work-image"
							/>
							<div className="work-title">cPay Technology</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>

						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/C560BAQETuT-lsggdEg/company-logo_100_100/0/1642506809289?e=1695254400&v=beta&t=t92B0XKdE9X_-rVXbNN-TBvSdegkKVDLL8GARDPSB_o"
								alt="dc"
								className="work-image"
							/>
							<div className="work-title">Delta Cognition</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
