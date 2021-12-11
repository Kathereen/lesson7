
import React from 'react';
import Header from '../Header';
import SubmitForm from '../SubmitForm'
import TodoListItems from '../TodoListItems/insex';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      todoList: [],
      isChecked: ''
    } 
    this.handleAddTodolist = this.handleAddTodolist.bind(this); 
    this.handleDel = this.handleDel.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleAddTodolist(todoItem){
    const todoList = [...this.state.todoList, todoItem];
    this.setState({todoList}) 
  }
  handleDel(id){
    const filter = this.state.todoList.filter(item => item.id !==id);
    this.setState({
      todoList: filter
    })
  }
  handleCheck(){
    this.setState({
      isChecked: 'checked'
    })
  }
  render(){
    const todoCount = this.state.todoList.length;
    console.log(this.state.todoList)
    return (
      <div className="App">
        <Header todoCount={todoCount}/>
        <SubmitForm onAddTodoList={this.handleAddTodolist}/>
        <TodoListItems todoList={this.state.todoList} onDelete={this.handleDel} isChecked={this.handleCheck} />
      </div>
    );
}
}

export default App;
