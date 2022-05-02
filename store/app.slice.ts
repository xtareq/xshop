import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "."



export interface AppState{
    currency?:string,
    products?:[]
}


const initialState: AppState = {
    currency: "$"
}

const appSlice = createSlice({
    name:"app",
    initialState,
    reducers:{
        SET_PRODUCTS(state,action){
            state.products = action.payload
        }
    }
})



export const { SET_PRODUCTS}  = appSlice.actions
export default appSlice.reducer

export const selectProducts =( state:RootState ) => state.app.products