import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/ContactList';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import Header from './components/Header';
import Footer from './components/Footer';

import {Provider} from 'react-redux';
import store from './store';
import './Component.css';

const App = () => {
    return(
       <Provider store={store}>
        <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/new" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              
              
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
       </Provider>
        
)
}
export default App;
