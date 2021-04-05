import '../ProfilePage/ProfilePage.css';
import Article from '../Article/Article';

import {Link} from 'react-router-dom';

const ProfilePage = (
    match,
    location,
    history
) => {
    return(
        <section className="author-articles">
            <div className="my-profile">
                <h3>My Profile</h3>
                <p>Name: PETAR PETROV</p>
                <p>Email: petrov@abv.bg</p>
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