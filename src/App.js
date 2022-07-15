import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = ()=> {
  const pageSize = 6;
  const apiKey = "892570ce51a2462099479cfce3bf2a33"
  const [progress, setProgress] = useState(0)
  
  

  
   
    return (
      <>
      <div>
        
       
        
        <Router>
        <NavBar/>

        <LoadingBar
        height={4}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey}    key="general" pageSize={pageSize}  category="general"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey}   key="business" pageSize={pageSize}  category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey}   key="entertainment" pageSize={pageSize}  category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey}   key="general" pageSize={pageSize}  category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey}   key="health" pageSize={pageSize}  category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey}   key="science" pageSize={pageSize} category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey}   key="sports" pageSize={pageSize}  category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey}   key="technology" pageSize={pageSize}  category="technology"/></Route> 
        </Switch>
        </Router>
        
      </div>
      </>
    )
 
}

export default App;
