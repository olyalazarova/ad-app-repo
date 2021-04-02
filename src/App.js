//import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import firebase from "firebase";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';

function App() {
  const firebaseApp = firebase.apps[0];

  return (  
  <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/" component={HomePage}></Route>
      </Switch>
      <Footer></Footer>
  </div>
      
  );
}



export default App;
