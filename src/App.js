import './App.css';
import About from './Components/Home/About';
import Contact from './Components/Home/Contact';
import FAQ from './Components/Home/FAQ';
import Featured from './Components/Home/Featured';
import Home from './Components/Home/Home';
import Individual from './Components/Home/Individual';
import Lanuch from './Components/Home/Lanuch';
import Map from './Components/Home/Map';
import ScrollButton from './Components/Home/ScrollButton';
import Seller from './Components/Home/Seller';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Lanuch />
      <Featured />
      <About />
      <FAQ />
      <Seller />
      <Individual />
      <Contact/>
      <Map />
      <ScrollButton/>
    </div>
  );
}

export default App;
