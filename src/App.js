import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import index from './routes/index';

import { Button } from 'antd';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {index.map(route => (
            <Route {...route} />
          ))}
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
