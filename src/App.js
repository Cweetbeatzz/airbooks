import './App.css';
import Footer from "./components/footer/Footer.js";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Link,Route,Router,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route></Route>
        </Switch>
      </Router> */}


      <Header/>
      <Home/>
      {/* <Footer/> */}
    </div>
  );
}


export default App;
