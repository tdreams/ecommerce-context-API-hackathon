import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { navMenu, subMenuNav } from "../constants";
import { NavLink } from "react-router-dom";

const Menu = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {navMenu.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <FaChevronDown size={11} />
                {showCatMenu && (
                  <ul className="bg-white absolute top-6 lef-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                    {subMenuNav.map((submenu) => {
                      return (
                        <NavLink
                          key={submenu.id}
                          to="/"
                          onClick={setShowCatMenu(true)}
                        >
                          <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                            {submenu.name}
                            <span className="opacity-50 text-sm">78</span>
                          </li>
                        </NavLink>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <NavLink hrefLang={item.url}>{item.name}</NavLink>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
