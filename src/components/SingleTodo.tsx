import { type } from '@testing-library/user-event/dist/type';
import React, { FC } from 'react'
import * as AiIcons from 'react-icons/ai'; 
import * as MdIcons from 'react-icons/md'; 
import { Todo } from '../model';
import './styles.css'

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}:Props) => {
  return (
    <form className='todos-single'>
      <span className="todos-single-text">
        {todo.todo}
      </span>
      <div>
        <span className='icon'>
            <AiIcons.AiFillEdit/ >
        </span>
        <span className='icon'>
            <AiIcons.AiFillDelete />
        </span>
        <span className='icon'>
            <MdIcons.MdDone/>
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
