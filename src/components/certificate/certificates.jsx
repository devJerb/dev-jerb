import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/certificates.css";

const Certificate = (props) => {
	const { date, title, description, link } = props;

	return (
		<React.Fragment>
			<div className="certificates">
				<div className="certificates-left-side">
					<div className="certificates-date">{date}</div>
				</div>

				<Link to={link}>
					<div className="certificates-right-side">
						<div className="certificates-title">{title}</div>
						<div className="certificates-description">{description}</div>
						<div className="certificates-link">
							Read certificates{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Certificate;
