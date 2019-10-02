import React from 'react';
import AddContact from './AddContact';
import {Link} from 'react-router-dom';
import axios from 'axios';



class AddNumber extends React.Component{
    constructor(props){
        super(props);
        this.state= {
         name:"",
         phone_number:""
       };
       }
        
       
      //submit inputs
   handleSubmit=(event)=>{
       event.preventDefault();
       console.log(this.state)
         axios.post('https://code-catalist-phone-book-rails.herokuapp.com/contacts',this.state)
         .then(Response=>{
           alert('Contact Well Saved')
         })
         .catch(error=>{
           console.log(error)
         });
         
    }
     //handle input
     handleChange=(event)=>{
     event.preventDefault();
     this.setState({
       [event.target.name]: event.target.value
     })
   
      }



    render(){
     const {phone_number}=this.state
      return(
    <div className="Phonebook" >
            
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
             name='name'
             value={this.state.name}
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
                     name='surname' 
                     value={this.state.surname}
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
              name='phone_number'
              value={phone_number}
              onChange={this.handleChange}
              /></div>
        </div>
              
            <button type="submit" className="btn btn-success button">+ Add Number</button>

       </form>
              
      </div>
          )
         }
}
export default AddNumber;