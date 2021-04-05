import '../Article/Article.css';

import {Link} from 'react-router-dom';


const Article = () =>{
    return(
        <article className="article-container">
                
        <img className="article-img" src="https://decombo.com/wp-content/uploads/2020/07/modern-ev-dekorasyon-ornekleri-44.jpg" alt="" ></img>
        <div className="article-data">
          
           
           <h2>New tendencies in home design</h2>
           <h3>Ivan Petrov</h3>
           <span>March, 31 2021</span>
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