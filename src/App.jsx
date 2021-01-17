import React from "react";
import Dash from "./Dash";

import Userauth from "./components/login/Userauth"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

class App extends React.Component {
  

  render() {
    
    return (
      <div>
        <Router>
    
     <Switch>
     <Route path="/Userauth">
       <Userauth/>
       
       </Route>
     
     <Route path="/Dash">
       <Dash />
       
      
       </Route>

      </Switch>
  
    </Router>

      </div>
    )
     
    }
}



export default App;
