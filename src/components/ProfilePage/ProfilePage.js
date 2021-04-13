import '../ProfilePage/ProfilePage.css';
import Article from '../Article/Article';
import AuthContext from '../../services/AuthContext';
import {auth, firestore} from '../../services/firebaseService';

import {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const ProfilePage = (
    match,
    location,
    history
) => {
    const {isAuthenticated, email, username, id} = useContext(AuthContext);

    const [articles, setArticles] = useState([]);

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
            
            <div >
            <h2 className="article-section">My Articles</h2>   

              {
                
                   userArticles.map( article => {
                        return(
                         <Article key={article.id}
                         title={article.title}
                         author={article.author}
                       //  date={article.dateCreated}
                         imageUrl={article.imageUrl}
                         id={article.id}
                         />
     
                        )
                             
                            
                     })
                
              
        
            }
                     
             

            </div>
       
     

            

        
              
         
        </section>
    );

}

export default ProfilePage;