import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';

import ProductDetails from './components/ProductDetails.js';
import Shop from './components/Shop';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router >
      <Provider store={store}>
          <div className="App">
            <NavBar />
            <Switch>
              <Route path='/' exact component={Shop} />
              <Route path='/products/:id' component={ProductDetails} />
            </Switch>
          </div>
      </Provider>
    </Router>
  );
}

export default App;
