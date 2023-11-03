import { MdExpandMore, MdHeadset, MdSettings } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Channel from "./Channels";
import { BsFillMicFill } from "react-icons/bs";
import { auth, db } from "./config/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

const Servers = () => {
  const [channels, setChannels] = useState([]);
  const user = auth.currentUser;
  //const channelsRef = collection(db, "channels");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Channels"), (snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  const addChannel = async () => {
    const channelName = prompt("CHANNEL NAME");

    if (channelName) {
      await addDoc(collection(db, "Channels"), { channelName });
    }
  };

  return (
    <div className="flex flex-col bg-[#2b2d31] h-[100vh]">
      <div className="flex bg-[#2b2d31] border-b border-gray-900 text-white shadow-gray-900 h-[8vh] items-center text-lg pl-3 pr-3 justify-between">
        Server
        <MdExpandMore className="cursor-pointer" />
      </div>

      <div className="flex-1">
        <div className="flex bg-[#2b2d31] w-[240px] pt-2 justify-between items-center pr-2">
          <div className="flex items-center">
            <MdExpandMore className="fill-gray-500 mt-1" />
            <p className="text-sm text-gray-500 pl-2">TEXT CHANNELS</p>
          </div>

          <IoMdAdd
            className="cursor-pointer fill-gray-500"
            onClick={addChannel}
          />
        </div>
        <div className="flex flex-col mt-1">
          {channels.map(({ channel, id }) => (
            <Channel channelName={channel.channelName} key={id} id={id} />
          ))}
        </div>
      </div>

      <div className="flex items-center bg-gray-900 h-[8vh] text-white p-2 justify-between">
        <img
          className="h-8 w-8 rounded-full cursor-pointer"
          onClick={() => auth.signOut()}
          src={user.photoURL}
          alt="Profile pic"
        />
        <div className="whitespace-pre-line p-2 flex-1">
          <p className="text-sm">{user.displayName}</p>
          <p className="text-xs text-gray-400">Online</p>
        </div>
        <div className="flex">
          <div className="p-2">
            <BsFillMicFill className="text-gray-500 h-[20px] w-[20px] cursor-pointer hover:text-white" />
          </div>
          <div className="p-2">
            <MdHeadset className="text-gray-500 h-[20px] w-[20px] cursor-pointer hover:text-white" />
          </div>
          <div className="p-2">
            <MdSettings
              onClick={() => auth.signOut()}
              className="text-gray-500 h-[20px] w-[20px] cursor-pointer hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servers;
