import React from 'react';
import './window.css';
import {API_URL} from '../../config.js';

import Card from '../card/Card';

class Window extends React.Component{

	state = {
		

	}

	componentDidMount(){
		
		const endpoint = `${ API_URL }asset-list?cat=muzzle`;
		this.fetchItems(endpoint);
	}

	fetchItems = ( endpoint ) => {

		fetch( endpoint )
		.then(result => result.json())
		.then(result => {
			console.log(result)
		})
	}

	render(){
		return(
			<div className="window-area-container">
				
				<div className="window-area">
					<p className="area-title">Weapon Categories</p>
					<hr className="area-title-hr"/>
					<Card item="weapon-cat" />
				</div>
				
				<div className="window-area">
					<p className="area-title">Other Assets</p>
					<hr className="area-title-hr"/>
					<Card item="asset-cat" />
				</div>
				
				<div className="window-area">
					<p className="area-title">Maps</p>
					<hr className="area-title-hr"/>
					<Card item="maps" />
				</div>

			</div>
		)
	}
}

export default Window;