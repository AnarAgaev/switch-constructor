import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Redux/store';
import ErrorBoundary from './Containers/ErrorBoundary';
import App from './App';
import './App.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);