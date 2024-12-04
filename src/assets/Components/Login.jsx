import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";



const Login = () => {

    const { signInWithEmail, signInWithGoogle, SignInWithGit, twiter } = useContext(AuthContext);
    const navigate=useNavigate();



    // const provider = new GoogleAuthProvider();
    // const gitProvider = new GithubAuthProvider();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        console.log(user);
        signInWithEmail(email, password)


        .then((result) => {
            console.log("Login successful", result.user);
            // Navigate to the dashboard after successful login
            navigate("/home");
        })
        .catch((error) => {
            console.error("Login failed", error);
            alert("Login failed: " + error.message);
        });

    };

    return (
        <div className="card lg:shadow-2xl bg-base-100 my-5 lg:w-6/12 mx-auto px-10 py-8">
            <h1 className="font-bold text-3xl mb-5 text-center">
                Please Log In
            </h1>

            <form onSubmit={handleLogin} className="grid lg:grid-cols-3 w-full gap-3">
                <div className="form-control lg:col-span-2">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        className="input input-bordered"
                    />
                </div>

                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password" // Ensure this matches
                        placeholder="Enter your password"
                        className="input input-bordered"
                    />
                </div>
                <button className="btn btn-success">
                    Register
                </button>
            </form>





            <div className="form-control">

                <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-secondary hover:bg-green-900 text-xl text-white">
                    Continue with Google
                </button>
                <button className="btn btn-outline btn-secondary hover:bg-green-900 text-xl text-white">
                    Continue with Facebook
                </button>
                <button onClick={() => SignInWithGit()} className="btn btn-outline btn-secondary hover:bg-green-900 text-xl text-white">
                    Continue with GitHub
                </button>
                <button onClick={() => twiter()} className="btn btn-outline btn-secondary hover:bg-green-900 text-xl text-white">
                    Continue with   Twitter
                </button>
                <button className="btn btn-outline btn-secondary hover:bg-green-900 text-xl text-white">
                    Continue with Yahoo
                </button>

            </div>

            <div className=" flex items-center gap-4 mt-5 mb-2">
                <hr className="w-full" />
            </div>
            <div className="flex justify-center">
                <Link to={"/register"}>
                    Dont have an Account?
                    <span className="font-bold text-basicColor ms-2">Log In</span>
                </Link>
            </div>
        </div>
    );
};

export default Login;