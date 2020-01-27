import React, {Component} from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/anup_photo.jpg';
import Social from '../components/Social';

class Home extends Component {
	render() {
		return (
			<div className='condiv home'>
				<img src={profilepic} className='profilepic' />
				<ReactTypingEffect
					className='typingeffect'
					text={['I am Anup Kumar Singh', 'I am a Computer Engineer.']}
					speed={100}
					eraseDelay={700}
				/>
				<Social />
			</div>
		);
	}
}

export default Home;
