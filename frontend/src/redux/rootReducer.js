import { combineReducers } from '@reduxjs/toolkit';
import AuthReducer from './slice/AuthSlice';
import toastReducer from './slice/toastSlice'

const rootReducer = combineReducers({
	auth: AuthReducer,
	toast: toastReducer
})
export default rootReducer;

