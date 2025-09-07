import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Chat from './Chat';

function App() {
  return (
    <>
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/chat' element={<Chat/>}></Route>
      </Routes>
    </>
  )
}

export default App
