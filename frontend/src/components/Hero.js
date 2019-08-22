import React from 'react';
import heroImage from '../images/undraw_gifts_btw0.svg';
import './styles/Hero.css';

class Hero extends React.Component {
    render() {
        return (
            <div className="hero">
                <img src={ heroImage } className="hero__image" alt='gift-exchange'/>
                <div className="hero__text">
                    <h1>Gift Exchanger</h1>
                    <h3>Organize anonymous gift exchanges with ease. No login needed.</h3>
                </div>
            </div>
        );
    }
}

export default Hero;