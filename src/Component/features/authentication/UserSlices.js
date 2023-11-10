import { createSlice } from '@reduxjs/toolkit';

const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));



const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: userFromLocalStorage || null,
    },
    reducers: {
        registerUser: (state, action) => {
            state.data = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        loginUser: (state, action) => {
            state.data = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },

        clearUser: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        },
    },
});

export const { registerUser, loginUser } = userSlice.actions;
export const selectUserData = (state) => state.user.data;
export default userSlice.reducer;
