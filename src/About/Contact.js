import React from "react";

const Contact = (props) => {
	return (
		<div className={props.showList === "Contact" ? "" : "hidden"}>
			<div className="banner_plane">
				<img src="images/fatRedPlanePullingBanner.png" alt="" />
				<p className="big_text">Kelsey Schroeder</p>
			</div>
			<div id="contact_links">
				<a href="github.com/Ka9kdc">
					<img
						src="images/github-logo.png"
						alt="Github logo and link to my github"
					/>
				</a>
				<a href="https://www.linkedin.com/in/kelsey-m-schroeder/">
					<img
						src="images/linkedin-logo.png"
						alt="linkedin logo and link to my linked in profile"
					/>
				</a>
			</div>
		</div>
	);
};

export default Contact;
