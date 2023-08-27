import Home from'./components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form'

const App = () => {
  return (
   <BrowserRouter>

     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/form" element={<Form/>} />
     </Routes>
    
   </BrowserRouter>
  )
}

export default App