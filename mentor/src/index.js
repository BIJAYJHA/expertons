import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';


import mentorReducer from './store/reducers/mentor';
import authReducer from './store/reducers/auth';
import {watchMentors,watchAuth} from './store/sagas/index';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const composeEnhancers=process.env.NODE_ENV==='development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const  rootReducer=combineReducers({
  mentor:mentorReducer,
  auth:authReducer
})

const sagaMiddleWare=createSagaMiddleware();

const store=createStore(rootReducer,composeEnhancers(
  applyMiddleware(sagaMiddleWare)
))

sagaMiddleWare.run(watchMentors);
sagaMiddleWare.run(watchAuth);

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
