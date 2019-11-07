import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import CustomerList from './components/customer-list';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={ Form } />
        <Route exact path='/customer-list' component={ CustomerList } />
        <Route path='/customer-list/:customerNo' component={ CustomerList } />
      </BrowserRouter>
    </div>
  );
}

export default App;
