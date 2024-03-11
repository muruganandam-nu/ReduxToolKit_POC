import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/usersSlice";
import { addUser ,deleteUser} from "./slices/usersSlice";
 const store=configureStore({
    reducer:{
        users:userReducer
    }
})
export {addUser,store,deleteUser};