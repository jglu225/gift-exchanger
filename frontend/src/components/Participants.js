import React from 'react';
import {Form, Container, Row, Col, Button} from 'react-bootstrap';

class Participants extends React.Component {
    render() {
    //   if (this.props.currentStep !== 1) { 
    //     return null
    //   }

      return(
        <Form.Row className="justify-content-md-center">
            <Button>-</Button>
            <Form.Group as={Col} md="4">
                <Form.Label>Number of Participants</Form.Label>
                <Form.Control type="number"/>   
            </Form.Group>
            <Button>+</Button>
        </Form.Row>

      )
    }
  }

  export default Participants;