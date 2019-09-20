import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function AddNumber(){
   
    return(

        <div className="list"> 
    <i class="fas fa-arrow-left fresh"></i>
    <section className="camera">
    <i className="fa fa-camera camera" aria-hidden="true"></i>
    </section>

        <form>      
        <div className="form-row">
        <div className="form-group"><label>Name</label><input className="form-control" type="tel" required placeholder="John" id="cardCVC" /></div>
        </div>
        <div className="form-row">
        <div className="form-group"><label>Surname</label><input className="form-control" type="tel" required placeholder="Smith" id="cardCVC" /></div>
        </div>
        <div className="form-row">
        <div className="phone"><label>Mobile</label><input className="form-control" type="tel" required placeholder="+111 1111 1111" id="cardCVC"/>
        <Link to="/">
        <button type="button" className="btn btn-success button">+ Add Number</button>
        </Link>
        </div>
        </div>
        </form>
        </div>
       
      );
}
export default AddNumber;