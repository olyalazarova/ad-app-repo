import '../SearchPage/SearchPage.css';

import Article from '../Article/Article';

import {useState, useEffect} from 'react';

import {auth, firestore} from '../../services/firebaseService';

const SearchPage =(props) => {
        const[keyword,setKeyword]=useState('');
        const [articles, setArticles] = useState([]);
        const [articlesFiltered, setArticlesFiltered] = useState([]);

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
   
   
   const onSearchSubmitHandler = async (e) => {
    e.preventDefault();

    const input = e.target.keyword.value;
    
    setKeyword(input);

   console.log(input)

   const articlesFiltered = 
    articles.filter(x => //x.author.toLowerCase().includes(input.toLowerCase()) ||
                    x.content.toLowerCase().includes(keyword.toLowerCase())
                   // || x.title.toLowerCase().includes(input.toLowerCase())
    );

    setArticlesFiltered(articlesFiltered);

    console.log(articlesFiltered);   
   

                  

   };



    return(
        <div>
        <section className="search-bar">
        <form onSubmit={onSearchSubmitHandler}>
            <fieldset>
                <legend>Search</legend>
            
                <p className="field-search">
                    
                    <span className="input">
                        <input type="text" 
                                name="keyword" 
                               
                                placeholder="search"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}>
                        </input>
                        <span className="actions"></span>
                    </span>
                </p>
                
                <input className="button submit" type="submit" value="Search" />
            </fieldset>
        </form>

    </section>

    <section className="achitecture-section">
           
    {
                
                articlesFiltered.map( article => {

                   
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
                   // return <p>No result</p>
                
                
                        
    }
         

    </section>    

</div>
       
    )

   
}

export default SearchPage;