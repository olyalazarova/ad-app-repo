import '../CreateArticle/CreateArticle.css';
import AuthContext from '../../services/AuthContext';

import firebase from 'firebase/app';

import { useHistory } from "react-router-dom";
import {useState, useEffect, useContext} from 'react';

import {auth, firestore} from '../../services/firebaseService';


const articleRef = firestore.collection('articles');

const CreateArticle = () => {
    const {isAuthenticated, email, username,id} = useContext(AuthContext);

    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');
    const[section, setSection] = useState('');
    const[imgUrl, setImgUrl] = useState('');

    let history = useHistory();
    
    const onCreateArticleSubmitHandler = async (e) => {
    
        

        e.preventDefault();
        console.log(e.target.title.value);
        console.log(e.target.content.value);
        console.log(e.target.section.value);
        console.log(e.target.imgUrl.value);

        

        await articleRef.add({
            title: e.target.title.value,
            content: e.target.content.value,
            section: e.target.section.value,
            imageUrl: e.target.imgUrl.value,
            author: username,
            dateCreated: firebase.firestore.FieldValue.serverTimestamp(),
            creatorId: id
        }).then(history.push('/profile'));

        setTitle('');
        setContent('');
        setImgUrl('');
        setSection('');
       
        //setFormValue('');
    }

      //  let history = useHistory();

      //  function handleClick() {
      //  history.push("/profile");
      //  }


    return(

        <section className="create-article-form">
            <form onSubmit={onCreateArticleSubmitHandler}>
                <fieldset>
                    <legend>Create article</legend>
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
                    <input className="button submit" type="submit" value="Add Article" />

                </fieldset>
            </form>

        </section>
    );

}

export default CreateArticle;