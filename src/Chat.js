import ChatHead from "./ChatHead";
import { MdAddCircle } from "react-icons/md";
import { PiGifFill } from "react-icons/pi";
import { AiFillGift } from "react-icons/ai";
import { LuSticker } from "react-icons/lu";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import Messages from "./Messages";
import { ServerContext } from "./components/ServerContext";
import { useContext, useEffect, useState } from "react";
import { auth } from "./config/firebase";
import { db } from "./config/firebase";
import {
  Timestamp,
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

function Chat() {
  const [message, setMessage] = useState([]);
  const [input, setInput] = useState("");
  const { data } = useContext(ServerContext);
  const user = auth.currentUser;

  //const collectionRef = collection(db, "colors", data.serverID, "messages");
  //const q = query(collectionRef, orderBy("timestamp", "desc"));

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "Channels", data.serverID, "messages"),
        orderBy("timestamp", "asc")
      ),
      // collection(db, "Channels", data.serverID, "messages"),
      // orderBy("orderTime", "desc"),
      (snapshot) => {
        setMessage(
          snapshot.docs.map((doc) => ({ message: doc.data(), id: doc.id }))
        );
      }
    );
    return unsubscribe;
  }, [data.serverID]);

  const newTime = Timestamp.now().toDate();

  const sendMessage = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "Channels", data.serverID, "messages"), {
      message: input,
      user: {
        displayName: user.displayName,
        photoURL: user.photoURL,
      },
      timestamp: newTime.toLocaleString(),
      orderTime: Timestamp.now(),
    });
    setInput("");
  };

  return (
    <div className="flex flex-col bg-[#303339] flex-1 h-[100vh]">
      <ChatHead />

      <div className="flex-1 overflow-y-auto h-[100vh]">
        {message.map(({ message, id }) => (
          <Messages
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
            key={id}
            orderTime={message.orderTime}
          />
        ))}
      </div>

      <div className="flex items-center p-2 border border-[#35393e] m-4 rounded-lg bg-[#35393e] text-gray-500">
        <div className="flex w-full">
          <MdAddCircle className="h-7 w-7 mr-2 text-gray-500 hover:text-white" />
          <form className="flex w-full">
            <input
              disabled={!data.serverID}
              value={input}
              placeholder={`Message #${data.channelName}`}
              onChange={(e) => setInput(e.target.value)}
              className="block w-full z-20 outline-none items-center bg-transparent text-white placeholder-gray-600"
            />
            <button
              className="hidden"
              type="submit"
              disabled={!data.serverID}
              onClick={sendMessage}
            >
              Send
            </button>
          </form>
        </div>
        <div className="flex items-center">
          <AiFillGift className="h-10 w-10 cursor-pointer p-2 hover:text-white" />
          <PiGifFill className="h-10 w-10 cursor-pointer p-2 hover:text-white" />
          <LuSticker className="h-10 w-10 cursor-pointer p-2 hover:text-white" />
          <BsFillEmojiSunglassesFill className="h-10 w-10 cursor-pointer p-2 hover:text-white" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
