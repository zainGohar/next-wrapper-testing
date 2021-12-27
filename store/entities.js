import { combineReducers } from "redux";
import transactionData from './transactionData';

export default combineReducers(
    
    {
    transaction: transactionData,
    // sidebar: sidebar,
    // credentials: credentials,
    
});