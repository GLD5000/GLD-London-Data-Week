import { useState } from 'react';
import HamburgerMenu from './header/HamburgerMenu';
import NavBar from './header/NavBar';
import FullLogoWhiteColour from '../assets/FullLogoWhiteColour';

export default function Header({
  toggleColourTheme,
  colourTheme,
}: {
  toggleColourTheme: () => void;
  colourTheme: boolean;
}) {
  const [showMenu, setShowMenu] = useState(false);
  function toggleShowMenu() {
    setShowMenu((state) => !state);
  }
  return (
    <header
      id="top"
      className="sticky top-0 left-0 right-0 z-[999] grid h-fit w-screen flex-shrink-0 flex-grow-0 grid-cols-frAutoFr content-center border-none border-border dark:border-border-dk bg-bg dark:bg-bg-dk"
    >
      <div className=" col-start-2 ">
        <div
          className=" flex w-body-sm min-w-body  max-w-body flex-wrap items-center justify-between
sm:w-body "
        >
          <a
            className="flex h-16 flex-wrap items-center"
            href="https://ldw-gld.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex flex-row overflow-clip rounded-lg border-none h-16 my-0 w-fit p-1">
              <FullLogoWhiteColour />
            </div>
          </a>
          <NavBar toggleColourTheme={toggleColourTheme} colourTheme={colourTheme} toggleMenu={toggleShowMenu} />
        </div>
        <HamburgerMenu toggleColourTheme={toggleColourTheme} colourTheme={colourTheme} show={showMenu} />
      </div>
    </header>
  );
}
