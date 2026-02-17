import React from "react";
import { Link, Outlet } from "react-router-dom";


function MainLayout() {
  return (
    <div>
      {/* Header part */}
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/html">HTML</Link>
            </li>
            <li>
              <Link to="/css">CSS</Link>
            </li>
            <li>
              <Link to="/javascript">Javascript</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* outlet */}
      <div className="outlet">
        <Outlet />
      </div>
      {/* footer part */}
      <footer>Copyright 2026, All Rights Reserved</footer>
    </div>
  );
}

export default MainLayout;
