import logo from './logo.svg';
import './App.css';
import firebase from "firebase";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const firebaseApp = firebase.apps[0];

  return (  
  <div className="App">
      <Header></Header>
      <Footer></Footer>
  </div>
      
  );
}



export default App;
