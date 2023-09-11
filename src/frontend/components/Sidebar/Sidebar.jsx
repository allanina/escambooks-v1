import { sidebarData } from "../../utils/sidebarData";
import Navbar from "../Navbar/Navbar";
import Home from "/static/messages-icon.svg";

function Sidebar() {
  return (
    <nav className="sidebar-container">
      <Navbar />
      <ul className="sidebar-options">
        {sidebarData.map((item) => {
          <li className="sidebar-option-container" id={item.title}>
            <img src={item.icon} alt="home icon" className="sidebar-icon" />
            <span>{item.title}</span>
          </li>;
        })}
        <div className="sidebar-logout-container">
          <img src={Home} alt="home icon" className="sidebar-icon" />
          <span>Sair</span>
        </div>
      </ul>
    </nav>
  );
}

export default Sidebar;
