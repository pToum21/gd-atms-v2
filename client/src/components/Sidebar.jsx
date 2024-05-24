import '../styles/sidebar.css';
import { SidebarData } from './SidebarData';
import AuthService from '../utils/auth'; // Ensure the correct path to auth.js

const Sidebar = () => {
    const isAdmin = AuthService.isAdmin();

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
                {isAdmin && (
                    <li onClick={() => {
                        window.location.pathname = '/admin';
                    }} className="row" id={window.location.pathname === '/admin' ? "active" : ""}>
                        <div id="icon">🔒</div>
                        <div id="title">Admin</div>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Sidebar;
