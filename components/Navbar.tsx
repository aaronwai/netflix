import { useState, useCallback } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import { BsChevronDown } from "react-icons/bs";
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);
  return (
    <nav className='w-full fixed z-40'>
      <div className='px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90'>
        <img src='/images/logo.png' className='h-4 lg:h-7' alt='Logo' />

        <div className='flex-row ml-8 gap-7 hidden lg:flex'>
          <NavbarItem label={"home"} />
          <NavbarItem label={"series"} />
          <NavbarItem label={"film"} />
          <NavbarItem label={"new & popular"} />
          <NavbarItem label={"my list"} />
          <NavbarItem label={"browser by language"} />
        </div>

        <div
          onClick={toggleMobileMenu}
          className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'
        >
          <p className='text-white text-sm'>browse</p>
          <BsChevronDown className=' text-white transition' />
          <MobileMenu visible={showMobileMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
