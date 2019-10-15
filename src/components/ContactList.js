import React from 'react';
import Contact from './Contact';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getContacts} from '../actions/contactActions';

class Contacts extends React.Component {
  componentDidMount(){
    this.props.getContacts();
  }
  render() {
    const { contacts } = this.props;

    return (

      <React.Fragment>
        <h1>
         Phone book manager
        </h1>

        <div className="row bgsuccess">
        <div className="col">Name</div>
        <div className="col">Phone Number</div>
        <div className="col">Edit</div>
        <div className="col">Delete</div>
        </div>
        {contacts.map(contact =>(

         <Contact key={contact.id} contact={contact} />
        ))}
       
          <Link to="/contact/new" >
          <button type="button" className="btn btn-success button">+ Add contact</button>
          </Link>
        
      </React.Fragment>
    );
  }
}; 

Contacts.propTypes = {
contacts:PropTypes.array.isRequired,
getContacts:PropTypes.func.isRequired,
contact: PropTypes.object.isRequired,
DeleteContact:PropTypes.func.isRequired

}
const mapStateToProps=(state)=>({
  contacts:state.contact.contacts
});

export default connect(
  mapStateToProps,
  {getContacts}) (Contacts);
  


