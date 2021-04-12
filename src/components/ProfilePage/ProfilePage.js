import '../ProfilePage/ProfilePage.css';
import Article from '../Article/Article';
import AuthContext from '../../services/AuthContext';

import {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const ProfilePage = (
    match,
    location,
    history
) => {
    const {isAuthenticated, email, username} = useContext(AuthContext);

    return(
        <section className="author-articles">
            <div className="my-profile">
                <h3>My Profile</h3>
                <p>Name: {username}</p>
                <p>Email: {email}</p>
            </div>

            <div className="create-btn-container">
                <Link to="/create">
                <button className="add-article-btn">Add Article</button>
                </Link>
            </div>
            
            <div >
            <h2 className="article-section">My Articles</h2>        
             
            <Article/>
          
            <Article/>

            </div>
       
     

            

        
              
         
        </section>
    );

}

export default ProfilePage;