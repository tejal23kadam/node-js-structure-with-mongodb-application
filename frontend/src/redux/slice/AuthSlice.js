import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
        name: "auth",
        initialState: {
                user: {},
                isAuth: false
        },
        reducers: {
                setIsAuth: (state, action) => {
                        state.user = action.payload;
                        console.log("state.user" + JSON.stringify(state.user))
                        state.isAuth = true;
                },
                unSetIsAuth: (state, action) => {
                        state.user = {};
                        state.isAuth =false;
                },
        }
});
export const { setIsAuth,unSetIsAuth } = AuthSlice.actions;
export default AuthSlice.reducer;