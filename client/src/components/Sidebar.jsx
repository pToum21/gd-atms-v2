import React from 'react';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-sidebar-button" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>
      <ul>
        <li>View Tickets</li>
        <li>Create Ticket</li>
      </ul>
    </div>
  );
}

export default Sidebar;
