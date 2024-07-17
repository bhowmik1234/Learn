import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/reducer/slices';

const Addto = () => {
    const [input, setInput] = React.useState('');
    const dispatch = useDispatch();

    const addHandler = (e) =>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

  return (
    <div className=' p-5 m-5 w-full'>
        <form onSubmit={addHandler} className='flex gap-4 p-5 border-2 rounded-md w-full '>
                <input 
                    type="text"
                    placeholder='Enter the data..'
                    className='w-full bg-stone-500 rounded-md outline-none bg-zinc-800 p-4 focus:outline-green-700 text-gray-200'
                    onChange={(e)=> setInput(e.target.value)}
                    value={input}
                />
                <button type="submit" className='bg-amber-500 p-4 rounded-md'> Add </button>
        </form>
    </div>
  )
}

export default Addto