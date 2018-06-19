import { createStore } from 'redux';
import reducer from './reducer/reducer';

const store = createStore(reducer);
export default store;
// tich hop vao trong ung dung react - provider => 1 component -> 1 props -> 1 state
