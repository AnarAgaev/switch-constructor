import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './containers/ErrorBoundary';
import App from './App';
import './App.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);