import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import heroesReducer from '../reducers/heroes';
import filtersReducer from '../reducers/filters';

const rootReducer = combineReducers({
  heroes: heroesReducer,
  filters: filtersReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
