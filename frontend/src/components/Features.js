import React from 'react';
import {Container, Row, Col, Image}from 'react-bootstrap';
import participants from '../images/undraw_community_8nwl.svg';
import terms from '../images/undraw_terms_lso0.svg';
import message_sent from '../images/undraw_message_sent_1030.svg'; 
import './styles/Features.css';

class Features extends React.Component {
    render() {
        return (
            <Container style={{marginTop: "40px"}}>
                <Row>
                    <Col md>
                        <Image className="features-container__item__img" src={participants} alt="participants"/>
                        <p className="features-container__item__text">Add the <strong>participants</strong> name, phone number, and exceptions.</p>
                    </Col>
                    <Col md>
                        <Image className="features-container__item__img" src={terms} alt="terms"/>
                        <p className="features-container__item__text">Set your <strong>terms</strong>, including exchange date, max gift price,  and additional details.</p>
                    </Col>
                    <Col md>
                        <Image className="features-container__item__img" src={message_sent} alt="message_sent"/>
                        <p className="features-container__item__text">Messages are <strong>sent</strong> directly to participants. Saving all the hassle.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Features;