import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { BsCart } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";
import { useCartContext } from "../context/cart_context";

const NavBar = () => {
  const { cart } = useCartContext();
  const totalItems = cart.reduce((total, product) => total + product.amount, 0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}  border-b-[1.5px] border-y-gray-200`}
    >
      <Wrapper classname="h-[60px] flex justify-between items-center ">
        <NavLink to="/">
          <h2 className="font-bold text-2xl">Shopcart</h2>
        </NavLink>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            mobileMenu={mobileMenu}
            SetMobileMenu={setMobileMenu}
            setShowCatMenu={setShowCatMenu}
          />
        )}

        <div className="flex">
          {/* Icon Cart start */}
          <div className="w-8 md:w-12 rounded-full flex justify-center items-center cursor-pointer relative mr-2">
            <NavLink to="/cart">
              <BsCart className="text-[15px] md:text-[20px]" />
              <div className="absolute top-[-8px] right-0">
                {totalItems > 0 && (
                  <span className="text-sm bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center ml-1">
                    {totalItems}
                  </span>
                )}
              </div>
            </NavLink>
          </div>
          {/* Icon Cart ebd */}

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative lg:hidden md:hidden">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[16px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default NavBar;
