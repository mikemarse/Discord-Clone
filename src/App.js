import SideBar from "./SideBar";
import Servers from "./Servers";
import Chat from "./Chat";
import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import Login from "./components/auth";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
  }, []);

  return (
    <div className="flex">
      {isLoggedIn ? (
        <>
          <SideBar />
          <Servers />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
