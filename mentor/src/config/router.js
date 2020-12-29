import Auth from '../container/Auth';
import MentorTable from '../container/MentorTable';

export const routes=[
    {path:'/home',component:MentorTable},
    {path:'/auth',component:Auth},
    {path:'/',exact:true,redirectTo:localStorage.getItem('user_id')?'/home':'/auth'}
]