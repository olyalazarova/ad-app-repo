import '../Architecture/Architecture.css';
import Article from '../Article/Article';

import {useState, useEffect} from 'react';

import {auth, firestore} from '../../services/firebaseService';

const Architecture = () => {

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
   
   
   
          
   
       const architectureArticlesAll = 
                   articles.filter(x => x.section === 'Architecture');
                          
    return(
        <section className="home-articles">
            <h2 className="article-section">Architecture</h2>
            
        <section className="achitecture-section">
           
           {
               
                  architectureArticlesAll.map( article => {
                       return(
                        <Article key={article.id}
                        title={article.title}
                        author={article.author}
                        date={new Date(article.dateCreated.seconds*1000).toLocaleDateString("en-US")}
                        imageUrl={article.imageUrl}
                        id={article.id}
                        />
    
                       )
                            
                           
                    })
               
             
       
           }
               
               
                   
           

       </section>    
            

        
              
         
        </section>
    );

}

export default Architecture;