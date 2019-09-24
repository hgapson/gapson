import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function AddContact(){
   
    return(

        <div className="list">       
            <h1>
                PHONE BOOK MANAGMENT
           </h1>
    <ul className="list-group list-group-horizontal-lg all">
        <li className="list-group-item">Name</li>
        <li className="list-group-item">Phone Number</li>
        <li className="list-group-item">Edit</li>
        <li className="list-group-item">Delete</li>
</ul>
          
 <Link to="/AddNumber">
    <button type="button" className="btn btn-success">+ Add contact</button>
</Link>
  </div>
      
    );
}
export default AddContact;