import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {DeleteContact} from '../actions/contactActions';

class Contact extends Component {


  onDeleteClick = id => {  
this.props.DeleteContact(id);
  };

  
    render() {

      const { id, name, phone_number} = this.props.contact;
  
      return (
  
          <div className="row">
          <div className="col">{name}</div>
          <div className="col">{phone_number}</div>
          <div className="col">
  
          <Link to={`contact/edit/${id}`}>
          <i className="far fa-edit edit" />
          </Link> 
          </div>

          <div className="col">
          <i className="fas fa-trash delete" onClick={this.onDeleteClick.bind(this, id)}/>
          </div>
          </div>
  
      );
  
    }
  
  }
  
  Contact.propTypes = {
    contact: propTypes.object.isRequired,
    DeleteContact:propTypes.func.isRequired
  };
  
  export default connect(null,{DeleteContact}) (Contact);
  
  