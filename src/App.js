import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './Components/Blog/Blog';
// import About from './Components/Home/About';
// import Contact from './Components/Home/Contact';
// import FAQ from './Components/Home/FAQ';
// import Featured from './Components/Home/Featured';
import Home from './Components/Home/Home';
// import Individual from './Components/Home/Individual';
// import Lanuch from './Components/Home/Lanuch';
// import Map from './Components/Home/Map';
import ScrollButton from './Components/Home/ScrollButton';
// import Seller from './Components/Home/Seller';
import Navbar from './Components/Navbar';
import Plans from './Components/Plans/Plans';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/plans' element={<Plans/>} />
          {/* <Route path='/' element={<ScrollButton/>} /> */}
          <Route path='/blog' element={<Blog/>} />
        </Routes>
      </BrowserRouter>
      
      {/* <Lanuch /> */}
      {/* <Featured /> */}
      {/* <About /> */}
      {/* <FAQ /> */}
      {/* <Seller /> */}
      {/* <Individual /> */}
      {/* <Contact/> */}
      {/* <Map /> */}
      {/* <ScrollButton/>
      <Plans />
      <Blog /> */}
      <ScrollButton/>
    </div>
  );
}

export default App;
