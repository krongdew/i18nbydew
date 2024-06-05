import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyComponent from './MyComponent';
import CurrencyConverter from './CurrencyConverter';
import ErrorBoundary from './ErrorBoundary';
import './i18n';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<MyComponent />} />
          <Route path="/convert" element={<CurrencyConverter />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
