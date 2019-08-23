import React from'react'
import './styles/FormWizard.css'

class FormWizard extends React.Component {

    render() {
        return (
            <div className="form-wizard">
                <div className="form-wizard__header">
                    <div className="form-wizard__header__circle form-wizard__header__circle--current">1</div>
                    <div className="form-wizard__header__text form-wizard__header__text--current">Add Participants</div>
                    <div className="form-wizard__header__line"></div>
                    <div className="form-wizard__header__circle">2</div>
                    <div className="form-wizard__header__text">Set Terms</div>
                    <div className="form-wizard__header__line"></div>
                    <div className="form-wizard__header__circle">3</div>
                    <div className="form-wizard__header__text">Preview Message</div>
                </div>
            </div>
        );
    }

}

export default FormWizard;