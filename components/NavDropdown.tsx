import React, { useState } from "react";
import Link from "next/link";
import styles from "./NavDropdown.module.scss";

function NavDropdown() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className={styles.navDropdownContainer}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        id="nav-dropdown-button"
        className={styles.navDropdownButton}
        role="combobox"
        aria-controls="nav-dropdown-options"
        aria-expanded={isOpen}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        About +
      </button>
      {isOpen && (
        <ul id="nav-dropdown-options" className={styles.navDropdownOptions}>
          <li>
            <a
              href="https://rainydawgradioblog.tumblr.com/"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <a href="http://166.62.119.4:8000/stream"
            target="_blank"
            rel="noreferrer"
            >
              Direct Stream Link</a>
          </li>
          <li>
            <Link href="/studio-recordings">Studio Recordings</Link>
          </li>
          <li>
            <Link href="/schedule">Schedule</Link>
          </li>
          <li>
            <Link href="/volunteer">Volunteer</Link>
          </li>
          <li>
            <Link href="/staff-and-contact">Staff and Contact</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default NavDropdown;
