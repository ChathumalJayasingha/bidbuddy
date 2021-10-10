import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, createTransform } from "redux-persist";
import { createWhitelistFilter } from 'redux-persist-transform-filter';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from '../reducers';

const persistConfig = {
    key: 'root',
    storage : AsyncStorage,
    blacklist: ['workPlaceState','planState','commonState','shopState','itemState','orderState','userState'],
    transforms: [

      // store the language selection
      createWhitelistFilter('languageState', ['selectedLanguage', 'textList']),
      createTransform(
        state => state,
        state =>
          Object.assign({}, state, {
              languageState: state.languageState,
          }),
        {
            whitelist: 'languageState'
        }
      ),
      // store the authentication related data
      createWhitelistFilter('authState', ['userSuccess']),
      createTransform(
        state => state,
        state =>
          Object.assign({}, state, {
            authState: state.authState,
          }),
        {
          whitelist: 'authState'
        }
      )
    ]
};

const middleWares = [thunk];
const enhancer = applyMiddleware(...middleWares);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  enhancer
)

let persistor = persistStore(store);

export {
    store,
    persistor,
};
