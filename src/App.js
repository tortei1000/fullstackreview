import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from "./redux/store"
import {HashRouter} from 'react-router-dom'
import Nav from "./components/Nav"
import router from "./router"


function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Nav />
        {router}
      </HashRouter>
    </Provider>
  );
}

export default App;
