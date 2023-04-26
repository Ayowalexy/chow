import React from 'react';
import { data } from '../utils/images';
import { FoodCard } from '../custom/food-card';
import useMediaQuery from '../hooks/useMediaquery';
import { JoinBtn } from '../custom/join-btn';
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';

export const HeroSection = () => {
  const [show, setShow] = useState<boolean>(false);
  const matches = useMediaQuery('(min-width: 768px)');
  const navigate = useNavigate();
  const { setEmail, email } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  return (
    <div className="w-full lg:pt-[80px] pt-[50px] lg:pb-[20px] pb-[10px] bg-[url('/assets/images/svgs/m-bg.svg')] lg:bg-[url('/assets/images/svgs/w-1-bg.svg')] bg-no-repeat bg-cover bg-[#000]  rounded-[8px] lg:rounded-[24px] overflow-hidden">
      <div className="z-[30] pt-[70px] lg:pt-[0px]  w-full flex-col flex justify-center items-center">
        <div className="flex lg:pt-[50px] justify-center items-center space-x-3 lg:space-x-10">
          <div className="bg-[url('assets/images/svgs/star.svg')] bg-contain lg:h-[20px] h-[10px] w-[10px] lg:w-[20px]" />
          <div className="text-white text-[10px] lg:text-[15px] uppercase font-pangram-regular tracking-[3px]">
            Join the chow africa waitlist
          </div>
          <div className="bg-[url('assets/images/svgs/star.svg')] bg-contain lg:h-[20px] h-[10px] w-[10px] lg:w-[20px]" />
        </div>
        <div className="text-white boxed font-pangram-semi lg:leading-[90px] leading-[35px] pt-[30px] text-[40px] lg:text-[96px] text-center">
          <div className="boxed-parent">
            Find Chow,{' '}
            {show && (
              <span className="font-courgette text-[#009F79] sketch">
                <TypeAnimation
                  cursor={false}
                  sequence={['Asap', 1000]}
                  speed={10}
                  wrapper="span"
                />
              </span>
            )}
          </div>
        </div>
        <div className="">
          <div className="text-white firsted font-sans text-[14px] p-[10px] lg:text-[20px] text-center pt-[20px]">
            <div className="second">
              The patient dog eats left overs. Be the first to know when we{" "}
              {matches && <br />}
              launch. Join our Waitlist 😎
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:pb-[180px] flex-wrap items-center lg:space-x-10 mt-[30px] lg:mt-[5px]">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="h-[55px] w-[90%] bg-[#D6DAD9] inputed lg:w-[349px] leading-[108.1%] tracking-[0.09em] rounded-[10px] font-sans pl-[20px] text-[16px] text-[#000]"
          />
          <div className="btn mt-[14px] lg:mt-[0px]">
            <JoinBtn />
          </div>
        </div>

        <div className="cards pt-[130px] lg:pt-[0px] flex justify-center item-center space-x-2 lg:space-x-5">
          {data.map((ele, idx) => (
            <FoodCard food={ele} variant="lg" key={idx} />
          ))}
        </div>

        {/* <div className="h-[100px] w-full bg-white" /> */}
      </div>
    </div>
  );
};
