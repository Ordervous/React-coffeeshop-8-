import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {ProductProvider} from './ProductContext'


ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
    <App />
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
