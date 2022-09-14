import { DECREMENT, INCREMENT } from "./types";


const counterReducers = (state = {count:0} , action)=>{
    switch (action.type) {
        case INCREMENT:
            return {...state , count:state.count + 1}
        
        case DECREMENT:
            return {...state , count:state.count -1}
        default:
            break;
    }
   return state
}

export default counterReducers;