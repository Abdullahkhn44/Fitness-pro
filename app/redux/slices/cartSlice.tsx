import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state

interface cartItem{
    id: number;
    productName: string;
    productPrice: string;
    imageSource: any;
}
 
interface CartState {
    value: cartItem[]
}

// Define the initial state using that type
const initialState: CartState = {
    value: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state,action) => {
            state.value.push(action.payload)
        },

    },
})

export const { addToCart } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default cartSlice.reducer