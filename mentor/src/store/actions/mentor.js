import * as actionTypes from './actionsTypes';



export const fetchAllMentorSuccess=(mentorData)=>{
    return {
        type:actionTypes.FETCH_ALL_MENTOR_DATA_SUCCESS,
        mentors:mentorData
    }
}

export const fetchAllMentorFail=(error)=>{
    return {
        type:actionTypes.FETCH_ALL_MENTOR_DATA_FAIL,
        error:error
    }
}

export const fetchAllMentorStart=()=>{
    console.log("fetch all mentir StaticRange..");
    return{
        type:actionTypes.FETCH_ALL_MENTOR_DATA_START
    }
}

export const fetchAllMentorData=()=>{
    console.log("fetch all memtor data...")
    return{
        type:actionTypes.FETCH_ALL_MENTOR_DATA
    }
}

export const chooseAMentor=(mentor)=>{
    return{
        type:actionTypes.TAKE_A_MENTOR,
        mentor:mentor
    }
}

export const updateAMentor=(mentor)=>{
    console.log("in update a mentor");
    return {
        type:actionTypes.UPDATE_A_MENTOR_DATA,
        mentor:mentor
    }
}

export const updateAMentorStart=(mentor)=>{
    return {
        type:actionTypes.UPDATE_A_MENTOR_DATA_START,
        mentor:mentor
    }
}
export const updateAMentorSuccess=(updateData)=>{
    return {
        type:actionTypes.UPDATE_A_MENTOR_DATA_SUCCESS,
        mentor:updateData
    }
}
export const updateAMentorFail=(error)=>{
    return{
        type:actionTypes.UPDATE_A_MENTOR_DATA_FAIL,
        error:error
    }
}

export const deleteAMentor=(mentor)=>{
    console.log("in delete mentor");
    return {
        type:actionTypes.DELETE_A_MENTOR,
        mentor:mentor
    }
}

export const deleteAMentorStart=(mentor)=>{
    return {
        type:actionTypes.DELETE_A_MENTOR_START,
        mentor:mentor
    }
}

export const deleteAMentorSuccess=(mentors)=>{
    return {
        type:actionTypes.DELETE_A_MENTOR_SUCCESS,
        mentors:mentors
    }
}

export const deleteAMentorFail=(error)=>{
    return {
        type:actionTypes.DELETE_A_MENTOR_FAIL,
        error:error
    }
}