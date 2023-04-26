import { JoinBtn } from '../custom/join-btn';
import { JoinWaitListHeader } from '../custom/join-waitlist-header';
import { WhyCard } from '../custom/why-card';
import { WhyCardsData } from '../utils/images';
import useMediaQuery from '../hooks/useMediaquery';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

type textProp = {
  text?: string;
};

export const WhyIShouldJoin = ({
  text = 'Why should I join the waitlist?',
}: textProp) => {
  const matches = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    gsap.fromTo(
      '.texter',
      {
        autoAlpha: 0,
        y: -30,
      },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.texter',
          start: 'top center',
          end: 'bottom bottom',
        },
      }
    );
    gsap.fromTo(
      '.why',
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
          trigger: '.why',
          start: 'top center',
          end: 'bottom bottom',
        },
      }
    );
  }, []);

  return (
    <div className="mt-[120px] w-full mb-[40px] lg:mb-[0px] flex flex-col justify-center items-center">
      <div className="texter">
        <JoinWaitListHeader text={text} />
      </div>
      <div className="flex justify-center lg:space-x-10 flex-wrap items-center w-[100%] mt-[50px]">
        {WhyCardsData.map((element, idx) => (
          <div className="why flex justify-center" key={element.text}>
            <WhyCard
              icon={element.icon}
              img={element.img}
              text={element.text}
            />
          </div>
        ))}
      </div>
      <div className="w-[100%] flex-wrap lg:w-[85%] lg:mb-[50px] flex-wrap h-fit pb-[20px] pt-[20px]  mb-[20px] flex justify-between items-center pl-[30px] pr-[30px] bg-white shadow-lg mt-[100px] rounded-[20px]  border">
        {matches ? (
          <>
            <div className="pt-[40px] lg:pt-[0px] text-black leading-relaxed font-pangram-medium text-[27px]">
              Be one of the first to{'   '}
              <br />
              <span className="bg-[#000] rounded-[50px] pl-[15px] pr-[15px] pt-[3px] pb-[3px] text-white border-2 border-[#009F79] mr-[10px]">
                discover new food options
              </span>
              <br />
              with{'  '}
              <span className="bg-[#D87023] rounded-[50px] pl-[15px] pr-[15px] pt-[3px] pb-[3px] text-white border-2 border-[#000] mr-[10px]">
                Chow africa 😎
              </span>{' '}
            </div>
          </>
        ) : (
          <>
            <div className="pt-[40px] lg:pt-[0px] text-black leading-relaxed font-pangram-medium text-[32px]">
              1000+ people
              <br /> like you use{' '}
              <span className="bg-[#5F63E1] rounded-[50px] pl-[15px] pr-[15px] pt-[3px] pb-[3px] text-white border-2 border-[#000] mr-[10px]">
                Chow africa
              </span>
              <span>to find</span>
              <span className="bg-[#000] rounded-[50px] pl-[15px] pr-[15px] pt-[3px] pb-[3px] text-white border-2 border-[#009F79] ">
                what to eat
              </span>{' '}
              in naija😎
            </div>
          </>
        )}
        <div className="mt-[50px] mb-[30px]">
          <JoinBtn />
        </div>
      </div>
    </div>
  );
};
