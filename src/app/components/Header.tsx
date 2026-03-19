import Nav from './Navbar';

const Header = () => {
  return (
    <header className='p-4 shadow-lg shadow-[#90e0ef]/50 sticky top-0 z-[20] mx-auto flex w-full items-center justify-between bg-[#90e0ef]'>
      <h1
        style={{ textShadow: '1px 1px 0 #00b4d8' }}
        className='text-2xl font-semibold text-shadow-[#03045e]'
      >
        {' '}
        Murtaza&apos;s Portfolio{' '}
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
