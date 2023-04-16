import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './Components/Blog/Blog'
import Home from './Components/Home/Home'
import ScrollButton from './Components/Home/ScrollButton'
import Navbar from './Components/Navbar'
import Plans from './Components/Plans/Plans'
import Login from './Components/Login'
// import Cheat from './Components/Home/Cheat'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/blog" element={<Blog />} />
            <Route path='/login' element={<Login/>} />
          </Routes>
      </BrowserRouter>
      <ScrollButton />
      {/* <Cheat /> */}
    </div>
  )
}

export default App
