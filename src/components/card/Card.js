import React from 'react';
import './card.css';

import Image1 from '../../images/all-images/m416.png';

const Card = ( props ) => {

	

	return(
		<div className="card-container">
			<div className="card">
				<a className="card-link-img" href="#">
					<img src={ Image1 } className="card-image" alt="site_image" />
				</a>
			</div>
			<p className="card_title"><a href="#" className="card_link">Category Title</a></p>
		</div>
	)
}

export default Card;