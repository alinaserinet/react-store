import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/app.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import store from "./redux/store";
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
