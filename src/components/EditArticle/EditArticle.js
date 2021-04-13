import { useHistory } from "react-router-dom";


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useState, useEffect, useContext} from 'react';

import {auth, firestore} from '../../services/firebaseService';

const articleRef = firestore.collection('articles');


const EditArticle = ({
    match
}) => {

    let history = useHistory();

    const currentArticleId = match.params.articleId;

    const [articles, setArticles] = useState([]);
    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');
    const[section, setSection] = useState('');
    const[imgUrl, setImgUrl] = useState('');

    const fetchArticles=async()=>{
        const response=firestore.collection('articles').doc(currentArticleId).get()
        .then((doc) => {
            if (doc.exists) {
                const article = doc.data();
                setTitle(article.title);
                setContent(article.content);
                setSection(article.section);
                setImgUrl(article.imageUrl);

               // console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
              
    
 
 
}

useEffect(() =>{
    fetchArticles();
  },[])


   
    
    const onEditArticleSubmitHandler = async (e) => {
    
        e.preventDefault();
        console.log(e.target.title.value);
        console.log(e.target.content.value);
        console.log(e.target.section.value);
        console.log(e.target.imgUrl.value);

        


      


                
 
 

 



        await articleRef.doc(currentArticleId).update({
            title: e.target.title.value,
            content: e.target.content.value,
            section: e.target.section.value,
            imageUrl: e.target.imgUrl.value,
            //author: "Pesho",
           // dateCreated: Date.now(),
        }).then(history.push('/profile'));

      
    }



    return(

        <section className="create-article-form">
            <form onSubmit={onEditArticleSubmitHandler}>
                <fieldset>
                    <legend>Edit article</legend>
                    <p className="field-title">
                        <label htmlFor="title">Title </label>
                        <span className="input">
                            <input type="text" 
                                    name="title" 
                                   
                                    placeholder="Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}>
                            </input>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field-content">
                        <label htmlFor="content">Content</label>
                        <span className="input">
                            <textarea 
                                    rows="10" 
                                    cols="60" 
                                    type="text" 
                                    name="content" 
                                   // id="content"
                                    placeholder="Content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}>
                            </textarea>
                            <span className="actions"></span>
                        </span>
                    </p>

                    <p className="field-img">
                        <label htmlFor="imgUrl">ImageURL </label>
                        <span className="input">
                            <input 
                                    type="text" 
                                    name="imgUrl" 
                                  //  id="imgUrl" 
                                    placeholder="ImgageURL"
                                    value={imgUrl}
                                    onChange={(e) => setImgUrl(e.target.value)}>
                            </input>
                            <span className="actions"></span>
                        </span>
                    </p>

                    <p className="field-section-select">
                        <label htmlFor="section">Section</label>
                        <span className="input">
                            <select type="text" 
                                    name="section"
                                    value={section}
                                    onChange={(e) => setSection(e.target.value)}>
                                <option value="Architecture">Architecture</option>
                                <option value="Interior Design">Interior Design</option>
                            </select>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Save" />

                </fieldset>
            </form>

        </section>
    );

}

export default EditArticle;