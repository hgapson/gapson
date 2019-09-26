import React from 'react';
import './Component.css';
import {Link} from 'react-router-dom';


class AddContact extends React.Component{
    constructor(props){
        super(props);
        this.state={addNew: false};
        this.state={
            contact:[{fname:"Hacky Gapson",mynumber:"+250789650085"},
                    {fname:"zena immaculle",mynumber:"+250788655689"},
                    {fname:"niyo yvette",mynumber:"+250788456528"},
                    {fname:"mapendo eric",mynumber:"+250788704914"},
                    {fname:"big innocent",mynumber:"+250783532656"}
            ]
        }
        this.addNewContact = this.addNewContact.bind(this);
        this.create =  this.create.bind(this);
    }   
    create(newcontact){
        this.setState({
            contact:{...this.state.contact, newcontact}
        })
    }
    //function to add new contact page
    addNewContact(){
        this.setState({
            addNew: !this.state.addNew
        })
    }
   
   render(){
      
    let result;
        //display of arrays
        let contacts = this.state.contact.map(contact=>{
            return (
                <tr>
                    <td>{contact.fname}</td>
                    <td>{contact.mynumber}</td>
                    <td><i class="far fa-edit edit"></i></td>
                    <td><i class="fas fa-trash"></i></td>
                </tr>
            )
        });
        
        if(!this.state.addNew){
            result =(
                <div className="list">
                    <h1>Phone Book Manager</h1>
                    <table>
                        <tr id="display">
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {contacts}
                    </table>
                   
            <Link to="/AddNumber">
                <button type="button" className="btn btn-success">+ Add contact</button>
            </Link>
                  
                </div>
            )
        }
        else{
            result=(
                <div>
                    <AddContact createNewContact={this.create}/>
                </div>
            )
        }
        return result;
   }
}


export default AddContact;