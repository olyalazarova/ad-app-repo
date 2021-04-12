import '../Article/Article.css';

import AuthContext from '../../services/AuthContext';

import {useState, useEffect, useContext} from 'react';

import {Link} from 'react-router-dom';


const Article = ({
    
    title,
    author,
    date,
    imageUrl,
    id
}) =>{
        
    const {isAuthenticated, username} = useContext(AuthContext);

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
        
        {isAuthenticated && <Link to="/edit">
                <button className="edit-article-btn">Edit</button>
                </Link>}
        {isAuthenticated && <Link to="">
                <button className="delete-article-btn">Delete</button>
                </Link>}
        </article>

    );

}

export default Article;