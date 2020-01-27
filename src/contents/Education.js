import React, {Component} from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
	render() {
		return (
			<div className='condiv'>
				<h1 className='subtopic'> My Education </h1>
				<Widecard
					title='B.E Computer Engineering'
					where='Kathmandu University'
					from='July 2014'
					to='October 2018'
				/>
				<Widecard title='HSEB | +2' where='Khwopa Higher Secondary School' from='2012' to='2014' />
				<Widecard title='SLC' where='Baylor International Academy' from='' to='2012' />
			</div>
		);
	}
}

export default Education;
