import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function AddContact(){
   
    return(

        <div className="list">       
            <h1>
                PHONE BOOK MANAGMENT
           </h1>
          
 <Link to="/AddNumber">
<button type="button" className="btn btn-success">+ Add contact</button>
</Link>
  </div>
      
    );
}
export default AddContact;