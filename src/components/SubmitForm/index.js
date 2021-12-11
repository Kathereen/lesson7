import React from "react";
import { v4 } from "uuid";
import logo from './icons.png'
import PropTypes from 'prop-types';

class SubmitForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            
        }
    }
    handleChange(e){
        const value = e.target.value;
        this.setState({
            value
        });
    }
    handleSubmit(e){
        e.preventDefault();

        if(this.state.value){
            this.props.onAddTodoList({
                id: v4(),
                value: this.state.value
            });
            this.setState({
                value:' '
            });
        }
    }
    render(){
        const btn = {
            width: '60px',
            height: '48px',
            marginTop:'20px'
        }
        
        return(
            <form>
            <input type='text' value={this.state.value} onChange={(e)=> this.handleChange(e)}/>
            <img src={logo} onClick={(e)=>this.handleSubmit(e)} style={btn} disabled/>
            
            </form>
        )
    }
}
export default SubmitForm;