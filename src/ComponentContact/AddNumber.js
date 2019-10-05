import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom'




class AddNumber extends React.Component{
    constructor(props){
        super(props);
        this.state= {
         name:"",
         phone_number:"",
         firstname:'',
         surname:''
         
       };
       }
        
       
      //submit inputs
   handleSubmit=(event)=>{
    var data={name:this.state.firstname+" "+this.state.surname, phone_number:this.state.phone_number}
       event.preventDefault();
       console.log(this.state)
         axios.post('https://code-catalist-phone-book-rails.herokuapp.com/contacts',data)
         .then(Response=>{
          this.setState({ onRedirect: true });
           
         })

         .catch(error=>{
           console.log(error)
         });
         alert('saved')   
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
               { this.state.onRedirect && <Redirect to="/" /> }

            <Link to="/AddContact" >
        <i className="fas fa-arrow-left fresh"></i>
        </Link>
           <section className="camera">
             
                 <i className="fa fa-camera camera-section" ></i>
             </section>
      <form onSubmit={this.handleSubmit}>      
         <div className="form-row names" >
           <div className="form-name">
             <label>Name</label>
             <input className="form-control" 
             type="text" 
             required placeholder="John" 
             id="cardCVC" 
             name='firstname'
             value={name.firstname}
             onChange={this.handleChange}
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
                     onChange={this.handleChange}
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