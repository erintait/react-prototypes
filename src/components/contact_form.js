import React, {Component} from 'react';

class ContactForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            form: {
                firstName: '',
                lastName: ''
            }
        }
    }

    render(){
        const {firstName, lastName}= this.state.form;

        return (
            <form>
                <div className="form-group">
                    <label>First Name</label> <input name="firstName" type="text" className="form-control" value={firstName}></input>
                    <label>Last Name</label> <input name="lastName" type="text" className="form-control" value={lastName}></input>
                </div>
            </form>
        )
    }
}

export default ContactForm;