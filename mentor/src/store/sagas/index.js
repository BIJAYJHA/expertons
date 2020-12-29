import {takeEvery,all,takeLatest} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionsTypes';
import {fetchMentors,updateMentor,deleteMentor} from './mentor';
import {checkAuth,authLogout} from './auth';
import { autghLogout } from '../reducers/auth';


export function * watchMentors(){
    yield takeEvery(actionTypes.DELETE_A_MENTOR,deleteMentor);
    yield takeEvery(actionTypes.UPDATE_A_MENTOR_DATA,updateMentor);
    yield  takeEvery(actionTypes.FETCH_ALL_MENTOR_DATA,fetchMentors)

    
}

export function * watchAuth(){
    yield takeEvery(actionTypes.AUTH_SIGNUP,checkAuth);
    yield takeEvery(actionTypes.AUTH_LOGOUT,autghLogout);

}

