import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    const [Login, setLogin]= useState(true)


    return (
        <div className="Nav">
             <ul>
            {
            Login
            
            ?
            <>
            {/* <Link to = '/'>{""}<li>Home</li></Link> */}
            {/* <Link to = '/SignUp'>{""}<li>SignUp</li></Link> */}
            <Link to ='/Login'><li>Login</li></Link>
            <Link to ='/Blog'><li>Blog</li></Link>
            <Link to ='/Home'><li>Home</li></Link>
            <Link to ='/Expenses'><li>Expenses</li></Link>
            <Link to ='/Income'><li>Income</li></Link>
            <Link to ='/Dashboard'><li>Dashboard</li></Link>
            </>
            :
            <>

            </>
        
        
        }

        </ul>

                </div>
   )
}

{/* <div>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">A2K</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Login</a></li>
      <li><a href="#">Expense</a></li>
      <li><a href="#">Income</a></li>
      <li><a href="#">Dashboard</a></li>
    </ul>
  </div>
</nav>
</div> */}
    

