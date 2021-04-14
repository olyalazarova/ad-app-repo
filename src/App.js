//import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import {auth} from './services/firebaseService';
import AuthContext from './services/AuthContext';

//import firebase from "firebase";
//import firebase from 'firebase/app';
//import 'firebase/firestore';
//import 'firebase/auth';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Architecture from './components/Architecture/Architecture';
import InteriorDesign from './components/InteriorDesign/InteriorDesign';
import ProfilePage from './components/ProfilePage/ProfilePage';
import CreateArticle from './components/CreateArticle/CreateArticle';
import ArticleDetail from './components/ArticleDetail/ArticleDetail';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import EditArticle from "./components/EditArticle/EditArticle";
import Article from "./components/Article/Article";
import SearchPage from "./components/SearchPage/SearchPage";



function App() {
 //const firebaseApp = firebase.apps[0];
 
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  //var user = auth.currentUser;
  //var name, email, photoUrl, uid, emailVerified;
  
 // if (auth.currentUser != null) {
 //   name = auth.currentUser.displayName;
  //  email = auth.currentUser.email;
  //  photoUrl = user.photoURL;
   // emailVerified = user.emailVerified;
  //  uid = auth.currentUser.uid;  
    
 // }

  const authInfo = {
    isAuthenticated: Boolean(user),
    email: user?.email,
    username: auth.currentUser?.displayName,
    id: auth.currentUser?.uid
  };

  console.log(authInfo.isAuthenticated);
  console.log(authInfo.email);
  console.log(authInfo.username);
  console.log(authInfo.id);
  
  

  return (  
     
  <div className="App">
      <AuthContext.Provider value={authInfo}>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/architecture" exact component={Architecture}></Route>
        <Route path="/design" exact component={InteriorDesign}></Route>
        <Route path="/search" exact component={SearchPage}></Route>
        <Route path="/profile" exact component={ProfilePage}></Route>
        <Route path="/create" exact component={CreateArticle}></Route>
        <Route path="/edit/:articleId" exact component={EditArticle}></Route>     
        <Route path="/detail/:articleId" exact component={ArticleDetail}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/logout" render={() => {
              auth.signOut();
              return <Redirect to="/" />
            }} />
        
      </Switch>
      <Footer></Footer>
      </AuthContext.Provider>
  </div>
      
  );
}



export default App;
