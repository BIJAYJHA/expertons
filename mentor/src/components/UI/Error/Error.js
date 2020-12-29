import react,{Component} from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Auxiliary from '../../../HOC/Auxiliary';

import './Error.css';

class Error extends Component{
    constructor(props){
        super(props);
    }
    
    componentWillUpdate(){
        console.log("[Modal] will update");
    }

    render(){
        return (
            <Auxiliary>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
         className="error"
         style={{
             transform:this.props.show ? 'translateY(0)':'translateY(-100vh)',
             opacity:this.props.show ? '1':'0'
         }}>
             Something went wrong!!
             </div>
            </Auxiliary>
        )
    }
}

export default Error;