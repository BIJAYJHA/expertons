const baseURL="http://127.0.0.1:8000/api"

export const routes={
    saveMentor:'/mentor/savementor',
    getAllMentors:'/mentor/getallmentors',
    getOneMentor:'/mentor/getmentor',
    updateMentor:'/mentor/updatementor',
    deleteMentor:'/mentor/deletementor',
    signupAdmin:'/auth/signup',
    loginAdmin:'/auth/login'
}

export const getUrl = (key) => {
    return baseURL + key;
}