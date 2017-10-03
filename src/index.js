import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Template from './components/ui/templates/Template';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
      <Template />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
