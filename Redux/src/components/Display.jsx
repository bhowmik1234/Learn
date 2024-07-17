import React from 'react'
import { removeTodo } from "../features/reducer/slices";
import { useSelector, useDispatch } from 'react-redux';

const Displaytodo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

  return (
    <div className='w-full p-5 m-5 '>
        <h1 className='text-xl text-gray-300'>Listed Todos </h1>
        {
            todos.map((todo)=>(
                <div key={todo.id} className='mt-4 p-5 flex justify-between items-center gap-3 w-full rounded-md bg-zinc-700 text-white'>
                    {todo.text}
                    <button onClick={() => dispatch(removeTodo(todo.id))} className='py-2 px-4 bg-red-800 rounded-md'>X</button>
                </div>
            ))
        }
        
    </div>
  )
}

export default Displaytodo