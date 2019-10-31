import React from'react';
import './styles/ParticipantsForm.css';
import './styles/shared.css';
import { Field, ErrorMessage } from 'formik';
import Dropdown from 'react-bootstrap/Dropdown';

class ParticpantsForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {numParticipants: 6};
        this.renderParticipantInfo = this.renderParticipantInfo.bind(this);
        this.renderExceptions = this.renderExceptions.bind(this);
        this.decreaseParticipants = this.decreaseParticipants.bind(this);
        this.increaseParticipants = this.increaseParticipants.bind(this);

    } 

    renderParticipantInfo(){
        let participants = [];

        for (let i = 0; i < this.state.numParticipants; i++){
            let participantNum = "participants.participant" + (i+1);
            let dot = "."
            // let name = "name" + (i+1);
            let name = ".name"
            let phoneNumber = ".phoneNumber";
            participants.push(
                <div className="participants-form__participant">
                    {/* <input className="input" id="name" placeholder="Name"></input>
                    <input className="input" id="phonenumber" placeholder="Phone Number"></input> */}
                    <Field 
                        className="input" 
                        type="text" 
                        placeholder="Name"
                        name={participantNum+name}
                        onChange={this.props.handleChange}
                        values={participantNum}
                    />
                    <ErrorMessage name={name} component="div" />
                    <Field 
                        className="input" 
                        type="tel" 
                        name={participantNum+phoneNumber} 
                        placeholder="Phone Number"
                        values={participantNum}
                    /> 
                </div>
            );
        }
        return participants;
    }    

    renderExceptions(){
        let exceptions = [];
        for (let i = 0; i < this.state.numParticipants; i++){
            let participantNum = "participant" + (i+1);
            let name = this.props.values.participants[participantNum].name; 
            exceptions.push(
                <div className="participants-form__exceptions">
                    <label>Exception for {i+1}</label>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary">
                            Exception for {name}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            );
        }
        return exceptions;
    }    


    decreaseParticipants(){
        if(this.state.numParticipants > 6)
            this.setState({numParticipants: this.state.numParticipants - 2});
    }

    increaseParticipants(){
        if(this.state.numParticipants < 24){
            this.setState({numParticipants: this.state.numParticipants + 2});
        }
    }

    
    render() {

        const numParticipants = this.state.numParticipants;
        const {values, errors, status, touched, handleChange, handleBlur} = this.props;
        values.numParticipants = this.state.numParticipants;

        return (
            <div className="participants-form">
                <div className="participants-form__number-participants">
                    <div className="participants-form__number-participants__label">Number of Participants:</div>
                    <button className="participants-form__number-participants__button" onClick={this.decreaseParticipants}>-</button>
                    <div className="participants-form__number-participants__number">{numParticipants}</div>
                    <button className="participants-form__number-participants__button" onClick={this.increaseParticipants}>+</button>
                </div>

                {this.renderParticipantInfo()}
                {this.renderExceptions()}
                
               

            </div>
        );
    }
}   

export default ParticpantsForm;     