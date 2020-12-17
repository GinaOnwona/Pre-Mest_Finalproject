import React from 'react';
import './Home.css'


function Home() {
    return (
    <div>
        <div className="home">
            <div className="row end-xs">
                 <div className="col-xs-6">
                     <div className="box"> </div>
                </div>
            </div> 
            
        </div> 

        <div>
              <div className="start-xs">
                <div className="col-xs-6">
                <div className="box">
                    <h2>Gain Total Control of Your Money</h2> 
                    <p>When you’re on top of your money, life is good. We help you
                     effortlessly manage your finances in one place. </p>        
                    <p>Stop checking when next is payday by having full control over your finances</p> 
                    
                    <button>Start Now</button>
            </div>
                </div>
            </div>
        {/* <div className="row">
                <div className="col-md-6"></div>
        </div> */}
   
        {/* <h2>Gain Total Control of Your Money</h2>
            <p>Stop checking when next is payday by having full control over your finances</p> 
            <button>Start Now</button> */}
        </div>
    </div>
    )
}

export default Home;
