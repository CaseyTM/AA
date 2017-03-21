//root reducer goes here
import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer.js';
import RegisterReducer from './RegisterReducer.js';
import BalancingReducer from './BalancingReducer.js'
// import WeightedReducer from './WeightedReducer.js';
import SideEffectReducer from './SideEffectReducer.js'


const rootReducer = combineReducers({
	login: LoginReducer,
	register: RegisterReducer,
	balancing: BalancingReducer,
	sideEffects: SideEffectReducer
})

export default rootReducer;