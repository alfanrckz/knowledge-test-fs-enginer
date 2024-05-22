import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        id: 0,
        name: '',
        email: '',
        product_count: 0
    },
    reducers: {
        get_profile: (state, action) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.email = action.payload.email
            state.product_count = action.payload.product_count
        }
    }
})

export const { get_profile } = profileSlice.actions
export default profileSlice.reducer