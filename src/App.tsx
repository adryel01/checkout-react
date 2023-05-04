// import { useState } from 'react'
import './App.css'
import Router from './routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router/>
      <ToastContainer/>
    </>
  )
}

export default App
