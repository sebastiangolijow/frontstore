import logo from './logo.svg';
import './App.css';
import { Route} from "react-router-dom";
import {Nav} from './Components/Nav/Nav'
import {Home} from './Components/Home/Home'
import {About} from './Components/About/About'
import {Carrito} from './Components/Carrito/Carrito'
import {Landing} from './Components/Landing/Landing'
function App() {
  return (
    <div className="App">
    <Route path='/' component={Nav}/>
    Buy online with the help of Specialists and enjoy free shipping without physical contact.
   <Route exact path='/home' component={Home}/>
    <Route exact path='/home/:id' render={({match}) => <About id={match.params.id}/>}/>
    <Route path='/carrito' component={Carrito} />
    <Route exact path='/' component={Landing}/>
    </div>
  );
}

export default App;
