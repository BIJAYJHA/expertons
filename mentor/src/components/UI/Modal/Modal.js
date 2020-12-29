import React,{Component} from 'react';
import Form from 'react-bootstrap/Form'
import {connect} from 'react-redux';

import Backdrop from '../Backdrop/Backdrop';
import Auxiliary from '../../../HOC/Auxiliary';
import * as actions from '../../../store/actions/index' 
import './Modal.css';


class Modal extends Component{

    constructor(props){
        super(props);
        this.state={
            subject:''
        }
       
    }
    componentWillUpdate(){
        console.log("[Modal] will update");

        console.log("this.props.mentor===>",this.props.mentor);
    }

    handleChange=(event)=>{
        console.log("event===>",event.target.value);
        const value=event.target.value;
        this.setState({
            subject:value
        })
      
    }
    handleSubmit=()=>{
       
            const _id=this.props.mentor["_id"];
            let subject=this.state.subject;
            subject=subject.split(",");
            const mentor=this.props.mentor;
            mentor['subjects'].push([subject.pop()]);
            console.log("mentor===>",mentor);
           this.props.updateMentor(mentor)

       
   
    }

    render(){
        return(
            <Auxiliary>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
         className="Modal"
         style={{
             transform:this.props.show ? 'translateY(0)':'translateY(-100vh)',
             opacity:this.props.show ? '1':'0'
         }}>
              {this.props.mentor && 
      <form>
        <label>
          Name:
         <input type="text" value={this.props.mentor.name} readOnly={true}/>
        </label>
        <label>
          email:
         <input type="text" value={this.props.mentor.email} readOnly={true}/>
        </label>
        <label>
          subjects:
         <input type="text" defaultValue={this.props.mentor.subjects.join(',')} onChange={(e)=>this.handleChange(e)}/>
        </label>
        <label>
          experience:
         <input type="text" value={this.props.mentor.experience} readOnly={true}/>
        </label>
        <label>
          company:
         <input type="text" value={this.props.mentor.company} readOnly={true}/>
        </label>
        <label>
          designation:
         <input type="text" value={this.props.mentor.designation} readOnly={true}/>
        </label>
        <label>
          education:
         <input type="text" value={this.props.mentor.education} readOnly={true}/>
        </label>
       <input className="update-button" type="submit" value="Update" onClick={this.handleSubmit} />
        </form>
    }
     </div>
        
      
        </Auxiliary>
    
      

        )
    }
}

const mapStateToProps=(state)=>{
    console.log("state====>",state);
    return {
        mentor:state.mentor.mentor
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        updateMentor:(mentor)=>dispatch(actions.updateAMentor(mentor))
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(Modal);