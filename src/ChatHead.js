import {
  MdNotifications,
  MdPeopleAlt,
  MdOutlineSearch,
  MdInbox,
  MdOutlineHelp,
} from "react-icons/md";
import { BsFillPinAngleFill } from "react-icons/bs";
import { ServerContext } from "./components/ServerContext";
import { useContext } from "react";

const ChatHead = () => {
  const { data } = useContext(ServerContext);
  return (
    <div className="flex justify-between items-center text-gray-500 p-2 h-[8vh] border-b border-gray-900">
      <div className="flex text-white items-center">
        <span className="text-gray-500 pr-2 text-2xl">#</span>
        {data.channelName}
      </div>

      <div className="flex flex-[.4] justify-between items-center">
        <MdNotifications className="h-[25px] w-[25px] cursor-pointer hover:text-white" />
        <BsFillPinAngleFill className="h-[25px] w-[25px] cursor-pointer hover:text-white" />
        <MdPeopleAlt className="h-[25px] w-[25px] cursor-pointer hover:text-white" />

        <div className="flex items-center bg-[#1e1f22] p-[2px] rounded-md text-gray-500">
          <input
            placeholder="Search"
            className="bg-transparent outline-none text-sm text-white placeholder-gray-500"
          />
          <MdOutlineSearch className="h-[20px] w-[20px] cursor-pointer" />
        </div>
        <MdInbox className="h-[25px] w-[25px] cursor-pointer hover:text-white" />
        <MdOutlineHelp className="h-[25px] w-[25px] cursor-pointer hover:text-white" />
      </div>
    </div>
  );
};

export default ChatHead;
