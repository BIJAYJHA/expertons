import *  as actionsTypes from '../actions/actionsTypes';



export const watchAuth=(auth)=>{
    return{
        type:actionsTypes.AUTH_SIGNUP,
        auth:auth
    }
}

export const watchAuthStart=(auth)=>{
    return{
        type:actionsTypes.AUTH_START,
        auth:auth
    }
}

export const watchAuthSuccess=(auth)=>{
    return{
        type:actionsTypes.AUTH_SUCCESSS,
        auth:auth
    }
}


export const watchAuthFail=(error)=>{
    return{
        type:actionsTypes.AUTH_FAIL,
        error:error
    }
}

export const logout=()=>{
    // localStorage.removeItem('token');
    // localStorage.removeItem('expirationDate');
    // localStorage.removeItem('userId');
    console.log("calling logout actions");
    return{
        type:actionsTypes.AUTH_INITIATE_LOGOUT
    }

}

export const logoutSucced=()=>{
    return{
        type:actionsTypes.AUTH_LOGOUT
    }
}