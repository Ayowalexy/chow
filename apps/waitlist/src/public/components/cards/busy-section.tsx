import { JoinWaitListHeader } from '../custom/join-waitlist-header';
import { BusySectionData } from '../utils/images';
import useMediaQuery from '../hooks/useMediaquery';
import { JoinBtn } from '../custom/join-btn';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const BusySection = () => {
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
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.texter',
          start: 'top center',
          end: 'bottom bottom',
        },
      }
    );

    gsap.fromTo(
      '.emo',
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
          trigger: '.emo',
          start: 'top center',
          end: 'bottom bottom',
        },
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="h-[4px] w-full bg-[#EEEEEE] mt-[100px] mb-[100px]" />
      <div className="w-full  pb-[20px] bg-[#fff]">
        <div className='texter'>
          <JoinWaitListHeader text="Does this sound like you? 👀" />
        </div>
        <div className="flex justify-center lg:space-x-10 flex-wrap items-center w-[100%] mt-[50px]">
          {BusySectionData.map((element, idx) => {
            return (
              <div
                key={element.text}
                className="h-[387px] emo mb-[30px] w-[90%] lg:w-[249px] bg-[#FCE6E4] rounded-[15px] flex justify-center items-center p-3"
              >
                <div
                  className={`h-full w-full bg-[#fff] rounded-[15px] bg-[url('assets/images/svgs/mask-1.svg')] bg-right-bottom bg-no-repeat user_bg pt-[35px] pl-[20px] pr-[20px]`}
                >
                  <div className="w-[88px] h-[88px] rounded-[50px] bg-[#FCE6E4] flex justify-center items-center text-[40px]">
                    {element.emoji}
                  </div>
                  <div className="font-pangram-medium pt-[30px] text-[20px]">
                    {element.header}
                  </div>
                  <div className="font-sans font-light pt-[70px]">
                    {element.text}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {matches ? (
        <div className="w-full lg:w-[85%] flex-wrap h-fit lg:h-[160px] flex justify-between items-center pl-[30px] pr-[30px] bg-white shadow-2xl  rounded-[20px] border border-1 border-[#EDEFFC]">
          <div className="pt-[40px] lg:pt-[0px] text-black leading-relaxed font-pangram-medium text-[27px]">
            Signup to{' '}
            <span className="bg-[#5F63E1] rounded-[50px] pl-[15px] pr-[15px] pt-[3px] pb-[3px] text-white border border-2 border-[#000] mr-[10px]">
              Chow africa
            </span>{' '}
            today and say <br />
            <span className="bg-[#000] rounded-[50px] pl-[15px] pr-[15px] pt-[3px] pb-[3px] text-white border border-2 border-[#009F79] mr-[10px]">
              goodbye 👋🏽{' '}
            </span>
            to mealtime stress.
          </div>

          <div className="mt-[50px] mb-[30px]">
            <JoinBtn />
          </div>
        </div>
      ) : (
        <div className="w-[97%] h-fit bg-[#fff] border rounded-[20px] p-10 lg:mt-[80px] shadow-lg font-pangram-medium text-[#000] text-[32px]">
          Signup to{' '}
          <span className="bg-[#5F63E1] pl-5 pr-5 text-[#fff] rounded-[50px] border border-2 border-[#000] pt-1 pb-2">
            Chow africa
          </span>{' '}
          <br />
          today and say{' '}
          <span className="bg-[#000] pl-5 pr-5 text-[#fff] rounded-[50px] border border-2 border-[#009F79] pt-1 pb-2">
            goodbye 👋🏽{' '}
          </span>
          to mealtime stress.
          <div className="mt-[70px]">
            <JoinBtn />
          </div>
        </div>
      )}
    </div>
  );
};
