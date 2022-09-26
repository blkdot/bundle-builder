import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItemType, BundleType } from '../../utils/types';

const initialState: BundleType = {
  addedItems:[],
  total: 0
}

export const bundleSlice = createSlice({
  name: 'bundle',
  initialState,
  reducers: {
    addToBundle: (state: BundleType, action: PayloadAction<CartItemType>) => {
      let cart = action.payload;

      for (let i = 0; i < state.addedItems.length; i++) {
        if (state.addedItems[i].cart.id === cart.id) {
          return {
            addedItems: [...state.addedItems.slice(0, i), {cart: cart, count: state.addedItems[i].count + 1}, ...state.addedItems.slice(i + 1, state.addedItems.length)],
            total: state.total
          }
        }
      }

      if (state.total < 3) {
        return {
          addedItems: [...state.addedItems, {cart: cart, count: 1}],
          total: state.total + 1
        }
      }
    },

    removeFromBundle: (state: BundleType, action: PayloadAction<CartItemType>) => {
      if (state.total > 0) {
        let cart = action.payload;
        for (let i = 0; i < state.addedItems.length; i++) {
          if (state.addedItems[i].cart.id === cart.id) {
            if (state.addedItems[i].count > 1) {
              return {
                addedItems: [...state.addedItems.slice(0, i), {cart: cart, count: state.addedItems[i].count - 1}, ...state.addedItems.slice(i + 1, state.addedItems.length)],
                total: state.total
              }
            } else {
              return {
                addedItems: [...state.addedItems.slice(0, i), ...state.addedItems.slice(i + 1, state.addedItems.length)],
                total: state.total - 1
              }
            }
          }
        }
      }
    },
  },
})

export const { addToBundle, removeFromBundle } = bundleSlice.actions

export default bundleSlice.reducer
