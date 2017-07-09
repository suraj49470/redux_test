import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import allreducers from './reducers/index';
import registerServiceWorker from './registerServiceWorker';



const store  = createStore(allreducers);


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
