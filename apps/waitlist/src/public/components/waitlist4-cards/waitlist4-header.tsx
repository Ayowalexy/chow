import { JoinWaitListHeader } from '../custom/join-waitlist-header';

import { JoinBtn } from '../custom/join-btn';
import useMediaQuery from '../hooks/useMediaquery';
import { useAuth } from '../../context/auth-context';

export const Waitlist4HeroSection = () => {
  const matches = useMediaQuery('(min-width: 768px)');
  const { email, setEmail } = useAuth();
  return (
    <div className="w-full flex-col lg:flex-row h-fit bg-[url('/assets/images/svgs/line-black-2.svg')] bg-cover flex justify-between pt-[100px] items-between flex-row bg-[#009F79] mt-[30px]">
      <div className="flex justify-start flex-col pb-[30px] lg:pb-[100px] items-start w-full lg:w-[50%] pl-[20px] lg:pl-[100px]">
        <div className="flex  space-x-3 lg:space-x-10">
          <img
            src="/assets/images/svgs/star.svg"
            height={20}
            width={20}
            alt="start"
          />
          <div className="text-white text-[10px] lg:text-[15px] uppercase font-pangram-regular tracking-[3px]">
            Join the chow africa waitlist
          </div>
          <img
            src="/assets/images/svgs/star.svg"
            height={20}
            width={20}
            alt="start"
          />
        </div>
        <div className="font-pangram-medium leading-[50px] lg:leading-[90px] pt-[50px] font-semi text-[#fff] text-[48px] lg:text-[90px]">
          Foodie's <br /> Paradise: <br />
          Find Your <br /> <span className="sketch">Next Meal</span>
          {matches && <br />} on {!matches && <br />}Chow
        </div>
        <div className="flex flex-wrap justify-start lg:justify-center items-center space-y-6 lg:space-y-0 lg:space-x-10 mt-[60px]">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[56px] w-[349px] leading-[108.1%] tracking-[0.09em] rounded-[10px] font-sans pl-[20px] text-[16px] text-[#1A1A1A]"
          />
          <JoinBtn color="#D87023" />
        </div>
      </div>
      <div className="w-full lg:w-[50%] flex justify-center lg:justify-end items-center">
        <div className="bg-[url('/assets/images/svgs/food-4.svg')] bg-contain bg-no-repeat h-[308px] lg:h-[570px] w-[320px] lg:w-[592px]" />
      </div>
    </div>
  );
};
