import '../Login/Login.css';

import firebase from 'firebase/app';

import { useHistory } from "react-router-dom";
import {useState} from 'react';

import {auth, firestore} from '../../services/firebaseService';


const userRef = firestore.collection('users');

const LoginUser = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    
   

    let history = useHistory();
    
    const onLoginUserSubmitHandler = async (e) => {
    
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.password.value);
       
        

        

        await userRef.add({
            email: e.target.email.value,
            password: e.target.password.value,
            name: e.target.name.value,
            
        }).then(history.push('/login'));

        setEmail('');
        setPassword('');
      
       
       
       
    }

      //  let history = useHistory();

      //  function handleClick() {
      //  history.push("/profile");
      //  }


    return(

        <section className="create-user-form">
            <form onSubmit={onLoginUserSubmitHandler}>
                <fieldset>
                    <legend>Login</legend>
                    <p className="field-email">
                        <label htmlFor="email">Email </label>
                        <span className="input">
                            <input type="text" 
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
                            <input type="text" 
                                    name="password" 
                                   
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}>
                            </input>
                            <span className="actions"></span>
                        </span>
                    </p>

              
                    
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>

        </section>
    );

}

export default LoginUser;