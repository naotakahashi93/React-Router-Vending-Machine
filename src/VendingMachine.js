import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import "./VendingMachine.css";
import Cookie from "./Cookie";
import Candy from "./Candy";
import Chips from "./Chips";
import Soda from "./Soda";

const VendingMachine = () =>{

  return (
    <>
      <div id="vending-machine">
      <div>THE SELECTIONS</div>
      <BrowserRouter>
        <div id="vending-machine-options">
        
            <div id="vending-machine-option"><NavLink exact to="/cookie"> COOKIE </NavLink></div>
            <div id="vending-machine-option"><NavLink exact to="/candy"> CANDY </NavLink></div>
            <div id="vending-machine-option"><NavLink exact to="/chips"> CHIPS </NavLink></div>
            <div id="vending-machine-option"><NavLink exact to="/soda"> SODA </NavLink></div>
            <div id="vending-machine-option"><NavLink exact to="/juice"> JUICE </NavLink></div>
            <div id="vending-machine-option"><NavLink exact to="/water"> WATER </NavLink></div>
        </div>
        <div id="vending-machine-out">
          <Route exact path="/cookie">
            <Cookie/>
          </Route>

          <Route exact path="/candy">
            <Candy/>
          </Route>

          <Route exact path="/chips">
            <Chips/>
          </Route>

          <Route exact path="/soda">
            <Soda/>
          </Route>

          <Route exact path="/juice">
            <Soda/>
          </Route>

          <Route exact path="/water">
            <Soda/>
          </Route>

        </div>
        </BrowserRouter> 
      </div>
    </>
    )
    
}


export default VendingMachine;