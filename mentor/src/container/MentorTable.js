import React,{Component} from 'react';
import {connect} from 'react-redux'

import DynamicTable from '../components/Table';
import Loading from '../components/UI/Loading';
import Modal from '../components/UI/Modal/Modal'
import Auxiliary from '../HOC/Auxiliary';
import * as actions from '../store/actions/index';
import './MentorTable.css'

export class MentorTable extends Component{
    constructor(props){
        super(props);
        this.state={
            openModal:false,
            mentor:null
        }
    }

    componentDidMount(){
        console.log("in component did mount")
        //this.props.onFetchMentors();
        console.log(this.props.onFetchMentors());
    }

    componentDidUpdate(){
        console.log(" in component did update")
    }
    onDelete=(event,mentor)=>{
         event.stopPropagation();
         console.log("in delete====");
        console.log("mentor====>",mentor);
        this.props.deleteMentor(mentor)
       
    }

    handleLogout=()=>{
        this.props.onLogout();
        this.props.history.push('/auth')

    }

    openModal=(mentor)=>{
        console.log(mentor);
        this.setState({mentor:mentor})
        this.props.fetchOneMentor(mentor);
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
        let useComponent=null;
        if(this.props.loading){
            useComponent=<Loading/>
        
        }else{
            if(this.props.mentor && this.props.mentor.length!==0){
                useComponent= <DynamicTable  mentors={this.props.mentor} delete={(event,mentor)=>{this.onDelete(event,mentor)}} click={(mentor)=>this.openModal(mentor)}/>
            }else{
                useComponent=null;
            }
          
        }
        // 
        return(
        <Auxiliary>
              <div className="scratch">
                  
                  <div>
                  <p>Mentor Table</p>
                  </div>
                      <div className="button-div">
                     <div className="logout-text"   onClick={this.handleLogout}>logout</div>
                      </div>
                     
                  
              </div>
            <Modal show={this.state.openModal} modalClosed={this.cancelModal}/>
            <div className="table-div">
            {useComponent} 
            </div>
          
        </Auxiliary>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log("state====>",state);
    return {
        mentor:state.mentor.mentors,
        loading:state.mentor.loading
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onFetchMentors:()=>dispatch(actions.fetchAllMentorData()),
        fetchOneMentor:(mentor)=>dispatch(actions.chooseAMentor(mentor)),
        deleteMentor:(mentor)=>dispatch(actions.deleteAMentor(mentor)),
        onLogout:()=>dispatch(actions.logout())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MentorTable);