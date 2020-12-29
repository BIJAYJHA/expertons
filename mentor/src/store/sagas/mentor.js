import {put} from 'redux-saga/effects';
import {AxiosService} from '../apis/AxiosService';
import {getUrl,routes} from '../apis/endpoints';

import * as actions from '../actions'

export function * fetchMentors(action){
    yield put(actions.fetchAllMentorStart());
    try{
        const response= yield AxiosService.get(getUrl(routes.getAllMentors));
        console.log("response====>",response);
        yield put(actions.fetchAllMentorSuccess(response.data))

    }catch(error){

        yield put(actions.fetchAllMentorFail(error))
        console.log("error===>",error);

    }
}

export function * updateMentor(action){
    yield put(actions.updateAMentorStart(action));
    try{
        const response=yield AxiosService.post(getUrl(routes.updateMentor),{
            id:action.mentor._id,
            updatedObject:action.mentor
        });

        yield put(actions.updateAMentorSuccess(response.data));

    }catch(error){
        yield put(actions.updateAMentorFail(error));
        console.log("error===>",error);
    }
}

export function * deleteMentor(action){
    yield put(actions.deleteAMentorStart(action));
    try{
        const response=yield AxiosService.post(getUrl(routes.deleteMentor),{
            id:action.mentor._id
        });
        yield put(actions.deleteAMentorSuccess(response.data));
    }catch(error){
        yield put(actions.deleteAMentorFail(error));
        console.log("eroror===>",error);
    }
}

