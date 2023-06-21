import React from "react";

function article_1() {
	return {
		date: "22 June 2023",
		title: "Integrated circuit design",
		description:
			"Fundamental of hardware design",
		keywords: [
			"IC",
			"ASIC",
			"Verilog",
			"HDL",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Hardware development</div>
					<p>Concept through to design and verification of Chip (SoC/ASIC), IP/Peripheral and CPU core by hardware description language (Verilog HDL) or High-Level language (C/C++)</p>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "22 June 2023",
		title: "What is Artificial Intelligence?",
		description:
			"Artificial intelligence (AI) is technology that is now trending and being implemented by innovative companies",
		style: ``,
		keywords: [
			"Artificial Intelligence",
			"Nam",
			"Nam Thai",
			"Thai Vi Nam",
		],
		body: (
			<React.Fragment>
				<h1>Artificial Intelligence</h1>
				<p>Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems.</p>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
