import { createSlice } from "@reduxjs/toolkit";

const usersSlice=createSlice({
    name:'users',
    initialState:[],
    reducers:{
        addUser(state,action){
            // state.push(action.payload)
            return [...state,action.payload]
        },
        deleteUser(state,action){
            const {name}=action.payload;
            return state.filter((user)=>user.name!==name)

        }
    }
})

export const {addUser,deleteUser}=usersSlice.actions
export default usersSlice.reducer;