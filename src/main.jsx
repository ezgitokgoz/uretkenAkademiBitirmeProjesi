import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';
import { CategoryProvider } from './CategoryContext.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CategoryProvider>
      <App/>
      </CategoryProvider>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')

);