import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
        name: "auth",
        initialState: {
                user:{},
                isAuth: false
        },
        reducers: {
                setIsAuth: (state, action) => {
                        state.user = action.payload;
                        state.isAuth = true;    
                        console.log(state.isAuth);
                        console.log(state.user);
                },
        }
});
export const { setIsAuth } = AuthSlice.actions;
export default AuthSlice.reducer;