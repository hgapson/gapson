import React from 'react';
import './Component.css';



function Header(){
   
    return(

        <div className="list">       
        <header className="django">
        <div className="call">
        <i className="fas fa-phone"></i>
        </div>
        
        
           <h3 className="iconD"><span className="yellow">P</span>BM</h3>
           <i className="fas fa-ellipsis-h point"></i>
    

            <div className="info">
            <i className="fas fa-portrait profile"></i>
                   <label className="person"><b className="name">Admin Admin</b></label>
                
                   <i className="fas fa-angle-down"></i>
               </div>
    </header>
  
  </div>
       
      );
}
export default Header;