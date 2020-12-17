import React,  {useState, useEffect} from 'react';
import Login from "./components/Pages/Login";
// import Home from "./Components/Home";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import NavBar from "./components/Pages/NavBar"
import SignUp from './components/Pages/SignUp';
import Blog from './components/Pages/Blog';
import Home from './components/Pages/Home';
import Dashboard from './components/Pages/Dashboard';
import Expenses from './components/ExpensePage/Expenses';
import Income from './components/IncomePage/Income';






function App() {
  
  return (
    <div>
      <h1 className="header">A2K.</h1>
   <BrowserRouter>
    <NavBar/>
  
    <Switch>
      
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='/blog' component={Blog} />
      <Route path='/home' component={Home} />
      <Route path='/expenses' component={Expenses} />
      <Route path='/income' component={Income} />
      <Route path='/dashboard' component={Dashboard} />
        
        </Switch>        
    </BrowserRouter>
   
   
      
    </div>

  )
}

export default App;
