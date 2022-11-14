
import { combineReducers } from "redux";


const Reducer = (state=0, action) => {
    if(action.type==='deposit') {
        return state + action.payload;
    }
    else if(action.type==='withdraw') {
        return state - action.payload;
    }
    else  return state;
}

const allReducers = combineReducers({
    amount: Reducer,
})


export default allReducers;
