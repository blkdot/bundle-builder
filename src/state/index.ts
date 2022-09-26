import { configureStore } from '@reduxjs/toolkit';
import bundleReducer from './bundle';

const store = configureStore({
  reducer: {
    bundle: bundleReducer
  },
});

export default store;