import React, { FC, useRef, useState } from "react";
import './styles.css';

// let file: File;
// const [file:File , setFile] = useState('')

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}:Props) => {
    const input = useRef<HTMLInputElement>(null)
  
    return (
    <form className="input"
    onSubmit={(e) =>{
        handleAdd(e)
        input.current?.blur()
    }}>
      
      <input className="input-box" 
      type="input" 
      ref={input} 
      placeholder="Enter a task" 
      value={todo} 
      onChange={(e)=>setTodo(e.target.value)}/>
      
      <button className="input-submit" 
      type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
