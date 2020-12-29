import React,{Component} from 'react';
import {connect} from 'react-redux'

import Login from '../components/login/login';
import Error from '../components/UI/Error/Error';
import  './Auth.css';

import * as actions from '../store/actions/index';



export class Auth extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            buttonText:'Login',
            login:true,
            signup:false,
            openModal:false,
        }
    }

    componentDidMount(){
        console.log(this.props);
    }
    handleLogin=(email,name,password)=>{
        console.log("handling login...")
        console.log(name,email,password);
        let auth={};
        auth['email']=email;
        auth['password']=password;
        if(this.state.signup){
            auth['name']=name
        }
        auth['isSignup']=this.state.signup;
       const getData= this.props.onWatchAuth(auth);
       console.log("getData===>",getData);
       if(this.props.userId){
           this.props.history.push('/home');
       }
        

    }

    handleTextForButton=()=>{
        if(this.state.login){
            let buttonText='Signup';
            this.setState({login:false,signup:true,buttonText:buttonText})
        }else{
            let buttonText='Login'
            this.setState({login:true,signup:false,buttonText:buttonText})
        }

    }
    openModal=()=>{
    console.log("this is formopening the modal");
    if(this.state.openModal){
        console.log("open the modal...");
        this.setState({openModal:false});
    }else{
        this.setState({openModal:true});
    }
   }
   cancelModal=()=>{
    this.setState({openModal:false});
}


    render(){
        // let authComponent=this.state.login? <Login/> :<Signup/>
        const style={
            'color':'#343a40cc'
        }
        let useComponent=null;
        if(this.props.error){
         useComponent=<Error show={this.state.openModal} modalClosed={this.cancelModal}/>
        }
        return(
            <div>
                    <div className="scratch">
                  
                    <div>
                    <p>Admin Login</p>
                    </div>
                        <div className="button-div">
                       <div className="login-text" style={{color:!this.state.login ? '#343a404d': null}}  onClick={this.handleTextForButton}> login</div>
                        <div className="login-text" style={{color:!this.state.signup ? '#343a404d': null}}  onClick={this.handleTextForButton}>signup</div>
                        </div>
                       
                    
                </div>
            <div className="auth">
           
          <Login isSignup={this.state.signup} buttonText={this.state.buttonText} handleLogin={(email,name,password)=>{this.handleLogin(email,name,password)}} />
            {useComponent}
          </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        loading:state.auth.loading,
        error:state.auth.error,
        userId:state.auth.userId
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onWatchAuth:(auth)=>dispatch(actions.watchAuth(auth))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth);