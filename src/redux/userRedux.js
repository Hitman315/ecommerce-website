import {createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:"user",
    initialState:{
        currentUser:"",
        isFetching:false,
        error:false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching=true
        },
        loginSuccess:(state,action)=>{
            state.isFetching=false;
            state.currentUser=action.payload;
            

        },
        loginFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        }, 
        logout: (state) => {
            state.currentUser = "";
          },
          registerStart: (state) => {
            state.isFetching = true;
          },
          registerSuccess: (state) => {
            state.isFetching = false;
            state.error = false;
          },
          registerFailure: (state) => {
            state.isFetching = false;
            state.error = true;
          },

    }
})


export const {loginStart,loginSuccess,loginFailure,logout,registerStart,registerSuccess,registerFailure}=userSlice.actions;
export default userSlice.reducer;
