import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const history = useHistory();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOptionClick = (option) => {
    console.log(`Navigate to ${option}`);
    // Route to the selected option page
    history.push(`/${option.toLowerCase().replace(/\s+/g, "-")}`);
    setDropdownVisible(false);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <div onClick={toggleDropdown}>Template Automation</div>
          {dropdownVisible && (
            <ul>
              <li
                onClick={() =>
                  handleOptionClick("Template Automation Option 1")
                }
              >
                Option 1
              </li>
              <li
                onClick={() =>
                  handleOptionClick("Template Automation Option 2")
                }
              >
                Option 2
              </li>
              <li
                onClick={() =>
                  handleOptionClick("Template Automation Option 3")
                }
              >
                Option 3
              </li>
              {/* Add more options as needed */}
            </ul>
          )}
        </li>
        {/* Add more navbar items with dropdowns as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
