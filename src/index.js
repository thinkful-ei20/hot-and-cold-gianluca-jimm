import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HotColdApp from './components/HotColdApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HotColdApp/>, document.getElementById('root'));
registerServiceWorker();
