import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { customTheme } from "./services/Theme/customTheme";
import { ThemeProvider } from "@emotion/react";
import { Provider } from 'react-redux';
import store from './services/store.js'
import { fetchExercises } from './scenes/Exercises/services/Exercisesfeature';
import { fetchProfiles } from './scenes/Profile/services/Profiles/Profilesfeatures';

store.dispatch(fetchExercises)
store.dispatch(fetchProfiles)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
    <BrowserRouter >
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
