
import Index from "./components/nav/Index";
import Hero from "./components/hero/Index";
import Footer from "./components/footer/Index";
import React from "react";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Index />
    <Footer />
 
    </div>
  );
}

export default App;
