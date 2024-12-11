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
								src="https://media.licdn.com/dms/image/v2/C560BAQETuT-lsggdEg/company-logo_100_100/company-logo_100_100/0/1642506809740/delta_cognition_logo?e=1741824000&v=beta&t=O6AXWb3u1ztT_KLypHjf9kfNh-ATJVSbuwXGliPmWrE"
								alt="dc"
								className="work-image"
							/>
							<div className="work-title">Delta Cognition</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/C560BAQG1UnVUcD5XVA/company-logo_100_100/company-logo_100_100/0/1650856321402/cpaytechnology_logo?e=1741824000&v=beta&t=1biWRA5EfLUrpBaaJnLcLEFY-N9hR1InM7bpgFLjwvE"
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
								src="https://media.licdn.com/dms/image/v2/D560BAQFEX9-Jr-Xm1Q/company-logo_200_200/company-logo_200_200/0/1719618871832/renesas_logo?e=1741824000&v=beta&t=oSiMB_zBXLO6pXQ-nHP7cbsSPDEE4QjaDPlmJRUuV_Y"
								alt="rvc"
								className="work-image"
							/>
							<div className="work-title">
								Renesas Design Vietnam Co., Ltd
							</div>
							<div className="work-subtitle">
								Hardware Engineer
							</div>
							<div className="work-duration">2020 - 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
