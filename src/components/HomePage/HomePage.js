import '../HomePage/HomePage.css';
import Article from '../Article/Article';

import {Link} from 'react-router-dom';

import firebase from 'firebase/app';

import { useHistory } from "react-router-dom";
import {useState, useEffect} from 'react';

import {auth, firestore} from '../../services/firebaseService';
import { useCollectionData } from 'react-firebase-hooks/firestore';


function GetArchitectureArticle(){
//    const articleRef = firestore.collection('articles');

  //  const queryArchitecture = articleRef.orderBy('dateCreated').where(x => x.section == 'Architecture').limit(3);
  //  const queryDesign = 
  //  const [article] = useCollectionData(queryArchitecture,{idField: 'id'});
  
   
}



const HomePage = () => {
    //const {author, content, dateCreated, imageUrl, section, title, idField} = props.article;
//    const articleRef = firestore.collection('articles');
 //   const query = articleRef.orderBy('dateCreated')
 //                       .where('section','==', 'Architecture')
//                        .limit(3)
                        
  //   const [articles] = useCollectionData(query);
 //   console.log(articles);

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



       

    const architectureArticles = 
                articles.sort((a, b) => b.dateCreated - a.dateCreated)
                        .filter(x => x.section === 'Architecture')
                        .slice(0,3);

    const interiorArticles = 
                articles.sort((a, b) => b.dateCreated - a.dateCreated)
                        .filter(x => x.section === 'Interior Design')
                        .slice(0,3);
         
     console.log(articles);
    return(
        

        <section className="home-articles">
            <h2 className="article-section">Architecture</h2>   

        <section className="achitecture-section">
           
            {
                
                   architectureArticles.map( article => {
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
                        
                                
          
           
            <h2 className="article-section">Interior Design</h2>
    
            <section className="achitecture-section">
           
            {
                
                   interiorArticles.map( article => {
                        return(
                         <Article key={article.id}
                         title={article.title}
                         author={article.author}
                      //   date={new Date(article.dateCreated.seconds*1000).toLocaleDateString("en-US")}
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

export default HomePage;