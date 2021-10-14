import React from 'react';
import { render } from 'react-dom';
import 'normalize.css'; //gets rid of annoying border on browser improving experience
import App from './app';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';
import {FirebaseContext} from './context/firebase';


//import reportWebVitals from './reportWebVitals';

render(
  <>
    <FirebaseContext.Provider value = {{firebase}}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root'));


//reportWebVitals();
