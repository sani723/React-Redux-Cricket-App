import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Template from './components/ui/templates/Template';
import registerServiceWorker from './registerServiceWorker';
import store from './store/';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Template />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
