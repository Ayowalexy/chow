import React from 'react';

import { data } from '../utils/images';
import { FoodCardSM } from '../custom/food-card-sm';
import { JoinWaitListHeader } from '../custom/join-waitlist-header';
import useMediaQuery from '../hooks/useMediaquery';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

export const TiredHeaderSection = () => {
  const matches = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    gsap.fromTo(
      '.boxes',
      {
        autoAlpha: 0,
        // scale: 0,
        x: -30
      },
      {
        duration: 1,
        autoAlpha: 1,
        x: 0,
        stagger: 0.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.boxes',
          start: 'top center',
          end: 'bottom bottom',
        },
      }
    );

    gsap.fromTo(
      '.cardio',
      {
        autoAlpha: 0,
        x: 40,
      },
      {
        duration: 1,
        autoAlpha: 1,
        x: 0,
        ease: 'elastic.out(1, 0.3)',
        stagger: 0.5,
        scrollTrigger: {
          trigger: '.card',
          start: 'top center',
          end: 'bottom bottom',
        },
      }
    );

    gsap.fromTo(
      '.spin',
      {
        autoAlpha: 0,
        rotateX: -90,
        y: 40
        
      },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        rotateX: 0,
        ease: 'elastic.out(1, 0.3)',
        scrollTrigger: {
          trigger: '.card',
          start: 'top center',
          end: 'bottom bottom',
        },
      }
    );
  }, []);
  return (
    <div className="mt-28">
      <JoinWaitListHeader />
      <div className="flex justify-center items-center flex-col">
        {matches ? (
          <>
            <div className="" id="section_1">
              <div className="">
                <div className="font-pangram-medium child text-[#353542] text-[64px] text-center pt-[20px]">
                  tired of eating the
                </div>
                <div className="font-sans text-[40px] flex justify-center items-center text-[#fff] rounded-[40px] border-4 border-[#000] bg-[#D87023]">
                  🍛 same dishes everyday? 🍝
                </div>
              </div>
            </div>
            <div>
              <div className="text-[#000] font-sans text-[18px] text-center leaading-5 pt-[40px]">
                Do you crave new and exciting dishes? Look no further! Chow is
                the
                <br />
                perfect solution for discovering your next dish.
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="font-pangram-medium pt-[10px] w-[90%] font-normal text-[#353542] text-[32px] text-center">
              Are you tired of eating the same dishes
              <span className="bg-[#D87023] text-[#fff] pl-[10px] pr-[10px] rounded-[30px] border border-2 border-[#000]">
                everyday?
              </span>
            </div>
            <div className="font-sans text-[#000] text-[15px] pt-[30px] text-center">
              Do you crave new and exciting dishes? Look no further! Chow is the
              perfect solution for discovering your next dish.
            </div>
          </>
        )}

        <div className="bg-[#FFF8F2] card overflow-hidden flex flex-col lg:flex-row justify-center items-center w-full h-fit p-[20px] mt-[70px] rounded-[15px]">
          <div className="lg:w-1/2 max-w-[500px] flex justify-center items-center flex-wrap">
            {data.map((element, idx) => (
              <div key={idx} className="boxes">
                <div
                  className={
                    idx === 0 || idx === 4 || idx === 8
                      ? 'opacity-100'
                      : 'opacity-30'
                  }
                >
                  <FoodCardSM food={element} variant="sm" />
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/2 flex justify-around mb-[-170px] lg:mb-[0px] items-center h-full mt-[60px] lg:mt-[0px]">
            <div className="bg-[url('/assets/images/pngs/user.png')] bg-contain h-[550px] w-[270px] lg:w-[397px] bg-no-repeat">
              <div className="lg:h-1/2 h-1/3  flex justify-end items-center">
                <div className="spin lg:w-[191px] w-[130px] h-[59px] flex flex-col justify-center px-3 -mr-[10px] lg:-mr-[100px] bg-[#D87023] rounded-[10px] border border-2">
                  <span>💵</span>
                  <span className="text-[#fff] font-sans text-[7px] lg:text-[11px]">
                    You can buy all for{' '}
                    <span className="text-[#01FFC2]">N2,500</span> at Yaba
                  </span>
                </div>
              </div>
              <div className="">
                <div className="bg-[#009F79] cardio h-[39px] font-sans flex justify-start px-2 items-center space-x-2 text-[#fff] text-[10px] w-[170px] lg:w-[175px] rounded-[8px] -ml-[20px] border border-2">
                  <span className="bg-[#1E735E] h-[24px] w-[24px] rounded-[50px] flex justify-center items-center">
                    👍🏽
                  </span>
                  <span>Picked by 314 people today</span>
                </div>
                <div className="bg-[#009F79] cardio h-[39px] font-sans flex justify-start px-2 items-center space-x-2 text-[#fff] text-[10px] w-[160px] lg:w-[175px] rounded-[8px] ml-[40px] mt-[4px] lg:mt-[15px] border border-2">
                  <span className="bg-[#1E735E] h-[24px] w-[24px] rounded-[50px] flex justify-center items-center">
                    🧅
                  </span>
                  <span>Exclude onions.</span>
                </div>
                <div className="bg-[#009F79] cardio h-[39px] font-sans flex justify-start px-2 items-center space-x-2 text-[#fff] text-[10px] w-[160px] lg:w-[175px] rounded-[8px]  ml-[80px] mt-[4px] lg:mt-[15px] border border-2">
                  <span className="bg-[#1E735E] h-[24px] w-[24px] rounded-[50px] flex justify-center items-center">
                    🥩
                  </span>
                  <span>Must include turkey</span>
                </div>
                <div className="bg-[url('/assets/images/svgs/and-love.svg')] bg-contain bg-no-repeat ml-[400px] -z-50 h-[50px] w-[50px] bg-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
