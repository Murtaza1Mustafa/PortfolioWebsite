'use client';
import Link from 'next/link';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
  const pathname = usePathname();

  const baseClasses = 'px-6 2xl:px-16 py-4 text-black text-md 2xl:text-2xl rounded transition-all';
  const hoverClasses = 'hover:bg-[#00b4d8] hover:shadow-sm hover:border-[#00b4d8]';

  const getClasses = (href: string) =>
    pathname === href
      ? `${baseClasses} bg-[#00b4d8] shadow-sm text-white border-[#00b4d8]`
      : `${baseClasses} ${hoverClasses}`;

  // Wrap links in a div for flex direction
  return (
    <div className='flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 w-full md:justify-end'>
      <Link className={getClasses('/')} href='/'>
        Home
      </Link>
      <Link className={getClasses('/about')} href='/about'>
        About
      </Link>
      <Link className={getClasses('/Projects')} href='/Projects'>
        Projects
      </Link>
      {/* <Link className={getClasses("/contact")} href="/contact">Contact me</Link> */}
    </div>
  );
};

const Nav = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleNavBar = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <nav className='w-1/3 flex justify-end'>
        <div className='hidden md:flex w-full  justify-between'>
          <NavLinks />
        </div>
        <div className='md:hidden'>
          <button onClick={toggleNavBar}> {isOpen ? <></> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className='flex flex-col '>
          <div className='flex justify-end w-full p-2'>
            <button onClick={toggleNavBar}>
              <X size={24} />
            </button>
          </div>
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
