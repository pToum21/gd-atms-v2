import '../styles/sidebar.css';

import { SidebarData } from './SidebarData';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebar-list">
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key} onClick={() => {
                            window.location.pathname = val.link;
                        }} className="row" id={window.location.pathname === val.link ? "active" : ""}>
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;