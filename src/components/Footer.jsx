import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-zinc-600 py-16 text-white'>
      <div className=' mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>Tripster</h1>
          <div className='flex justify-center w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon mx-2' />
            <FaInstagram className='icon mx-2' />
            <FaTwitter className='icon mx-2' />
            <FaYoutube className='icon mx-2' />
            <FaPinterest className='icon mx-2' />
          </div>
        </div>
        <div className='flex justify-between cursor-pointer'>
          <ul className='lg:flex'>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className='text-right lg:flex cursor-pointer'>
            <li>Home</li>
            <li>Destinations</li>
            <li>Home</li>
            <li>Travel</li>
            <li>Books</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
