
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Provider/AuithProvider/AuthProvider";




const Register = () => {
  const{RegisterUser} = useContext(DataContext) ;   
 



         const [error,seterror] = useState('');
           const[ EmailError,SetEmailError  ] = useState  ('')
             
    const HandleRegister = e =>{
        e.preventDefault();
     
       const Email = e.target.email.value;
       const Password = e.target.password.value;

// //////////  Validated     ///////////////////////////////
         if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)){
            SetEmailError("Email not Validated")
         }

        if (Password.length <6  ) {
          seterror('Password Must be 6 carrecters')
          return;
        }
       else if(!/^(?=.*[!@#$%^&*()_+\-=[\]{}|;:',.<>?]).{8,}$/.test(Password))
       {   
        seterror("Password must end with at lest one special character")
            return;
        }

 ////////////       // 
         
         SetEmailError("")
        seterror("")    ;
       RegisterUser(Email,Password)
       .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
       
        const errorMessage = error.message;
          seterror(errorMessage.split("/")[1])
      });
      


     }
  
     

    return (
        <div  className="hero  bg-base-200 my-10  "  >
             <div className="hero-content  flex-col lg:flex-row-reverse gap-4  ">
    <div className=" lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card shrink-0  max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={HandleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
           {  
             EmailError&& <h2>{EmailError}</h2>     
           }
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
        
            {
              error  && <p> {error} </p>
            }
              
      <p className="text-center mb-3 mx-8 " > Do you have any Account?please<Link to='/login'  >   <a className="link link-info">Login </a>  </Link>    </p>
    </div>
  </div>
        </div>
    );
};

export default Register;