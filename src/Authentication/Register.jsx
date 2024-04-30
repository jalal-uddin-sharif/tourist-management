import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import Loader from "../component/Loader";

const Register = () => {
  const auth = getAuth();
  const {
    createUser,
    setUser,
    user,
    loading,
    setLoading,
    googleLogin,
    githubLogin,
  } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    // console.log(name, email, photoUrl, password, confirmPassword);

    if (password.length < 6) {
      setPasswordError("Password must be 6 charecter");
    } else if (!/^(?=.*[a-z])(?=.*[A-Z]).*$/.test(password)) {
      return setPasswordError("use minimum a uppercase and lowercase letter");
    } else {
      setPasswordError("");
    }

    if (password !== confirmPassword) {
      return setConfirmPassError("password not match");
    } else {
      setConfirmPassError("");
    }

    //Create User Account
    createUser(email, password)
      .then((result) => {
        toast.success("Acount created successfully");
        form.reset();
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoUrl,
        });
        signOut(getAuth());
        navigate("/login");
      })
      .catch((error) => {
        // console.log(error);
        toast.warning("Email Already Used, Try another email");
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="mt-10 container mx-auto p-4">
      <h1 className="text-center text-5xl font-bold text-green-500">
        Create your Accout
      </h1>
      <hr className="w-5/12 mx-auto my-4" />
      <div className=" flex flex-col justify-center items-center">
        <div className="lg:w-2/5 md:w-3/5 w-full bg-gray-100 p-6 rounded-xl">
          <form onSubmit={handleRegister}>
            <label
              htmlFor="name"
              className="relative block overflow-hidden  border-b border-gray-200 bg-transparent pt-3 mb-6 focus-within:border-blue-600"
            >
              <input
                required
                name="name"
                type="text"
                id="name"
                placeholder="Email"
                className="peer h-8 w-full border-none bg-transparent rounded-md text-black p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Name
              </span>
            </label>
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
                className="peer h-8 w-full text-black rounded-md border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Email
              </span>
            </label>
            <label
              htmlFor="photoUrl"
              className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 mb-6 focus-within:border-blue-600"
            >
              <input
                required
                name="photoUrl"
                type="text"
                id="photoUrl"
                placeholder="Email"
                className="peer h-8 w-full text-black rounded-md border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Photo Url
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
            {passwordError && (
              <h1 className="-mt-6 mb-2 text-sm text-red-600">
                {passwordError}
              </h1>
            )}
            <label
              htmlFor="confirmPassword"
              className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 mb-6 focus-within:border-blue-600"
            >
              <input
                required
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                placeholder="Email"
                className="peer text-black h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Confirm Password
              </span>
            </label>
            {confirmPassError && (
              <h1 className="-mt-6 mb-2 text-sm text-red-600">
                {confirmPassError}
              </h1>
            )}

            <button type="submit" className="btn btn-primary w-full ">
              Register
            </button>
            <h1 className="px-2 text-base text-black">
              Already have an account?{" "}
              <Link className="text-primary underline" to={"/login"}>
                Login
              </Link>
            </h1>
          </form>

          <div className="divider divider-accent">Or SignIn with</div>
          <div className="space-x-2 flex justify-center">
            <button
              onClick={() => googleLogin(location, navigate)}
              className="btn text-lg btn-warning"
            >
              <FaGoogle color="purple" size={20} /> Google
            </button>
            <button
              onClick={() => githubLogin(location, navigate)}
              className="btn text-lg btn-accent"
            >
              <FaGithub color="" size={20} /> GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
