import '../Article/Article.css';

import {Link} from 'react-router-dom';


const Article = ({
    title,
    author,
    date,
    imageUrl
}) =>{
        

    return(
        <article className="article-container">
                
        <img className="article-img" src={imageUrl} alt="" ></img>
        <div className="article-data">
           
           <h2>{title}</h2>
           <h3>{author}</h3>
           <span>{date}</span>
       </div>
                 <Link to="/edit">
                <button className="edit-article-btn">Edit</button>
                </Link>
                <Link to="">
                <button className="delete-article-btn">Delete</button>
                </Link>
        </article>

    );

}

export default Article;