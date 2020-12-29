import {call, put} from 'redux-saga/effects';
import {AxiosService} from '../apis/AxiosService';
import {getUrl,routes} from '../apis/endpoints';

import * as actions from '../actions'

export function * checkAuth(action){
    yield put(actions.watchAuthStart(action));
    try{
        console.log(action);
        if(action.auth.isSignup){
            const responseData= yield (AxiosService.post(getUrl(routes.signupAdmin),{
                email:action.auth.email,
                password:action.auth.password,
                name:action.auth.name
            }))
            yield put(localStorage.setItem('userId',responseData.data._id))
            yield put(actions.watchAuthSuccess(responseData.data))
        }else{
            const responseData= yield (AxiosService.post(getUrl(routes.loginAdmin),{
                email:action.auth.email,
                password:action.auth.password,
               
            }));
            console.log("response.data===>",responseData);
            yield localStorage.setItem('userId',responseData.data._id)
            yield put(actions.watchAuthSuccess(responseData.data))

        }

    }catch(error){
        console.log("error====>",error);
       yield put(actions.watchAuthFail(error));
     
}
}

export function * authLogout(action){
    console.log("in logout saga");
    yield call([localStorage,'removeItem'],"userId")
    yield put(actions.logoutSucced());
}