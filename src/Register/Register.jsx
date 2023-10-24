import { Link } from "react-router-dom";
import Navbar from "../Home/Shared/Navbar/Navbar";
import { useContext } from "react";
import { ContextProvider } from "../AuthContext/AuthProvider";

const Register = () => {

    const { createUser } = useContext(ContextProvider);
    
    const handleRegister = (event) => {
      event.preventDefault();
      console.log(event.currentTarget);
      const data=new FormData(event.currentTarget)
      const name= data.get('name');
      const email = data.get("email");
      const password = data.get("password");

      console.log(name, email,password);

      createUser(email, password)
      .then(result=>{
        console.log(result.user);
        
      }).catch(error=>{
        console.log(error)
      })

      
    };
    return (
      <div>
        <Navbar></Navbar>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
            <p className="text-green-600 text-xl mt-6">
              Already Register ?{" "}
              <Link className="text-red-700" to="/login">
                {" "}
                LOGIN
              </Link>{" "}
              Now!{" "}
            </p>
          </div>
        </div>
      </div>
    );
};

export default Register;