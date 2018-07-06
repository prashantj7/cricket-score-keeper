import { createStore } from "redux";
import AllReducers from './reducers/AllReducers';

const matchStore = createStore(
  AllReducers,
);
export default matchStore;