import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../../services/utility';


const intialState={
    mentors:[],
    mentor:null,
    loading:false
}

const fetchMentorDataStart=(state,action)=>{
    return updateObject(state,{
        loading:true
    })
}

const fetchMentorDataSuccess=(state,action)=>{
    const mentors=action.mentors;
    return updateObject(state,{
        loading:false,
        mentors:mentors
    })
}

const fetchMentorDataFail=(state,action)=>{
    return updateObject(state,{
        loading:false
    })
}

const chooseAMentor=(state,action)=>{
    const mentor=action.mentor;
    return updateObject(state,{
        mentor:mentor
    })
}

const updateAMentorStart=(state,action)=>{
    return updateObject(state,{
        loading:true
    })
}

const updateAMentorSuccess=(state,action)=>{
    const mentor=action.mentor;
    return updateObject(state,{
        loading:false,
        mentor:mentor
    })
}

const updateAMentorFail=(state,action)=>{
    return updateObject(state,{
        loading:false
    })
}

export const deleteAMentorStart=(state,action)=>{
    return updateObject(state,{
        loading:true
    })
}

export const deleteAMentorSuccess=(state,action)=>{
    console.log("actions====>",action);
    const deletedMentor=action.mentors;
    const oldMentors=state.mentors;
    console.log(deletedMentor);
    console.log(oldMentors);    
    const newMentors= oldMentors.filter((mentor)=>{
        if(mentor["_id"]!== deletedMentor["_id"]){
            return mentor;
        }
    })
    return updateObject(state,{
        loading:false,
        mentors:newMentors
    })
}

export const deleteAMentorFail=(state,action)=>{
    return updateObject(state,{
        loading:false
    })
}


const reducer=(state=intialState,action)=>{
    switch(action.type){

        case actionTypes.FETCH_ALL_MENTOR_DATA_START:return fetchMentorDataStart(state,action);
        case actionTypes.FETCH_ALL_MENTOR_DATA_SUCCESS:return fetchMentorDataSuccess(state,action);
        case actionTypes.FETCH_ALL_MENTOR_DATA_FAIL:return  fetchMentorDataFail(state,action);
        case actionTypes.TAKE_A_MENTOR: return  chooseAMentor(state,action);
        case actionTypes.UPDATE_A_MENTOR_DATA_START: return updateAMentorStart(state,action);
        case actionTypes.UPDATE_A_MENTOR_DATA_SUCCESS:return updateAMentorSuccess(state,action);
        case actionTypes.UPDATE_A_MENTOR_DATA_FAIL:return updateAMentorFail(state,action);
        case actionTypes.DELETE_A_MENTOR_START:return deleteAMentorStart(state,action);
        case actionTypes.DELETE_A_MENTOR_SUCCESS:return deleteAMentorSuccess(state,action);
        case actionTypes.DELETE_A_MENTOR_FAIL:return deleteAMentorFail(state,action);

        default:
            return state;

    }
}

export default reducer;

