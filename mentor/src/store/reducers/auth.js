import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../../services/utility';

const initialState={
  
    userId:null, 
    loading:false,
     error:null
}

const authStart=(state,action)=>{
  return  updateObject(state,{
        loading:true
    })


}

export const authSuccess=(state,action)=>{
    console.log(" in auth success",action);
   let userId=action.auth['_id'];
   return updateObject(state,{
        userId:userId
    })
}

export const authFail=(state,action)=>{
    console.log("in auth fail",action);
    return  updateObject(state,{
        loading:false,
        error:action.error
    })
}

export const autghLogout=(state,action)=>{
    return updateObject(state,{
     userId:null
    })
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.AUTH_START:return authStart(state,action);
        case actionTypes.AUTH_SUCCESSS:return authSuccess(state,action);
        case actionTypes.AUTH_FAIL:return  authFail(state,action)
        case actionTypes.AUTH_LOGOUT:return autghLogout(state,action);
        default:
            return state;
    }

}
export default reducer;