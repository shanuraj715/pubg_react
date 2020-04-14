import React from 'react';
import { ThisYear } from '../../functions/date.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

function Footer(){
	return(
		<div className="main-footer">
			<div className="footer-1">
				<div className="footer-left">
					<p className="footer-title">Share</p>
					<div className="footer-share-block">
						<div className="footer-share-btn-block">
							<a href="#" className="footer-share-btn">
								<FontAwesomeIcon icon={faFacebookF} className="footer-share-link" />
							</a>
						</div>

						<div className="footer-share-btn-block">
							<a href="#" className="footer-share-btn">
								<FontAwesomeIcon icon={faInstagram} className="footer-share-link" />
							</a>
						</div>

						<div className="footer-share-btn-block">
							<a href="#" className="footer-share-btn">
								<FontAwesomeIcon icon={faTwitter} className="footer-share-link" />
							</a>
						</div>

						<div className="footer-share-btn-block">
							<a href="#" className="footer-share-btn">
								<FontAwesomeIcon icon={faLinkedinIn} className="footer-share-link" />
							</a>
						</div>
					</div>
				</div>
				<div className="footer-right">
					<p className="footer-title">About Developer</p>
					<p className="footer-dev-name">Shanu Raj</p>
					<p className="footer-dev-line1">Profession : <span className="footer-dev-span">Full Stack Web Developer</span></p>
						<p className="footer-dev-address">New Delhi - 110092</p>
				</div>
			</div>
			<div className="footer-2">
				<p className="footer-copy-text">Copyright &copy; 2018 - {ThisYear} | All Rights Reserved ||</p>
			</div>
		</div>
	)
}

export default Footer;