import React from "react";
import { Link } from "react-router-dom";
import { PREFIX } from "../../App"

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to={PREFIX + "/"}>Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to={PREFIX + "/about"}>About</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to={PREFIX + "/projects"}>Projects</Link>
						</li>
						{/* <li className="footer-nav-link-item">
							<Link to={PREFIX + "/articles"}>Articles</Link>
						</li> */}
						<li className="footer-nav-link-item">
							<Link to={PREFIX + "/contact"}>Contact</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2025 nam.thai.dev. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
