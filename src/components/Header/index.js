import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <h2>There are {this.props.todoCount} todos</h2>
        )
    }
}
export default Header;