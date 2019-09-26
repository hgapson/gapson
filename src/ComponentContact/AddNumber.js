import React from 'react';

import './Component.css';
import {Link} from 'react-router-dom';
import AddContact from './AddContact';



class AddNumber extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fname:[],
            surname:[],
            number:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    handleInputChange(event){
        this.setState({
          [event.target.name]: event.target.value
        })
        
    }
    onFormSubmit(event){
        event.preventDefault();
        this.setState({fname: this.state.fname});
        this.setState({surname: this.state.surname})
        this.setState({number: this.state.number})
        console.log(this.state.fname, this.state.surname,this.state.number)
       
    }
    render(){
        return(

            <div className="list"> 
            <Link to="/" component={AddContact}>
        <i className="fas fa-arrow-left fresh"></i>
        </Link>
        <section className="camera">
        <i className="fa fa-camera camera" aria-hidden="true"></i>
        </section>
    
            <form onSubmit={this.onFormSubmit}>    
            <div className="form-row">
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" type="tel" 
                            onChange={this.handleInputChange} 
                            value={this.state.fname}
                            name='fname'
                            required placeholder="John" id="cardCVC" />
                </div>
            </div>
            <div className="form-row">
            <div className="form-group"><label>Surname</label>
                <input className="form-control" 
                    onChange={this.handleInputChange} 
                    value={this.state.surname}
                    name='surname'
                type="tel" required placeholder="Smith" id="cardCVC" /></div>
            </div>
            <div className="form-row">
            <div className="phone"><label>Mobile</label>
                <input className="form-control"
                        onChange={this.handleInputChange} 
                        value={this.state.number}
                        name='number'    
                     type="tel" required placeholder="+111 1111 1111" id="cardCVC"/>
            
            <button type="submit" className="btn btn-success button">+ Add Number</button>
           
            </div>
            </div>
            </form>
            </div>
           
          );
    }
}
export default AddNumber;