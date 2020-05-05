import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import {render} from 'react-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import  Booked  from './Booked'

import CityFilter from './CityFilter'
import { ViewCardDetails } from './ViewCardDetails';
import BookingForm from './BookingForm';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/booked" component={ Booked } />
              <Route path="/filter" component={ CityFilter } />
              <Route path="/viewcarddetails" component={ ViewCardDetails }  />
              <Route path="/bookingform" component={ BookingForm }  />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}
// render(<App />, document.getElementById('root'));
export default App;
