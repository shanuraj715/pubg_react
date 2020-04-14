import React from 'react';
import './navigation.css';

function Navigation(){
	return(
		<div className="main-nav">
			<div className="nav-left">
				<div className="nav-home-block">
					<a href="#" className="nav-home-link">Home</a>
				</div>
				<div className="nav-links-block">
					<a href="#" className="nav-links">Weapon Skins</a>
					<a href="#" className="nav-links">New Season</a>
					<a href="#" className="nav-links">Notification</a>
					<a href="#" className="nav-links">Blog</a>
				</div>
			</div>
			<div className="nav-right">
				<a href="#" className="nav-admin-link">Admin</a>
			</div>
		</div>
	)
}

export default Navigation;