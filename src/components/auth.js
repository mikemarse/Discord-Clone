import { auth, provider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import logo from "../Discord.svg";

const Login = () => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='h-screen w-screen p-0 ml-[-64px] flex items-center justify-center bg-[url("https://i.redd.it/t7b5j2cqpce21.png")]'>
      <div className="bg-gray-700 h-[500px] w-[500px] flex items-center justify-between flex-col p-10 rounded-xl">
        <img src={logo} alt="discord logo" />
        <button
          onClick={signInWithGoogle}
          className="w-[200px] h-[40px] bg-[#738adb] text-[#eff2f5]"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
