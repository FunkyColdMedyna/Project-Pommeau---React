import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return { ...state, currentUser: action.payload }
        },
        logoutUser: (state) => {
            return { ...state, currentUser: null }
        }
    }
})

export const userReducer = userSlice.reducer
export const { setCurrentUser, logoutUser } = userSlice.actions
export const selectCurrentUser = (state) => state.user.currentUser