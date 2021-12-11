import React from 'react';
import myStyles from './styles.module.css'

const TodoListItems = ({todoList, onDelete, isChecked})=>{
    return(
        <ul>
            {todoList.map(todoItem =>{
                const { id, value} = todoItem;
                return <li key={id}>
                <input className={myStyles.checkbox} type="checkbox" onClick={()=> isChecked()}/> 
                {value}
                <button style={myStyles} onClick={()=> onDelete(id)}>X</button>
                </li>
            })}    
        </ul>
    )
}

export default TodoListItems;