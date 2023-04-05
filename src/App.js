import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './Components/Blog/Blog'
import Home from './Components/Home/Home'
import ScrollButton from './Components/Home/ScrollButton'
import Navbar from './Components/Navbar'
import Plans from './Components/Plans/Plans'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
      <ScrollButton />
    </div>
  )
}

export default App
