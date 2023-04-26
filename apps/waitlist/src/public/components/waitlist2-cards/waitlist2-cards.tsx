import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export const WaitlistActions = () => {
  useEffect(() => {
    gsap.fromTo(
      '.card_1',
      {
        autoAlpha: 0,
        x: 30,
      },
      {
        duration: 1,
        autoAlpha: 1,
        x: 0,
        stagger: 0.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.card_1',
          start: 'top center',
          end: 'bottom bottom',
        },
      }
    );

    gsap.fromTo(
      '.card_2',
      {
        autoAlpha: 0,
        x: -30,
      },
      {
        duration: 1,
        autoAlpha: 1,
        x: 0,
        stagger: 0.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.card_1',
          start: 'top center',
          end: 'bottom bottom',
        },
      }
    );
  }, []);
  return (
    <div className="flex justify-around flex-col lg:flex-row items-center pt-[170px] h-fit lg:h-[700px] w-full">
      <div className="w-full card_1 mt-[80px] lg:mt-[0px] lg:w-[40%] lg:order-1 order-2 bg-[#FFF8F2] h-full flex justify-center items-end">
        <div className="bg-[url('/assets/images/svgs/phone-img-2.svg')] bg-center bg-contain bg-no-repeat flex justify-center items-center h-[400px] w-[300px]">
          <div className="bg-[url('/assets/images/pngs/food-one.png')] h-[180px] w-[300px] bg-contain bg-no-repeat -ml-[150px]" />
        </div>
      </div>
      <div className="card_2 lg:order-2 order-1 w-full lg:w-[40%] flex flex-col space-y-5 items-start justify-center bg-[#fff] h-full">
        <div className="flex justify-center space-x-5  items-center ">
          <div className="text-[#82829C] font-sans text-[14px] tracking-[2px]">
            FIND MEALS
          </div>{' '}
          <div className="bg-[#E1E2EB] h-[2px] w-[100px]" />
        </div>
        <div className="text-[#353542] font-pangram-medium text-[40px]">
          Discover meals
        </div>
        <div className="text-[#353542] font-sans text-[20px]">
          Why wait or think about it? Find your favorite meals or discover nice
          dishes worth trying
        </div>
        <div className="flex justify-center items-center space-x-2 pt-[60px]">
          <Link to='/sign-up'>
            <div className="text-[#D87023] font-sans text-[18px]">
              Join the waitlist
            </div>
          </Link>
          <div className="bg-[url('/assets/images/svgs/arrow.svg')] bg-contain w-[10px] h-[10px] bg-no-repeat" />
        </div>
      </div>
    </div>
  );
};
