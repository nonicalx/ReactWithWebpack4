import React from 'react'
import Royale from './images/royale.PNG'
import Victory from './images/victory.gif'
import './app.css'


const App =()=>{


    return(
        <div className="app">
            <h1>4 pack React</h1>
            <p>off to a good start Amen!</p>
            <div>
            <img src={Victory}/>
            <img src={Royale}/>
            </div>
        </div>
    )
}

export default App;