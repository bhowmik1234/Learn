import socketIO from "socket.io-client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Join from "./component/Join/Join";
import Chat from "./component/chat/Chat";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' Component={Join} />
          <Route path='/chat' Component={Chat} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
