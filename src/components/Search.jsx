import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='bg-gray-300'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
          <div>
            <h2>Luxury Included Vacations For Two People</h2>
            <p className='py-4'>
              Come experience the very pinnacle of luxury Caribbean
              all-inclusive vacations for couples at Tripster. Our luxury beach
              resorts, set along the most gorgeous tropical settings and
              exquisite beaches in Saint Lucia, Jamaica, Antigua, The Bahamas,
              Grenada, Barbados and Curacao, feature unlimited gourmet dining,
              unique bars serving premium liquors and wines, and every land and
              water sport, including complimentary green fees at our golf
              resorts and certified scuba diving at most resorts. If you are
              planning a wedding, Tripster is the leader in Caribbean
              destination weddings and honeymoon packages.
            </p>
          </div>
          <div className='grid sm:grid-cols-2 gap-8 py-4'>
            <div className='flex flex-col lg:flex-row items-center text-center'>
              <button>
                <RiCustomerService2Fill size={50} />
              </button>
              <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1 ml-4 mr-4'>
                  ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
                </p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center text-center'>
              <button>
                <MdOutlineTravelExplore size={50} />
              </button>
              <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1 ml-4 mr-4'>
                  ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='border text-center mb-4 bg-white text-black font-bold border-none rounded-md'>
            <p className='py-2'>GET AN ADDITIONAL 10% OFF</p>
            <p className='py-4'>12 HOURS LEFT</p>
            <p className='bg-red-600 text-2xl text-gray-200 rounded-b-md py-2'>
              BOOK NOW AND SAVE
            </p>
          </div>
          <form className='w-full'>
            <div className='flex flex-col my-2'>
              <label>Destination</label>
              <select className='border rounded-md py-2'>
                <option>Grande Antigua</option>
                <option>Key West</option>
                <option>Maldives</option>
                <option>Jamaica</option>
              </select>
            </div>
            <div className='flex flex-col my-4'>
              <label>Check-In</label>
              <input className='border rounded-md py-2' type='date' />
            </div>
            <div className='flex flex-col my-2'>
              <label>Check-Out</label>
              <input className='border rounded-md py-2' type='date' />
            </div>
            <div>
              <button className='w-full my-4'>Rates & Availabilities</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
