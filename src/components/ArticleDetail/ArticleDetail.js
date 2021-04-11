import '../ArticleDetail/ArticleDetail.css';

import {useState, useEffect} from 'react';

import {auth, firestore} from '../../services/firebaseService';



const ArticleDetail = ({
    match
}) =>{

    const currentArticleId = match.params.articleId;
  //  console.log(currentArticleId);

//const [loading,setLoading] = useState(true);
//const [currentArticle, setCurrentArticle] = useState([]);

const [articles, setArticles] = useState([]);

const fetchArticles=async()=>{
    const response=firestore.collection('articles')
                  // .orderBy('dateCreated')
                 // .where('id','==', `${currentArticleId}`)
                  // .limit(3);
    const data=await response.get();
           let temp = [];
           data.docs.forEach(item=>{
            const itemPush = item.data();
            itemPush.id = item.id;
            temp.push(itemPush);
        
      })
      setArticles([...articles,...temp]);
    }
      


                
 
 useEffect(() =>{
   fetchArticles();
 },[])

 const articleById = 
 articles.filter(x => x.id === currentArticleId);

return(
    <div className="article-detail-container">
      {
            
                
            articleById.map( article => {
                     return(
                         <article className="article-detail-page" key={article.id}>
                              <img className="article-img" src={article.imageUrl} alt="" ></img>
                            <div className="article-detail-body">
                                <h2>{article.title}</h2>
                                <p>{article.content}</p>
                                <span className="author-detail-page">{article.author}</span>
                            </div>
                            
                         </article>
                      
  
                     )
                          
                         
                  })
             
           
     
         }

        
            
    
  
    </div>
    
        

    )

}


export default ArticleDetail;