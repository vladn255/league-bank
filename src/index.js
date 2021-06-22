import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './sass/style.scss';
import App from './components/app/App.jsx';

import reducer from './store/reducer.js';
import { createAPI } from './services/api.js';
import { fetchRates } from './store/api-action';

const api = createAPI();
const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(api))
)

store.dispatch(fetchRates())
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  })


