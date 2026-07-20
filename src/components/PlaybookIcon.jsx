import React from 'react';
import { FaBookOpen } from 'react-icons/fa'; // Book icon

export default function PlaybookIcon() {
  return (
    <a 
      href="/playbook/index.html"  // Adjust the path if needed
      target="_blank" 
      rel="noopener noreferrer" 
      className="playbook-icon"
      title="View GTM Playbook"
    >
      <FaBookOpen />
    </a>
  );
}
