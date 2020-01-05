import React from 'react';
import {Jumbotron, Container, Row, Col, Image}from 'react-bootstrap';
import heroImage from '../images/undraw_gifts_btw0.svg';
// import './styles/Hero.css';

class Hero extends React.Component {
    render() {
        return (
            <Jumbotron>
                <Container>
                    <Row>
                        <Col sm>
                            <Image src={ heroImage } fluid alt='gift-exchange'/>
                        </Col>
                        <Col sm>
                            <h1>Gift Exchanger</h1>
                            <h3>Organize anonymous gift exchanges with ease. No login needed.</h3>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default Hero;