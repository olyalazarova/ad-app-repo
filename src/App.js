//import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom';
import './App.css';
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



function App() {
 //const firebaseApp = firebase.apps[0];
 


  return (  
  <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/architecture" exact component={Architecture}></Route>
        <Route path="/design" exact component={InteriorDesign}></Route>
        <Route path="/profile" exact component={ProfilePage}></Route>
        <Route path="/create" exact component={CreateArticle}></Route>
        <Route path="/detail/:articleId" exact component={ArticleDetail}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/login" exact component={Login}></Route>
      </Switch>
      <Footer></Footer>
  </div>
      
  );
}



export default App;
