import '../Article/Article.css';

import AuthContext from '../../services/AuthContext';

import {useState, useEffect, useContext} from 'react';
import { useHistory } from "react-router-dom";

import {Link} from 'react-router-dom';

import {auth, firestore} from '../../services/firebaseService';

const articleRef = firestore.collection('articles');

const Article = ( {
    
    title,
    author,
    date,
    imageUrl,
    id
}) =>{
        console.log(id);

    const {isAuthenticated, username} = useContext(AuthContext);

    //const currentArticleId = id;

    let history = useHistory();
   
    
    const onDeleteArticleSubmitHandler = async (e) => {
    
        e.preventDefault();
      


        await articleRef.doc(id).delete()
            .then(history.push('/profile'));

      
    }


    return(
        <article className="article-container">
                
        <img className="article-img" src={imageUrl} alt="" ></img>
        <div className="article-data">
           <Link to={`/detail/${id}`}>
                <h2>{title}</h2>
           </Link>
          
           <h3>{author}</h3>
           <span>{date}</span>
       </div>
        
        {isAuthenticated && <Link to={`/edit/${id}`}>
                <button className="edit-article-btn">Edit</button>
                </Link>}
        {isAuthenticated && <Link to="">
                <button onClick={onDeleteArticleSubmitHandler} className="delete-article-btn">Delete</button>
                </Link>}
        </article>

    );

}

export default Article;