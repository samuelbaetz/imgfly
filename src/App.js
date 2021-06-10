import './App.css';
import Nav from './components/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Collection from './pages/Collection'
import Profile from './pages/Profile'
import {useEffect} from 'react'
function App() {
  let interval = 15*60*1000
 useEffect(() => {
   setInterval(
     function(){
       localStorage.removeItem('user')
     }, interval
   )
 })
  return (
    <Router>
    <div className="App">
   <Nav/>
   <Switch>
    <Route exact path='/'>
      <Home/>
    </Route>
    <Route exact path='/c/:title'>
      <Collection/>
    </Route>
    <Route exact path ='/profile'>
      <Profile/>
    </Route>
   </Switch>
    </div>
    </Router>
  );
}

export default App;
