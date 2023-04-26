import React from 'react';
import { data } from '../utils/images';
import { TypeAnimation } from 'react-type-animation';

import { FoodCard } from '../custom/food-card';
import useMediaQuery from '../hooks/useMediaquery';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';

export const WaitList2HeroSection = () => {
  const matches = useMediaQuery('(min-width: 768px)');
  const navigate = useNavigate();
  const { email, setEmail } = useAuth();

  return (
    <div className="w-full bg-[url('/assets/images/svgs/waitlist2-bg.svg')] lg:pt-[160px] pt-[70px] lg:pb-[20px] pb-[10px]  bg-no-repeat bg-cover pt-[20px]  bg-[#D87023] rounded-[10px] lg:rounded-[24px] overflow-hidden">
      <div className="">
        <div className="z-[30] w-full flex-col flex justify-center items-center">
          <div className="flex pt-[67px] lg:pt-[0px] justify-center items-center space-x-3 lg:space-x-10">
            <div className="bg-[url('/assets/images/svgs/star.svg')] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] bg-contain" />
            <div className="text-white text-[10px] lg:text-[15px] uppercase font-pangram-regular tracking-[3px]">
              Join the chow africa waitlist
            </div>
            <div className="bg-[url('/assets/images/svgs/star.svg')] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] bg-contain" />
          </div>
          <div className="text-white font-pangram-semi lg:leading-[90px] leading-[35px] pt-[30px] text-[40px] lg:text-[96px] text-center">
            {!matches ? (
              <>
                Swipe to <br /> find Chow, <br />
              </>
            ) : (
              <>
                Swipe to find Chow, <br />
              </>
            )}
            <span className="font-courgette text-[#36D0B8] sketch3">Asap!</span>
          </div>
          <div className="text-white font-sans text-[14px] p-[10px] lg:text-[20px] text-center pt-[30px]">
            Is it time to eat? Chow africa takes away the guess work in{" "}
            {matches && (
              <>
                <br />
              </>
            )}
            {" "}finding food and exploring interesting meal choices.
          </div>
          <div className="flex justify-center flex-wrap items-center lg:space-x-10 mt-[30px] lg:mt-[60px]">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-[56px] w-[90%] lg:w-[349px] leading-[108.1%] tracking-[0.09em] rounded-[10px] font-sans pl-[20px] text-[16px] text-[#1A1A1A]"
            />
            <button
              onClick={() => navigate('/sign-up')}
              className="text-white mt-[30px] lg:mt-[0px] bg-[#009F79] font-semi-bold leading-[24px] tracking-[0.07em] h-[56px] w-[200px] rounded-[56px] border-2"
            >
              JOIN WAITLIST
            </button>
          </div>
          <div className="cards mt-[80px] lg:mt-[100px] flex justify-center item-center space-x-3 lg:space-x-6">
            {data.map((ele, idx) => (
              <FoodCard food={ele} variant="lg" key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
