import { combineReducers } from 'redux';
import arrWordsReducer from './arrWordsReducer';
import filterStatesReducer from './filterStatesReducer';
import isAddingReducer from './isAddingReducer';

const reducer = combineReducers({
  arrWords: arrWordsReducer,
  filterStates: filterStatesReducer,
  isAdding: isAddingReducer,

});

export default reducer;
