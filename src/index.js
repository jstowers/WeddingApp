import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

/* Save if need to add Redux:
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore);
*/

ReactDOM.render(<App/>, document.querySelector('.container'));

/* Save if need to add Redux:
<Provider store={createStoreWithMiddleware(reducers)}></Provider>
*/