import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';




class AddContact extends React.Component{
    constructor(props){
    super(props);
    this.state={
      contacts:[],
      errorMessage:""
    }
    }
   
    componentDidMount(){
      axios.get("https://code-catalist-phone-book-rails.herokuapp.com/contacts")
      .then(Response=>{
        console.log(Response)
        this.setState({
          contacts:Response.data
        })
      })
  
      .catch(error=>{
        console.log(Response)
        this.setState({errorMessage:"error retrieving data"})
      })
  
    }

    handleDelete(id){
      axios.delete(`https://code-catalist-phone-book-rails.herokuapp.com/contacts/${id}`)    // axios function that reflect to API
      let contactListCopy = this.state.contacts            // grab a copy of the todo list
      for(let i = 0; i < contactListCopy.length; i++) {
          let cont = contactListCopy[i]
          if(cont.id === id) {                            // if it’s the correct ID...
              contactListCopy.splice(i, 1)                // delete the item
              break                                       // we’re done! break the loop
          }
  
      }
      this.setState({contact: contactListCopy})  
      alert('Contact deleted')         // we update state

  }
   
  render(){
      const {contacts,errorMessage}=this.state
      return(
        <div className="container">
          <h1>PHONE BOOK MANAGER</h1>
            <div className="card-body ">
              <div className="row bgsuccess">
                <div className="col">Name</div>
                <div className="col">Phone Number</div>
                <div className="col">Edit</div>
                <div className="col">Delete</div>
              </div>
  
              {contacts.length?
              contacts.map(contacts=>
              <div className="row" key={contacts.id}>
                  <div className="col">{contacts.name}</div>
                  <div className="col">{contacts.phone_number}</div>
              
                  <Link to={`/EditContact/${contacts.id}`}>
                  <div className="col">{<i  className="far fa-edit edit" ></i>}</div>
                  </Link>               
              <div className="col">{<i className="fas fa-trash delete" onClick={()=>{this.handleDelete(contacts.id)}} ></i>}</div>
             </div>
                ):
                null
                }
  
              <div className="row">{errorMessage}</div>
  
              <Link to="/AddNumber">
                <button type="button" className="btn btn-success">+ Add contact</button>
              </Link>
           </div>
        </div>
      )
    }
  }
  
export default AddContact;