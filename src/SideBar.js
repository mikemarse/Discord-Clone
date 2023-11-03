import {
  GiBasket,
  GiAmericanFootballBall,
  GiArmBandage,
  GiBaseballGlove,
  GiAk47,
} from "react-icons/gi";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen flex flex-col w-16 m-0 bg-[#1e1f22] text-white shadow-lg">
      <SideBarIcon icon={<GiBasket size="30" />} />
      <SideBarIcon icon={<GiAmericanFootballBall size="30" />} />
      <SideBarIcon icon={<GiArmBandage size="30" />} />
      <SideBarIcon icon={<GiBaseballGlove size="30" />} />
      <SideBarIcon icon={<GiAk47 size="30" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "{Server Name}" }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default SideBar;
