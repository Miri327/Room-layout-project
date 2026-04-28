import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Routing } from './Routing/Routing'
import { Navbar } from './Routing/Navbar'
import { Users } from './Components/Users'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routing></Routing>
      </BrowserRouter>
    </>
  )
}



export default App
