import './App.css'
import Navbar from './Components/Layouts/Navbar'
import { Route, Routes } from "react-router";
import Gallery from './Components/Pages/Gallery';
import Shortcodes from './Components/Pages/Shortcodes';
import About from './Components/Pages/About';
import Languages from './Components/Pages/Languages';
import Home from './Components/Pages/Home';

function App() {
  

  return (
    <>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Gallery" element={<Gallery/>}></Route>
      <Route path="/Shortcodes" element={<Shortcodes/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Languages" element={<Languages/>}></Route>
    </Routes>
    </>
  
  )
}

export default App
