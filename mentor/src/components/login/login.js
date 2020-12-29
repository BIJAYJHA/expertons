import React,{Component,useState} from 'react';
import {connect} from 'react-redux'
import Loading from '../UI/Loading';
import './login.css';
import * as actions from '../../store/actions/index'

const Login=(props)=>{
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [name,setName]=useState(null);
    
   const  handleChange=(event)=>{
         let auth
        console.log("event.target.name===>",event.target.name);
        console.log("event.target.value===>",event.target.value);
       if(event.target.name==='email'){
           let email=event.target.value
           setEmail(email)
       }else if(event.target.name==='password'){
           let password=event.target.value;
          setPassword(password)
       }else{
           let name =event.target.value;
           setName(name);
       }


    }
    // handleLogin=()=>{
    //     let auth={};
    //     auth['email']=this.state.email;
    //     auth['password']=this.state.password;
    //     auth['isSignup']=false;
    // this.props.onWatchAuth(auth);
    // }

        return (
            <div className="login">
                <div>
                    <div className="input-div">
                    <label className="label-for-inputs">email</label>
                    <input type="email" name="email" placeholder="email..." onChange={(event)=>{handleChange(event)}} />
                    </div>
                    <div className="input-div">
                    <label  className="label-for-inputs">password</label>
                    <input type="password"  name="password" placeholder="password" onChange={(event)=>{handleChange(event)}}/>
                    </div>
                    {
                        props.isSignup &&
                        <div className="input-div">
                        <label  className="label-for-inputs">name</label>
                        <input type="text"  name="name" placeholder="name" onChange={(event)=>{handleChange(event)}}/>
                        </div>
                    }
                   <div className="login-button-div">
                    <button className="login-button" onClick={()=>props.handleLogin(email,password,name)}>{props.buttonText}</button>
                   </div>
                </div>
            </div>
        )


  
}

export default Login;