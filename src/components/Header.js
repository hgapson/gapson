import React from 'react';
import '../Component.css';



function Header(){
   
    return(

//         <div className="list">       
//         <header className="django">
//         <div className="call">
//         <i className="fas fa-phone"></i>
//         </div>
        
        
//            <h3 className="iconD"><span className="yellow">P</span>BM</h3>
//            <i className="fas fa-ellipsis-h point"></i>
    

//             <div className="info">
//             <i className="fas fa-portrait profile"></i>
//                    <label className="person"><b className="name">Admin Admin</b></label>
                
//                    <i className="fas fa-angle-down"></i>
//                </div>
//     </header>
  
//   </div>

<nav class="navbar navbar-light navbar-expand-md custom-header">
    <div class="container-fluid">
        <a class="navbar-brand">
            <span>P</span></a>BM<button class="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse"><span class="sr-only">

            </span><span class="navbar-toggler-icon">

            </span></button>
        
            <ul class="nav navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">
                    <i className="fas fa-portrait profile"> class="dropdown-image"</i></a>
                    <div class="dropdown-menu dropdown-menu-right" role="menu">
                        <a class="dropdown-item" role="presentation" href="#">Settings </a>
                        <a class="dropdown-item" role="presentation" href="#">Payments </a>
                        <a class="dropdown-item" role="presentation" href="#">Logout </a></div>
                </li>
            </ul>
    </div>
    
</nav>
       
      );
}
export default Header;