import React from "react";
import { Route, Router,Routes } from "react-router-dom";
import Home from "./Home";
import Facilities from "./Facilities";
import Rooms from "./Rooms";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";

const App=()=>{
  return(
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/facilities" Component={Facilities} />
      <Route exact path="/rooms" Component={Rooms} />
      <Route exact path="/contact" Component={Contact} />
      <Route path="*" Component={Error} />
    </Routes>
    </>
  )
}
export default App;