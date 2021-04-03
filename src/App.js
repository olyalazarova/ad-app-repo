//import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom';
import './App.css';
//import firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import{useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Architecture from './components/Architecture/Architecture';
import InteriorDesign from './components/InteriorDesign/InteriorDesign';
import ProfilePage from './components/ProfilePage/ProfilePage';
import CreateArticle from './components/CreateArticle/CreateArticle';





function App() {
 // const firebaseApp = firebase.apps[0];
 

  return (  
  <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/architecture" exact component={Architecture}></Route>
        <Route path="/design" exact component={InteriorDesign}></Route>
        <Route path="/profile" exact component={ProfilePage}></Route>
        <Route path="/create" exact component={CreateArticle}></Route>
      </Switch>
      <Footer></Footer>
  </div>
      
  );
}



export default App;
