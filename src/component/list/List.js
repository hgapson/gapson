import React,{Component } from 'react';
import './List.css'; 
import {Link} from 'react-router-dom';



class List extends Component {
   
    render(){
       
        return (
            
            <div className="list">
           
            <header className="django">
            <i className="fas fa-phone-square-alt"></i>
            
               <h3 className="iconD"><span className="yellow">P</span>BM</h3>
               <i className="fas fa-ellipsis-h"></i>
		

                <div className="info">
                <i className="fas fa-portrait"></i>
                       <label className="person"><b className="name">Admin Admin</b></label>
                    
                       <i className="fas fa-angle-down"></i>
                   </div>
		</header>

            <h1>
                PHONE BOOK MANAGMENT
           </h1>
           <div>
      <ul className="list-group list-group-horizontal">
  <li className="list-group-item">Name</li>
  <li className="list-group-item">Phone number</li>
  <li className="list-group-item">Edit</li>
  <li className="list-group-item">Delete</li>
</ul>
<button type="button" className="btn btn-success">+ Add contact</button>
</div>

<footer className='coppy'>

<p className="copyright">&copy; 2019 django All rights reserved &nbsp; &nbsp; &nbsp;</p>

            </footer>
      </div>
           
   

      


          );
    }
}

export default List;

