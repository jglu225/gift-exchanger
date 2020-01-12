import React from 'react';
import {Form, Container, Row, Col, Button, ButtonGroup} from 'react-bootstrap';
import "./styles/Participants.css";

class Participants extends React.Component {
    constructor(props){
        super(props);
    }

    render() {


      return(

        <div>   
            <div className="numParticipants">
                <div><Button size="lg">-</Button></div>
                <div className="numParticipants_number">6</div>
                <div><Button size="lg">+</Button></div>
                <div className="numParticipants_label"><h3>Number of Participants</h3></div>
            </div>

        </div>
        
      )
    }
  }

  export default Participants;