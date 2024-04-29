import { useContext, useEffect, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../component/Loader";
const Login = () => {
  const location = useLocation()
    const navigate = useNavigate()
    const {loginUser, setUser, user, loading, setLoading, googleLogin, githubLogin} = useContext(AuthContext)
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if(password.length < 6){
        return setError("password must be 6 charecter")
    } else{setError("")}

    //user Login
    loginUser(email, password)
    .then(res =>{
        console.log(res.user);
        toast.success('Login Success')
        setUser(res.user)
        navigate(location ? location?.state : "/")
        form.reset();
    })
    .catch(err =>{
        console.log(err);
        toast.error("Email or Password didn't match")
        setLoading(false)
    }) 
  };

  // useEffect(()=>{
  //   if(user){
  //       navigate("/")
  //   }
  // },[user])
  console.log(location);

  if(loading){
    return <Loader/>
  }

  return (
    <div className="mt-10 container mx-auto p-4 min-h">
      <h1 className="text-center text-5xl font-bold text-green-500">
        Please Login
      </h1>
      <hr className="w-5/12 mx-auto my-4" />
      <div className=" flex flex-col justify-center items-center">
        <div className="w-2/5 bg-gray-100 p-6 rounded-xl">
          <form onSubmit={handleLogin}>
            <label
              htmlFor="email"
              className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 mb-6 focus-within:border-blue-600"
            >
              <input
                required
                name="email"
                type="email"
                id="email"
                placeholder="Email"
                className="peer text-black h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Email
              </span>
            </label>
            <label
              htmlFor="password"
              className="relative block overflow-hidden border-b border-gray-200 bg-transparent mb-6 pt-3 focus-within:border-blue-600"
            >
              <input
                required
                name="password"
                type="password"
                id="password"
                placeholder="Email"
                className="peer text-black h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Password
              </span>
            </label>
            {error && (
            <h1 className="-mt-6 mb-2 text-sm text-red-600">{error}</h1>
          )}

            <button type="submit" className="btn btn-primary w-full ">
              Login
            </button>
            <div className="flex justify-between px-2 text-md font-normal">
              <h1 className="underline text-success">forgot password?</h1>
              <h1 className="text-black">haven't accout? <Link className="underline text-primary" to={"/register"} >register</Link> </h1>
            </div>
          </form>

          <div className="divider divider-accent">Or SignIn with</div>
          <div className="space-x-2 flex justify-center">
            <button onClick={()=>googleLogin(location, navigate)} className="btn text-lg btn-warning">
              <FaGoogle color="purple" size={20} /> Google
            </button>
            <button onClick={()=>githubLogin(location, navigate)} className="btn text-lg btn-accent">
              <FaGithub color="" size={20} /> GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
