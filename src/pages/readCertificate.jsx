import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myCertificates from "../data/certificates";

import "./styles/readCertificates.css";

let CertificateStyle = styled.div``;

const Readcertificate = () => {
	let { slug } = useParams();

	const certificate = myCertificates[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [certificate]);

	CertificateStyle = styled.div`
		${certificate().style}
	`;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${certificate().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={certificate().description} />
				<meta name="keywords" content={certificate().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-certificates-logo-container">
						<div className="read-certificates-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-certificates-container">
						<div className="read-certificate-wrapper">
							<div className="read-certificates-date-container">
								<div className="read-certificates-date">
									{certificate().date}
								</div>
							</div>

							<div className="title read-certificates-title">
								{certificate().title}
							</div>

							<div className="read-certificates-body">
								<CertificateStyle>{certificate().body}</CertificateStyle>
							</div>
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

export default Readcertificate;
