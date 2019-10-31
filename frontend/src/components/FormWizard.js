import React from'react';
import './styles/FormWizard.css';
import './styles/shared.css';
import ParticipantsForm from './ParticipantsForm.js'
import TermsForm from './TermsForm.js';
import classNames from 'classnames';
import {Formik, Form} from 'formik';

class FormWizard extends React.Component {
    constructor(props){
        super(props);
        this.state = {currentStep: 1};
    }

    render() {
        const currentStep = this.state.currentStep;
        
        const step1 = classNames({
            'hide': currentStep != 1
        });
        const step2 = classNames({
            'hide': currentStep != 2
        });
        const step3 = classNames({
            'hide': currentStep != 3
        });


        return (
            <div className="form-wizard">
                
                {/* Header */}
                {currentStep === 1 &&
                    <div className="form-wizard__header">
                        <div className="form-wizard__header__circle form-wizard__header__circle--current">1</div> 
                        <div className="form-wizard__header__text form-wizard__header__text--current">Participants</div>
                        <div className="form-wizard__header__line"></div> 
                        <div className="form-wizard__header__circle">2</div> 
                        <div className="form-wizard__header__text">Terms</div> 
                        <div className="form-wizard__header__line"></div> 
                        <div className="form-wizard__header__circle">3</div> 
                        <div className="form-wizard__header__text">Preview</div> 
                    </div>
                }

                {currentStep === 2 &&
                    <div className="form-wizard__header"> 
                        <div className="form-wizard__header__circle">1</div> 
                        <div className="form-wizard__header__text">Participants</div> 
                        <div className="form-wizard__header__line"></div> 
                        <div className="form-wizard__header__circle  form-wizard__header__circle--current">2</div> 
                        <div className="form-wizard__header__text  form-wizard__header__text--current">Terms</div> 
                        <div className="form-wizard__header__line"></div> 
                        <div className="form-wizard__header__circle">3</div> 
                        <div className="form-wizard__header__text">Preview</div> 
                    </div>
                }

                {currentStep === 3 &&
                    <div className="form-wizard__header">
                        <div className="form-wizard__header__circle">1</div> 
                        <div className="form-wizard__header__text">Participants</div> 
                        <div className="form-wizard__header__line"></div> 
                        <div className="form-wizard__header__circle">2</div> 
                        <div className="form-wizard__header__text">Terms</div> 
                        <div className="form-wizard__header__line"></div> 
                        <div className="form-wizard__header__circle form-wizard__header__circle--current">3</div>   
                        <div className="form-wizard__header__text form-wizard__header__text--current">Preview</div>
                    </div> 
                }
                {/* End Header */}


                {/* Form Content */}
                <Formik
                    initialValues={
                        {"numParticipants": 6, 
                            "participants": 
                                {"participant1": {"name": "", "phoneNumber": "", "exception": ""},
                                "participant2": {"name": "", "phoneNumber": "", "exception": ""},
                                "participant3": {"name": "", "phoneNumber": "", "exception": ""},
                                "participant4": {"name": "", "phoneNumber": "", "exception": ""},
                                "participant5": {"name": "", "phoneNumber": "", "exception": ""},
                                "participant6": {"name": "", "phoneNumber": "", "exception": ""}}
                            }
                        }
                    

                    onSubmit={(values, actions) => {
                        // MyImaginaryRestApiCall(values).then(
                        //     updatedUser => {
                        //         actions.setSubmitting(false);
                        //         updateUser(updatedUser);
                        //         onClose();
                        //     },
                        //     error => {
                        //         actborder: 0;
                        //         actions.setErrors(transformMyRestApiErrorsToAnObject(error));
                        //         actions.setStatus({ msg: 'some arbitrary status or data' });
                        //     }
                        // );
                    }}
                    render={({ values, errors, status, touched, handleChange, handleBlur }) => (
                        <Form>
                            {(JSON.stringify(values))}
                            <div className={step1}>
                                <ParticipantsForm 
                                    values={values} errors={errors} 
                                    status={status} touched={touched} 
                                    handleChange={handleChange} handleBlur={handleBlur}/>
                            </div>
                            <div className={step2}>
                                <TermsForm 
                                    values={values} errors={errors} 
                                    status={status} touched={touched} 
                                    handleChange={handleChange} handleBlur={handleBlur}
                                />
                            </div>
                        </Form>
                    )}
                />

                <div className={step3}></div>
                {/* End Form Content */}

                {/* Button Footer */}
                {currentStep === 1 && 
                    <div className="form-wizard__buttons form-wizard__buttons--step-1">
                        <button onClick={() => this.setState({currentStep: 2})} className="form-wizard__buttons__next">Next</button>
                    </div>
                }
                
                {currentStep === 2 && 
                    <div className="form-wizard__buttons form-wizard__buttons--step-2">
                        <button onClick={() => this.setState({currentStep: 1})} className="form-wizard__buttons__previous">Previous</button> 
                        <button onClick={() => this.setState({currentStep: 3})} className="form-wizard__buttons__next">Next</button>
                    </div>
                }

                {currentStep === 3 && 
                    <div className="form-wizard__buttons form-wizard__buttons--step-3">
                        <button onClick={() => this.setState({currentStep: 2})} className="form-wizard__buttons__previous">Previous</button> 
                        <button className="form-wizard__buttons__send">Send</button>
                    </div>
                }  
                {/* End Button Footer */}

            </div>
        );
    }

}

export default FormWizard;