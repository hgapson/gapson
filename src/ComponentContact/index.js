import React from 'react';
import Counter from './counter';
import Store from './store/index';
import './App.css';

// import AddContact from './ComponentContact/AddContact';
// import AddNumber from './ComponentContact/AddNumber';
// import Header from './ComponentContact/Header';
// import EditContact from './ComponentContact/EditContact';
// import Footer from './ComponentContact/Footer';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




function App() {
 
  return (
    // <Router>
    // <Header/>
   <div className="App">
    <Counter Store={Store}/>
    
          {/* <Switch>
          <Route path="/" exact component={AddContact} />
          <Route path="/AddNumber" component={AddNumber} />
          <Route path="/EditContact/:id" component={EditContact} /> 
          </Switch>
          <Footer/> 
           */}
        </div>
        //</Router>  
    
  );
}

export default App;
