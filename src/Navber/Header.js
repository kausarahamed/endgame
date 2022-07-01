import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <Link to="/" class="btn btn-ghost normal-case text-xl">
            Keep
          </Link>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/">To-do</Link>
            </li>
            <li>
              <Link to="/completed">Compleated</Link>
            </li>
            <li>
              <Link to="/calendars">Calender</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
