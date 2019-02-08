import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import { Header } from 'components';
import { Home } from 'containers';

import styles from 'components/Home/Home';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route render={() => (
            <div className={styles.main}>
              <span>Not Found</span>
              <Link to="/">Back to home</Link>
            </div>
          )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
