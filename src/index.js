import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Template from './components/ui/templates/Template';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Template />, document.getElementById('root'));
registerServiceWorker();
