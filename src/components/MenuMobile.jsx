import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { navMenu, subMenuNav } from "../constants";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  const { products } = useGlobalContext();
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {navMenu.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col"
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <FaChevronDown size={11} />
                </div>

                {showCatMenu && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    {subMenuNav.map((submenu) => {
                      const count = products.filter(
                        (product) => product.category === submenu.name
                      ).length;
                      return (
                        <NavLink
                          key={submenu.id}
                          to="/"
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li className="py-4 px-8 border-t flex justify-between">
                            {submenu.name}
                            <span className="opacity-50 text-sm">{count}</span>
                          </li>
                        </NavLink>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="py-4 px-5 border-b">
                {item.name === "Deals" ? (
                  <NavLink to="/deals">{item.name}</NavLink>
                ) : (
                  <NavLink to={item.url}>{item.name}</NavLink>
                )}
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
