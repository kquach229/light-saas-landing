import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/app_logo.png';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';

export const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className='flex justify-center items-center py-3 bg-[#97b399] text-white text-sm gap-3'>
        <p className='text-white/80 hidden md:block'>
          Streamline your workflow and boost your productivity
        </p>
        <div className='inline-flex gap-1 items-center'>
          <p>Get started for free</p>
          <ArrowRight className='h-4 w-4 inline-flex justify-center items-center' />
        </div>
      </div>
      <div className='py-5'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <Image
              className='bg-white rounded-md border border-black'
              src={Logo}
              alt='Saas Logo'
              height={60}
              width={60}
            />
            <MenuIcon className='h-5 w-5 md:hidden' />
            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              <a href='#'>About</a>
              <a href='#'>Features</a>
              <a href='#'>Customers</a>
              <a href='#'>Updates</a>
              <a href='#'>Help</a>
              <button className='bg-[#97b399] text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight'>
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
