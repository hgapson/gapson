import React from 'react';
import AddContact from './AddContact';
import AddNumber from './AddNumber';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
 
  return (
    <Router>
    <Header/>
   <div className="App">
         <Switch>
          <Route path="/" exact component={AddContact} />
          <Route path="/AddNumber" component={AddNumber} />
          </Switch>
          <Footer/>
        </div>
        </Router>  
    
  );
}

export default App;
