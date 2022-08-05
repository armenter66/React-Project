import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { setLocaleStorage } from '@utils/localStorage';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
	setLocaleStorage('store', store.getState().favouriteReducer);
});

export default store;
