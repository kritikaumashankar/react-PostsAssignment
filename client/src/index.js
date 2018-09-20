import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import 'semantic-ui-css/semantic.min.css'
import registerServiceWorker from './registerServiceWorker';
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
JavascriptTimeAgo.locale(en)

ReactDOM.render(
  <Provider store={store}>
<BrowserRouter>
  <App />
</BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
