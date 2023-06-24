import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Certificates from "../components/certificate/certificates";

import INFO from "../data/user";
import SEO from "../data/seo";
import myCertificates from "../data/certificates";

import "./styles/certificates.css";

const Certificate = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "certificates");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Certificates | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="certificates" />
				<div className="content-wrapper">
					<div className="certificates-logo-container">
						<div className="certificates-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="certificates-main-container">
						<div className="title certificates-title">
							{INFO.certificates.title}
						</div>

						<div className="subtitle certificates-subtitle">
							{INFO.certificates.description}
						</div>

						<div className="certificates-container">
							<div className="certificates-wrapper">
								{myCertificates.map((certificate, index) => (
									<div
										className="certificates-certificate"
										key={(index + 1).toString()}
									>
										<Certificates
											key={(index + 1).toString()}
											date={certificate().date}
											title={certificate().title}
											description={certificate().description}
											link="https://github.com/devJerb/dl-weekly/tree/master/certificates"
										/>
									</div>
								))}
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

export default Certificate;
