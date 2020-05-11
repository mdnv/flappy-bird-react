import React from 'react';
import {Provider} from 'react-redux'
import Game from './components/Game'

function App({store}) {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}

export default App;
