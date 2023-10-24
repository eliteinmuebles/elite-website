import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './containers/routing';

function App() {
 

  return (
    <Router>
      <Routing/>
    </Router>
  )
}

export default App
