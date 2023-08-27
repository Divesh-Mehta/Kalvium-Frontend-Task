import Home from'./components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import Success from './components/Success'

const App = () => {
  return (
   <BrowserRouter>

     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/success" element={<Success/>} />
     </Routes>
    
   </BrowserRouter>
  )
}

export default App