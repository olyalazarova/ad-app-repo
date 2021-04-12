import '../Login/Login.css';
import '../../services/firebaseService';

import AuthContext from '../../services/AuthContext';

import firebase from 'firebase/app';

import { useHistory } from "react-router-dom";
import {useContext, useState} from 'react';

import {auth, firestore} from '../../services/firebaseService';


const userRef = firestore.collection('users');

const LoginUser = ({
    history
}) => {


    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [error, setErrors] = useState("");
    

 //   let history = useHistory();
    //  const Auth = useContext(AuthContext);
   
   // const [isLoggedIn, setLoggedIn] = useState();
    

    const onLoginUserSubmitHandler = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

      
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            history.push('/');
            
            
        });

          
   //     await userRef.add({
   //         email: e.target.email.value,
    //        password: e.target.password.value,
   //         name: e.target.name.value,
            
    //    }).then(history.push('/login'));

        setEmail('');
        setPassword('');
        
       
    }

    return(

        <section className="create-user-form">
            <form onSubmit={onLoginUserSubmitHandler}>
                <fieldset>
                    <legend>Login</legend>
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

              
                    
                    <input className="button submit" type="submit" value="Login" />
                    <span>{error}</span>
                </fieldset>
            </form>

        </section>
    );

}

export default LoginUser;