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
								src="./freelance.svg"
								alt="freelance"
								className="work-image"
							/>
							<div className="work-title">Freelance</div>
							<div className="work-subtitle">
								Web Development
							</div>
							<div className="work-duration">2020 - Present</div>
						</div>

						<div className="work">
							<img
								src="./student.svg"
								alt="student"
								className="work-image"
							/>
							<div className="work-title">Student</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
