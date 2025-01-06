import Image from 'next/image';
import Logo from '@/assets/app_logo.png';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialPin from '@/assets/social-pin.svg';
import SocialYoutube from '@/assets/social-youtube.svg';

export const Footer = () => {
  return (
    <footer className='bg-[#97b399] text-[rgb(255,255,255)] text-sm py-10 text-center'>
      <div className='container'>
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:absolute">
          <Image
            className='bg-white rounded-md border border-black'
            src={Logo}
            alt='Saas Logo'
            height={60}
            width={60}
          />
        </div>
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <a href='#'>About</a>
          <a href='#'>Features</a>
          <a href='#'>Customers</a>
          <a href='#'>Pricing</a>
          <a href='#'>Help</a>
          <a href='#'>Careers</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className='mt-6'>
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
