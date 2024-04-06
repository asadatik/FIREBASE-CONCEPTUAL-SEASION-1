import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Provider/AuithProvider/AuthProvider";


const Login = () => {
  const {loginUser} = useContext(DataContext);
       console.log(loginUser);

     const HandleLogin = e =>{
        e.preventDefault();
          
        const Email = e.target.email.value;
        const Password = e.target.password.value;
      
        loginUser(Email,Password) 
     }


    return (
        <div className="hero my-10 bg-base-200">
  <div className="hero-content  flex-col lg:flex-row-reverse gap-4  ">
    <div className=" lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card shrink-0  max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={HandleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center mb-3 mx-10 "  >  New Here ? please    <Link to='/register'  >   <a className="link link-info">Register</a>  </Link>    </p>
    </div>
  </div>
</div>
    );
};

export default Login;