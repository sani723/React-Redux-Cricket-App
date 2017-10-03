import storeFactory from './Factory';

// sets initialState from localStorage
const initialState = (localStorage['cricket-store']) ? JSON.parse(localStorage['cricket-store']) : {};

// saves state function
const saveState = () => (localStorage['cricket-store'] = JSON.stringify(store.getState()));

// creates store
const store = storeFactory(initialState);

// saves state to localStorage every time state changes
store.subscribe(saveState);

export default store;
