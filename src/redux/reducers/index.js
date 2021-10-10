import { combineReducers } from 'redux'
import languageReducer from "./languageReducer";
import workPlaceReducer from "./workPlaceReducer";
import authReducer from "./authReducer";
import planReducer from "./planReducer";
import commonReducer from "./commonReducer";
import shopReducer from "./shopReducer";
import itemReducer from "./itemReducer";
import orderReducer from "./orderReducer";
import userReducer from "./userReducer";

export default combineReducers({
    languageState: languageReducer,
    workPlaceState: workPlaceReducer,
    authState: authReducer,
    planState: planReducer,
    commonState: commonReducer,
    shopState: shopReducer,
    itemState: itemReducer,
    orderState: orderReducer,
    userState: userReducer
})
