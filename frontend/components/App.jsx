import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import RoomShowContainer from './rooms/RoomShowContainer';
import { Provider } from 'react-redux';

const App = (state) => (
  <div>Let's chat!
    <Provider store={store}>
      <HashRouter>
        <Route path="/room/:roomId" component={RoomShowContainer} />
      </HashRouter>
    </Provider>
  </div>
)

export default App;