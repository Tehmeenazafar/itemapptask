import { combineReducers } from 'redux';
import { HomeReducer } from './HomeReducer';

const rootReducer = combineReducers({
  HomeReducer: HomeReducer,
  //some more reducer will come
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };