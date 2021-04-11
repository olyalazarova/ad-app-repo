import '../Register/Register.css';

import firebase from 'firebase/app';

import { useHistory } from "react-router-dom";
import {useState} from 'react';

import {auth, firestore} from '../../services/firebaseService';


const userRef = firestore.collection('users');

const CreateUser = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[name, setName] = useState('');
   

    let history = useHistory();
    
    const onCreateUserSubmitHandler = async (e) => {
    
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.password.value);
        console.log(e.target.name.value);
        

        

        await userRef.add({
            email: e.target.email.value,
            password: e.target.password.value,
            name: e.target.name.value,
            
        }).then(history.push('/login'));

        setEmail('');
        setPassword('');
        setName('');
       
       
       
    }

      //  let history = useHistory();

      //  function handleClick() {
      //  history.push("/profile");
      //  }


    return(

        <section className="create-user-form">
            <form onSubmit={onCreateUserSubmitHandler}>
                <fieldset>
                    <legend>Create account</legend>
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