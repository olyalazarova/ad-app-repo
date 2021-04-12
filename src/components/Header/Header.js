import '../Header/Header.css';
import AuthContext from '../../services/AuthContext';

import {Link} from 'react-router-dom';

import firebase from 'firebase/app';

import { useHistory } from "react-router-dom";
import {useState, useEffect, useContext} from 'react';

import {auth, firestore} from '../../services/firebaseService';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import userEvent from '@testing-library/user-event';
//import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {

   // const {isAuthenticated, email} = useContext(AuthContext);
   const {isAuthenticated, username} = useContext(AuthContext);
    console.log(isAuthenticated);
   
  
//const [users, setUsers] = useState([]);

 //const fetchUsers=async()=>{
 //const response=firestore.collection('users')
               // .orderBy('dateCreated')
               // .where('section','==', 'Architecture')
               // .limit(3);
 //const data=await response.get();
  //      let temp = [];
  //    data.docs.forEach(item=>{
  //        const itemPush = item.data();
   //       itemPush.id = item.id;
   //       temp.push(itemPush);
     
  // })

  

//setUsers([...users,...temp])
   // setArticles(data.docs);
  //console.log(articles);
//}
//useEffect(() =>{
 // fetchUsers();
//},[])

//console.log(users);

  //  const currentUser = 
   //             users.filter(x => x.email === username)
   //             console.log(currentUser.name);  

return(
    <header className="site-header">
       
           <span className="blog-title"><Link className="blog-title" to="/">Architecture & Design Blog</Link></span>
           

         
                  
                           
                           <nav className="navbar">
                                <Link to="/architecture">Architecture</Link>
                                <Link to="/design">Interior design</Link>
                             {!isAuthenticated &&  <Link to="/register">Register</Link> } 
                             {!isAuthenticated &&  <Link to="/login">Login</Link> }
                             {isAuthenticated &&  <Link to="/profile">Welcome, {username}</Link>}
                             {isAuthenticated &&  <Link to="/logout">Logout</Link>}
                                <Link to="/search">Search</Link>
                            </nav>
                    
                            
                            
                    
                        
                    

                    
                         
         
          
      

    </header>
);

}

export default Header;