import React from 'react';
import AddContact from './AddContact';
import './Component.css';
import {Link} from 'react-router-dom';


class ContactDetail extends React.Component{
    
    render(){
        return(
<div> 
       <Link to="/" component={AddContact}>
        <i className="fas fa-arrow-left fresh"></i>
        </Link>

    <table>
        <tbody>
            <tr id="social">
                <th><i class="fas fa-comment-alt"></i></th>
                <th> <i className="fas fa-phone detail"></i></th>
                <th> <i class="fas fa-video"></i></th>
                <th><i class="fas fa-envelope"></i></th>
            </tr>
        </tbody>
    </table>
        
</div>
           
          );
    }
}
export default ContactDetail;