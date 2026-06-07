import Nav from './Navbar';

const Header = () => {
  return (
    <header className='p-4 sticky top-0 z-[20] mx-auto flex w-full items-center justify-between bg-[#0077b6]'>
      <h1 className='text-2xl font-extrabold'> Murtaza&apos;s Portfolio </h1>
      <Nav />
    </header>
  );
};

export default Header;
