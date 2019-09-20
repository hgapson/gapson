import React,{Component } from 'react';
import './AddNumber.css'; 



class Number extends Component {
   
    render(){
       
        return (
            
            <div className="list">       
            <header className="django">
            <div className="call">
            <i class="fas fa-phone"></i>
            </div>
            
            
               <h3 className="iconD"><span className="yellow">P</span>BM</h3>
               <i className="fas fa-ellipsis-h point"></i>
		

                <div className="info">
                <i className="fas fa-portrait"></i>
                       <label className="person"><b className="name">Admin Admin</b></label>
                    
                       <i className="fas fa-angle-down"></i>
                   </div>
		</header>

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
            <button type="button" className="btn btn-success">+ Add Number</button>
            </div>
        </div>
</form>

<footer className='coppy'>

<p className="copyright">&copy; 2019 django All rights reserved &nbsp; &nbsp; &nbsp;</p>

            </footer>
      </div>
           
   

      


          );
    }
}

export default Number;

