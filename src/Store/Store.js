
import { createStore,combineReducers, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import AuthReducer from "../Redux/Reducers/AuthReducer";

const composeenhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
    const store = createStore(combineReducers({
            AuthReducer: AuthReducer
        }),
        composeenhance(applyMiddleware(ReduxThunk))
    );
    return store;
}
