/////////// Warper////////////

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState} from "react";
import auth from "../../FireBase/Firebase.config";

export const DataContext = createContext(null);
    



const AuthProvider = ({children}) => {
          
    const [user,setuser] = useState(null);
        
                
 const RegisterUser = (email,password)=>{   

    return  createUserWithEmailAndPassword(auth,email,password)
    
 }
     
 const loginUser = (email,password)=>{
       signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // ...
      })

    
     
 }


       

    return (
        <div>
            <DataContext.Provider  value={{RegisterUser,loginUser,user,setuser}}>  { children }  </DataContext.Provider>
               
        </div>
    );
};

export default AuthProvider;