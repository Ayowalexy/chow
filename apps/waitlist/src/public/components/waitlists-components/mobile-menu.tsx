import React from 'react';
import {
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  LinkedIn,
} from '../socials/socials';
import { useNavigate } from 'react-router-dom';

export const MobileMenu = () => {
  const navigate = useNavigate();
  return (
    // <RemoveScroll>
    <div style={{zIndex: 1000}} className="z-50 bg-black w-full absolute top-0 left-0 h-[100px]">
      <div className="h-[100vh] mt-[70px] p-5 overflow-hidden absolute w-full bg-right-bottom bg-contain bg-no-repeat">
        <div className="border-y  border-0 pt-[25px] pb-[25px] w-[90vw] lg:w-full">
          <button
            onClick={() => navigate('/sign-up')}
            className="w-full text-[#fff] font-sans font-bold h-[56px] bg-[#D87023] rounded-[32px]"
          >
            JOIN WAITLIST
          </button>
        </div>
        <div className='bar_side'>
          <div className="flex flex-col items-start justify-start space-y-6 mt-[40px]">
            <Twitter color="#000" text="#000" name="Twitter" />
            <Facebook color="#000" text="#000" name="Facebook" />
            <Instagram color="#000" text="#000" name="Instagram" />
            <Youtube color="#000" text="#000" name="Youtube" />
            <LinkedIn color="#000" text="#000" name="LinkedIn" />
          </div>
        </div>
      </div>
    </div>
    // </RemoveScroll>
  );
};
