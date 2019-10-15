import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Contacts from './ContactList';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addContact} from '../actions/contactActions';


class AddContact extends Component {
  state = {
    name: '',
    phone_number: '',
    errors: {}
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, phone_number, errors } = this.state;

    const newContact = {
      name,
      phone_number,
      errors
    };

   this.props.addContact(newContact)
    this.setState({
      name: '',
      phone_number: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name,phone_number } = this.state;

    return (
      <div className="Phonebook" >

             <Link to="/" component={Contacts}>
                <i className="fas fa-arrow-left fresh"></i>
              </Link>
        
            <section className="camera">
           
               <i className="fa fa-camera camera-section" ></i>
           </section>

          <form onSubmit={this.onSubmit}>      
         <div className="form-row names" >
           <div className="form-name">
             <label>Name</label>
             <input className="form-control" 
             type="text" 
             required placeholder="John" 
             id="cardCVC" 
             name='name'
             value={name}
             onChange={this.onChange}
             
             />
             </div>
        </div>
        <div className="form-row names">
           <div className="sname form-name">
               <label>Surname</label>
               <input className="form-control" 
                     type="text" 
                     required placeholder="Smith" 
                     id="cardCVC"
                     name='surname' 
                     value={name.surname}
                     onChange={this.onChange}
                     />
             </div>
        </div>
        <div className="form-row">
           <div className="form-number">
             <label>Mobile</label>
             <input className="form-control" 
             type="number"
              required placeholder="+111 1111 1111" 
              id="cardCVC" 
              name='phone_number'
              value={phone_number}
              onChange={this.onChange}
              /></div>
        </div>
         
            <button type="submit" className="btn btn-success button">+ Add Number</button>
          
       </form>
            
    </div>

    );
  }
}
  addContact.PropTypes={
  addContact:PropTypes.func.isRequired,

}
export default connect(null,{addContact})(AddContact);

