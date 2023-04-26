import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export const WaitlistActions3 = () => {
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
    <div className="flex justify-around flex-col lg:flex-row h-fit items-center pt-[170px] lg:h-[700px] w-full">
      <div className="lg:order-1 card_1 mt-[80px] lg:mt-[0px] order-2 w-full lg:w-[40%] bg-[#FFF8F2] h-full flex justify-center items-end">
        <div className="bg-[url('/assets/images/svgs/phone-img-2.svg')] bg-center bg-contain bg-no-repeat flex justify-center items-end h-[400px] w-[300px]">
          <div className="bg-[url('/assets/images/pngs/food-three.png')] h-[250px] w-[300px] bg-contain bg-no-repeat -ml-[150px]" />
        </div>
      </div>
      <div className="lg:order-2 card_2 order-1 w-full lg:w-[40%] flex flex-col space-y-5 items-start justify-center bg-[#fff] h-full">
        <div className="flex justify-center space-x-5  items-center ">
          <div className="text-[#82829C] font-sans text-[14px] tracking-[2px]">
            FIND VARIETIES
          </div>{' '}
          <div className="bg-[#E1E2EB] h-[2px] w-[100px]" />
        </div>
        <div className="text-[#353542] font-pangram-medium text-[40px]">
          Explore options
        </div>
        <div className="text-[#353542] font-sans text-[20px]">
          Its like having a buffet of all the best meal options to choose from -
          add, remove, pick!
        </div>
        <div className="flex justify-center items-center space-x-2 pt-[60px]">
          <Link to="/sign-up">
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
