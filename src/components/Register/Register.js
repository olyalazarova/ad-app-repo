import '../Register/Register.css';

import firebase from 'firebase/app';

import { useHistory } from "react-router-dom";
import {useState} from 'react';

import {auth, firestore} from '../../services/firebaseService';



const CreateUser = ({
    history
}) => {


    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[name, setName] = useState('');
   

   // let history = useHistory();
    
    const onCreateUserSubmitHandler = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const author = e.target.name.value;
       

        auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            console.log('Register');
          
            userCredential.user.updateProfile({
                displayName: author
            }).then(function(){
                // Profile updated successfully!
                // "Jane Q. User"
               // var displayName = user.displayName;
                // "https://example.com/jane-q-user/profile.jpg"
                //var photoURL = user.photoURL;
                //console.log(displayName);
            })
            
        });
      
       


            setEmail('');
            setPassword('');
            setName('');

       
    }
    
        
 
       
       
    

    return(

        <section className="create-user-form">
            <form onSubmit={onCreateUserSubmitHandler}>
                <fieldset>
                    <legend>Create account</legend>
                    <p className="field-email">
                        <label htmlFor="email">Email </label>
                        <span className="input">
                            <input type="email" 
                                    name="email" 
                                   
                                    placeholder="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}>
                            </input>
                            <span className="actions"></span>
                        </span>
                    </p>
                 

                    <p className="field-password">
                        <label htmlFor="password">Password </label>
                        <span className="input">
                            <input type="password" 
                                    name="password" 
                                   
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}>
                            </input>
                            <span className="actions"></span>
                        </span>
                    </p>

                    <p className="field-name">
                        <label htmlFor="name">Name </label>
                        <span className="input">
                            <input type="text" 
                                    name="name" 
                                   
                                    placeholder="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}>
                            </input>
                            <span className="actions"></span>
                        </span>
                    </p>
                    
                    <input className="button submit" type="submit" value="Save" />
                </fieldset>
            </form>

        </section>
    );

}

export default CreateUser;