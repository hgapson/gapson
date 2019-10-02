import React from 'react';
import AddContact from './AddContact';
import {Link} from 'react-router-dom';
import axios from 'axios';




class EditContact extends React.Component{
  constructor(props){
      super(props);
      this.state= {
       name:"",
       phone_number:""
     };
     }

     componentWillMount(){
       this.getContacts();
     }
       getContacts(){
         axios.get('https://code-catalist-phone-book-rails.herokuapp.com/contacts/:id',this.state)
         .then(Response=>{
           this.setState({
             id: '',
             name: '',
             phone_number: ''
           })
         })
       }
     
   
   //handle input
   handleChange=(event)=>{
   event.preventDefault();
   this.setState({
     [event.target.name]: event.target.value
   })
 
    }

  render(){
   const {name,phone_number}=this.state
    return(
  <div className="Phonebook" >
  <h1>Edit Contact</h1>
          
          <Link to="/" component={AddContact}>
      <i className="fas fa-arrow-left fresh"></i>
      </Link>
         <section className="camera">
           
               <i className="fa fa-camera camera" ></i>
           </section>
    <form onSubmit={this.handleSubmit}>      
       <div className="form-row names" >
         <div className="form-name">
           <label>Name</label>
           <input className="form-control" 
           type="tel" 
           required placeholder="John" 
           id="cardCVC" 
           name="name"
           value={this.state.id}
           onChange={this.handleChange}
           />
           </div>
      </div>
      <div className="form-row names">
         <div className="sname form-name">
             <label>Surname</label>
             <input className="form-control" 
                   type="tel" 
                   required placeholder="Smith" 
                   id="cardCVC"
                   name="name" 
                   value={this.state.name}
                   onChange={this.handleChange}
                   />
           </div>
      </div>
      <div className="form-row">
         <div className="form-number number">
           <label>Mobile</label>
           <input className="form-control" 
           type="tel"
            required placeholder="+111 1111 1111" 
            id="cardCVC" 
            name="phone_number"
            value={this.state.phone_number}
            onChange={this.handleChange}
            /></div>
      </div>
            
      <button type="submit" className="btn btn-success button">+ Edit Contact</button>
          
             
             
        </form>
            
    </div>
        )
       }
}
export default EditContact;