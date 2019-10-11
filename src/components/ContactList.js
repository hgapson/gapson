import React from 'react';

import { connect } from 'react-redux';

import {fetchContacts} from '../actions';


class PostList extends React.Component{
    constructor(props){
        super(props);
        this.renderList = this.renderList.bind(this);
    }

    componentDidMount(){
        this.props.fetchContacts();
    }

    renderList(){

       return this.props.contacts.map((contact) => {
           return (

                   <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.phone_number}</td>
                        <td>edit</td>
                        <td>delete</td>
                   </tr>
           )
       })
    }

    render(){
        console.log(this.props.contacts);
        return (
            <div>
            <h1>phonebook management</h1> 
                <table>
                    <tbody>
                        <tr>
                            <th>NAME</th>
                            <th>phone NUMBER</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    {this.renderList()}
                    </tbody>
                </table>
            </div>
        )
    }

}

const mapStateToProps =(state)=>{

    return  {contacts: state.contacts}

}

export default connect(mapStateToProps,{fetchContacts}) (PostList);