import React from 'react';
import AddContact from './ComponentContact/AddContact';
import AddNumber from './ComponentContact/AddNumber';
//import ContactDetail from './ComponentContact/ContactDetail';
import Header from './ComponentContact/Header';
import EditContact from './ComponentContact/EditContact';
import Footer from './ComponentContact/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




function App() {
 
  return (
    <Router>
    <Header/>
   <div className="App">
         <Switch>
          <Route path="/" exact component={AddContact} />
          <Route path="/AddNumber" component={AddNumber} />
          <Route path="/AddContact/EditContact/id" component={EditContact} />
          </Switch>
          <Footer/>
        </div>
        </Router>  
    
  );
}

export default App;
