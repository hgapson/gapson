import React from 'react';
import AddContact from './AddContact';
import{Link} from 'react-router-dom';
import axios from 'axios';




class EditContact extends React.Component{
  constructor(props){
      super(props);
      this.state= {
       contacts:[]
     }
     }

     componentDidMount(){
       axios.get('https://code-catalist-phone-book-rails.herokuapp.com/contacts/'+ this.props.match.params.id)
       .then(response=>{
         this.setState({
           name: response.data.name,
           phone_number: response.data.phone_number
         })
       })
       .catch(err=>{
         console.log(err)
       })
     }

     handleSubmit=()=>{
       axios.put('https://code-catalist-phone-book-rails.herokuapp.com/contacts/'+ this.props.match.params.id, this.state)
       .then((response)=>{
         console.log(response)
       })
       alert('updated')
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
             <Link to="/" component={AddContact}>
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
                  type="tel" 
                  required placeholder="John" 
                  id="cardCVC" 
                  name="name"
                  value={name}
                  onChange={this.handleChange}
           />
             </div>
            </div>
          <div className="form-row names">
         <div className="sname form-name">
             <label>Surname</label>
             <input className="form-control" 
                   type="tel" 
                   placeholder="Smith" 
                   name="name" 
                   value=''
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
            name="phone_number"
            value={phone_number}
            onChange={this.handleChange}
            /></div>
      </div>
            <button type="submit" className="btn btn-success button">Edit Contact</button>
                      
        </form>
            
    </div>
        )
       }
}
export default EditContact;