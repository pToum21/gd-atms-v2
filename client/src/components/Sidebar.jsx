import React from 'react';
import { SidebarData } from './SidebarData';
import AuthService from '../utils/auth';
import '../styles/sidebar.css';

const Sidebar = () => {
    const isLoggedIn = AuthService.loggedIn();
    const isAdmin = isLoggedIn && AuthService.isAdmin(); // Only check for admin if logged in

    return (
        <div className="sidebar">
            <ul className="sidebar-list">
                {SidebarData.map((val, key) => (
                    <li key={key} onClick={() => {
                        window.location.pathname = val.link;
                    }} className="row" id={window.location.pathname === val.link ? "active" : ""}>
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                    </li>
                ))}
                {isLoggedIn && isAdmin && ( // Render admin link only if logged in and admin
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
