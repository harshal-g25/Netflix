import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Fade } from "react-reveal";
import { Link, useNavigate } from "react-router-dom";
import { useAnniversary } from "../../Context/AnniversaryContext";

function AnniversaryNavbar() {
  const { lock } = useAnniversary();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const transitionNavBar = () => {
      handleShow(window.scrollY > 80);
    };
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const handleLock = () => {
    lock();
    navigate("/");
  };

  const links = [
    { to: "/home", label: "Home" },
    { to: "/journey", label: "Our Journey" },
    { to: "/letters", label: "Love Letters" },
    { to: "/future", label: "Our Future" },
    { to: "/finale", label: "The Ending" },
  ];

  return (
    <Fade>
      <header className="fixed top-0 z-40 w-full">
        <nav
          className={`transition duration-500 ease-in-out ${
            show ? "bg-black" : ""
          }`}
        >
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/home">
                  <img
                    className="h-6 cursor-pointer w-18"
                    src="https://fontmeme.com/permalink/250902/1c1670dd6284f8d01001e1c74b52aae3.png"
                    alt="Netflix"
                  />
                </Link>
                <div className="hidden md:block">
                  <div className="flex items-center ml-10 space-x-4">
                    {links.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="py-2 font-medium text-white transition ease-in-out delay-150 rounded-md cursor-pointer hover:text-red-800 lg:px-3 text-m"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="ml-auto flex items-center">
                <span className="hidden md:inline text-pink-300/70 text-sm mr-4">
                  ♥ One Year
                </span>
                <button
                  type="button"
                  onClick={handleLock}
                  className="text-white text-sm hover:text-red-500 transition px-3 py-1 border border-stone-700 rounded hover:border-red-800"
                >
                  Lock
                </button>
              </div>

              <div className="flex pl-4 -mr-2 md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:text-white"
                >
                  {!isOpen ? (
                    <svg className="block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  ) : (
                    <svg className="block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="md:hidden bg-black/95 px-2 pt-2 pb-3">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-red-800"
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={handleLock}
                className="block w-full text-left px-3 py-2 text-base text-gray-300 hover:bg-red-800 rounded-md"
              >
                Lock
              </button>
            </div>
          </Transition>
        </nav>
      </header>
    </Fade>
  );
}

export default AnniversaryNavbar;
