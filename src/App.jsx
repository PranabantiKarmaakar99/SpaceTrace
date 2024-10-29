import Chart from "./Pages/Chart";
import { LandingPage } from "./Pages/LandingPage";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import {Signin} from "./Pages/Signin";
import {Signup}  from "./Pages/Signup";
import {About} from "./Pages/About";
import Navbar from "./Navbar";
import { Hero } from "./Components/Hero";
import VideoBackground from "./Components/VideoBackGround";
import Chart2 from "./Pages/Chart2";
import { ChartInfo } from "./Pages/ChartInfo";




export default function App() {
  return (

   <BrowserRouter>
     <VideoBackground />
    <Navbar />
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/signin" element ={<Signin/>} />
        <Route path="/signup" element ={<Signup/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path="/chart" element={<Chart/>} />
        <Route path="/chart2" element={<Chart2/>} />
        <Route path="/chartinfo" element={<ChartInfo/>} />
    </Routes>

   </BrowserRouter>
  )
}
