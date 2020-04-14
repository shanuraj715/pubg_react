import React from 'react';
import HeaderImage from '../../images/logo.png';
import PubgLogo from '../../images/pubg_logo.png';
import './header.css';

function Header(){
	return(
		<div className="main-header">
			<div className="header-logo-container">
				<img className="header-img" src={HeaderImage} alt="site_image" />
			</div>

			<div className='header-pubg-logo-container'>
				<img className='header-pubg-logo' src={PubgLogo} alt="site_image" />
			</div>
		</div>
	)
}

export default Header;