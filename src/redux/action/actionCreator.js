import { DECREMENT, INCREMENT } from "../reducer/types"

export const incrementFun = (dispatch)=>{

    return dispatch({
        type:INCREMENT
    })
}

export const decrmentFun = (dispatch)=>{
    return dispatch({
        type:DECREMENT
    })
} 