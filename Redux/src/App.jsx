
import './App.css'
import Addto from './components/Addto'
import Displaytodo from './components/Display'

function App() {

  return (
    <div className='bg-neutral-900 h-screen w-full p-20 flex flex-col items-center'>
      <h1 className='text-5xl text-green-500'>Learn Redux....</h1>
      <Addto />
      <Displaytodo />
    </div>
  )
}

export default App
