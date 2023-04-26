import React from 'react';
import { JoinWaitListHeader } from '../custom/join-waitlist-header';

export const Waitlist2TiredHeaderSection = () => (
  <div className="mt-28">
    <JoinWaitListHeader />
    <div className="flex justify-center items-center flex-col">
      <div className="font-pangram-medium text-[#353542] text-[25px] lg:text-[45px] text-center pt-[20px]">
        tired of eating the
      </div>
      <div className="pl-[20px] pr-[20px] font-sans text-[25px] lg:text-[45px] flex justify-center items-center text-[#fff] rounded-[40px] border-4 border-[#000] bg-[#009F79]">
        same dishes{' '}
        <span aria-label="food" role="img">
          🍛 👎🏽{' '}
        </span>
      </div>
      <div className="font-pangram-medium text-[#353542] lg:leading-[50px] text-[25px] lg:text-[45px] text-center">
        Do you crave new and
        <br /> exciting dishes? Look no further! Chow is
        <br /> the perfect solution for discovering
        <br />
        your next dish.
      </div>
    </div>
    <div className="flex w-[100%] pt-[20px] lg:pt-[0px] justify-center items-center">
      <div className="bg-[url('/assets/images/svgs/foods.svg')] bg-contain bg-no-repeat bg-center h-[300px] lg:h-[600px] w-[100%] lg:w-[950px]" />
    </div>
  </div>
);
