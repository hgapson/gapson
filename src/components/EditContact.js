import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {getContact ,updateContact} from '../actions/contactActions';
import Contact from './Contact';
import Contacts from './ContactList';

class EditContact extends Component {
  state = {
    name: '',
    phone_number: '',
    errors: {}
  };
componentWillReceiveProps(nextProps,nextState){
  const {name,phone_number}= nextProps.contact;
  this.setState({name,phone_number})
}
componentDidMount(){
  const {id}= this.props.match.params;
  this.props.getContact(id)
}
  onSubmit = (e) => {
    e.preventDefault();

    const { name, phone_number } = this.state;

   
    const { id } = this.props.match.params;
    const updContact = {
      id,
      name,
      phone_number
    };

    
this.props.updateContact(updContact);   
    this.setState({
      name: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name,phone_number} = this.state;

    return (
      <div className="Phonebook" >

             <Link to="/" component={Contacts}>
                <i className="fas fa-arrow-left fresh"></i>
              </Link>
        

          <form onSubmit={this.onSubmit}>      
            <div className="form-row names" >
              <div className="form-name">
                <label>Name</label>
                <input className="form-control" 
                  type="tel" 
                  required placeholder="John" 
                  id="cardCVC" 
                  name="name"
                  value={name}
                  onChange={this.onChange}
           />
             </div>
            </div>
          
      
      <div className="form-row number">
         <div className="form-number">
           <label>Mobile</label>
           <input className="form-control" 
           type="tel"
            required placeholder="+111 1111 1111" 
            name="phone_number"
            value={phone_number}
            onChange={this.onChange}
            /></div>
      </div>
            <button type="submit" className="btn btn-success button">Edit Contact</button>
                      
        </form>
            
    </div>

    );
  }
}
  Contact.PropTypes = {
  contact:PropTypes.object.isRequired,
  getContact:PropTypes.func.isRequired
}
const mapStateToProps= (state)=>({
 contact:state.contact.contact
})
export default connect(mapStateToProps, {getContact,updateContact}) (EditContact);

