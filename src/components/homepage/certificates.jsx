import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/certificates.css";

const Certificate = (props) => {
	const { title, description, date, link } = props;

	return (
		<React.Fragment>
			<div className="homepage-certificates">
				<div className="homepage-certificates-content">
					<div className="homepage-certificates-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-certificates-title">{title}</div>
					<div className="homepage-certificates-description">
						{description}
					</div>
					<div className="homepage-certificates-link">
						<Link to={link}>
							Read certificates{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Certificate;
