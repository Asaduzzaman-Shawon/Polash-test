import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";

const Hero = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const providerGit = new GithubAuthProvider()
  const handle = () => {
    console.log("object");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleGit = () => {
    console.log("object");
    signInWithPopup(auth, providerGit)
    .then((result) => {
      console.log(result);
      setUser(result.user);
    })
    .catch((err)=> {
      console.log(err);
    })
  }
  const handleOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="py-10">
      <div className="hero bg-base-200  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                {user ? (
                
                   <button onClick={handleOut} className="btn btn-neutral mt-4">
                   Log Out
                 </button>
                ) : (
                  <>
                      <button onClick={handle} className="btn btn-neutral mt-4">
                  Login with google
                </button>
                <button onClick={handleGit} className="btn btn-neutral mt-4">
                  Login with githunn
                </button>
                  </>
                )}
                {user && (
                  <div>
                    <h1>{user.displayName}</h1>
                    <img src={user.photoURL} alt="" />
                  </div>
                )}
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
