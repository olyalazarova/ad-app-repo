import '../ProfilePage/ProfilePage.css';
import Article from '../Article/Article';
import AuthContext from '../../services/AuthContext';
import {auth, firestore} from '../../services/firebaseService';

import {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { useHistory } from "react-router-dom";

const articleRef = firestore.collection('articles');

const ProfilePage = (
    match,
    location,
   // history
) => {
    const {isAuthenticated, email, username, id} = useContext(AuthContext);

    const [articles, setArticles] = useState([]);
    const[currentArtcile, setCurrentAricle] = useState({});

    const fetchArticles=async()=>{
    const response=firestore.collection('articles')
                  // .orderBy('dateCreated')
                  // .where('section','==', 'Architecture')
                  // .limit(3);
    const data=await response.get();
           let temp = [];
         data.docs.forEach(item=>{
             const itemPush = item.data();
             itemPush.id = item.id;
             temp.push(itemPush);
        
      })
   
     
   
      setArticles([...articles,...temp])
      // setArticles(data.docs);
     //console.log(articles);

       
   }
   useEffect(() =>{
     fetchArticles();
   },[])


   const userArticles = 
   articles.sort((a, b) => b.dateCreated - a.dateCreated)
   .filter(x => x.creatorId === id)
  
   
  
      
          let history = useHistory();
   
         
                
            
                const onDeleteArticleSubmitHandler = async (e, artId) => {
           
                    e.preventDefault();
                  
                    console.log(`Delete ${artId}`);
            
                    await articleRef.doc(artId).delete()
                        .then(history.push('/profile'));
            
                  
                    }      
            
           

  

    return(
        <section className="author-articles">
            <div className="my-profile">
                <h3>My Profile</h3>
                <p>Name: {username}</p>
                <p>Email: {email}</p>
            </div>

            <div className="create-btn-container">
                <Link to="/create">
                <button className="add-article-btn">Add Article</button>
                </Link>
            </div>
            
       
            <h2 className="article-section">My Articles</h2>   
            {
                 userArticles.map( article => {
                    return(
                        <article className="article-container" key={article.id}>
                
                        <img className="article-img" src={article.imageUrl} alt="" ></img>
                        <div className="article-data">
                        <Link to={`/detail/${article.id}`}>
                            <h2>{article.title}</h2>
                        </Link>
                  
                        <h3>{article.author}</h3>
                        <span>{new Date(article.dateCreated.seconds*1000).toLocaleDateString("en-US")}</span>
                        </div>
                
                        {isAuthenticated && <Link to={`/edit/${article.id}`}>
                                 <button className="edit-article-btn">Edit</button>
                                 </Link>}
                                    {isAuthenticated && <Link to="">
                                 <button onClick={(e) => onDeleteArticleSubmitHandler(e,article.id)} 
                                   
                                    className="delete-article-btn">Delete</button>
                                 </Link>}
        
        
                </article>
                
                )
                             
                            
            })

           
        }
          
     

            

        
              
         
        </section>
    );

}

export default ProfilePage;