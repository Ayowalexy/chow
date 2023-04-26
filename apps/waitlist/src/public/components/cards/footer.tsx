import { JoinBtn } from '../custom/join-btn';
import { footerIcons } from '../utils/images';
import useMediaQuery from '../hooks/useMediaquery';
import {
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  LinkedIn,
} from '../socials/socials';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export const Footer = () => {
  const matches = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    gsap.fromTo(
      '.launch',
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.foot',
          start: 'top center',
          end: 'bottom bottom',
        },
      }
    );

    gsap.fromTo(
      '.launch_t',
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
          trigger: '.foot',
          start: 'top center',
          end: 'bottom bottom',
        },
      }
    );

    gsap.fromTo(
      '.phoner',
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.foot',
          start: 'top center',
          end: 'bottom bottom',
        },
      }
    );
  }, []);

  return (
    <div className="lg:mt-[130px] foot mt-[10px]">
      <div className="w-full lg:rounded-t-[14px] bg-[url('/assets/images/svgs/line-white-2.svg')] h-fit lg:h-[600px] bg-[#D87023] overflow-hidden">
        <div className="flex -z-35 flex-col lg:flex-row justify-between h-full items-center pt-[120px] lg:pt-[0px] lg:p-[0px] pb-[0px] p-[20px] lg:pl-[100px] lg:pr-[100px]">
          <div className="w-full lg:w-[60%] h-full  flex flex-col justify-center items-start">
            <div className="flex justify-center items-center space-x-5 lg:space-x-10">
              <img
                src="/assets/images/svgs/star.svg"
                height={20}
                width={20}
                alt="start"
              />
              <div className="text-white text-[10px] lg:text-[15px] uppercase font-pangram-medium">
                READY, SET, CHOW
              </div>
              <img
                src="/assets/images/svgs/star.svg"
                height={20}
                width={20}
                alt="start"
              />
            </div>

            <div className="l_p">
              <div className="font-pangram-medium pt-[30px] launch text-[32px] leading-[36px] lg:text-[55px] leading-[60px] text-[#fff]">
                Be the first to know when{'  '}
                <span className="font-courgette sketch2">we launch.</span>
              </div>
            </div>
            <div className="text-[#fff] launch_t pb-[30px] pt-[30px] font-normal font-sans text-[14px] lg:text-[20px] font-regular">
              Welp! our app is currently in progress, and we are building up a
              waiting list for new users. Don&apos;t worry, we will notify you
              as soon as a spot becomes available. In the meantime, sign up for
              our waiting list to receive updates and early access to the app.
            </div>
            <JoinBtn />
          </div>
          <div className="lg:w-[35%] w-[100%] h-full lg:flex lg:justify-end items-end pt-[100px] lg:pt-[0px]">
            <div className="bg-[url('/assets/images/svgs/phone.svg')] phoner bg-no-repeat bg-contain bg-bottom h-[456px] w-full" />
          </div>
        </div>
      </div>
      <div className="bg-[#000] w-full h-[550px] lg:h-[480px] flex-col pt-[50px] lg:pt-[0px] flex lg:justify-center items-center">
        <div className="bg-[url('/assets/images/svgs/logo.svg')] bg-contain lg:w-[104px] h-[36px] w-[44px] lg:h-[87px] " />
        <div className="text-[#fff] font-pangram-medium text-[14px] lg:text-[20px]">
          Answering the{' '}
          <span className="font-courgette text-[#D87023] pt-[30px]">
            “what will I eat”
          </span>{' '}
          question.
        </div>
        <div className=" justify-center flex-wrap flex border-t-[0.00000001px] border-t-[rgba(255,255,255,0.3)] border-b-2 w-full  h-fit mt-[60px]">
          {footerIcons.map((element, idx) => (
            <div
              style={{
                justifyContent:
                  idx === 4 && matches 
                  ? 'flex-start' 
                  : idx === 0 && matches 
                  ? 'flex-end'
                  : 'center',

                paddingLeft: idx === 4 && matches ? '50px' : '0px',
              }}
              key={element.name}
              className={`flex items-center space-x-3 h-[80px] w-[50%] lg:w-[200px] 
              ${idx === 0 && matches && 'grow'} 
              ${idx === footerIcons.length - 1 && 'grow'} 
              ${idx === 0 && matches && 'justify-end'}
              ${idx === 0 && matches && 'pr-[50px]'}
              ${idx === footerIcons.length - 1 && 'justify-start'}
              ${idx !== 0 && 'justify-center'}
              ${idx === 0 && !matches && 'justify-center'}
              border-r-[0.00000001px] border-r-[rgba(255,255,255,0.3)]
              `}
            >
              {idx === 0 && <Twitter name={element.name} color="#fff" />}
              {idx === 1 && <Facebook name={element.name} color="#fff" />}
              {idx === 2 && <Instagram name={element.name} color="#fff" />}
              {idx === 3 && <Youtube name={element.name} color="#fff" />}
              {idx === 4 && <LinkedIn name={element.name} color="#fff" />}
            </div>
          ))}
        </div>
        <div className="text-[#727285] font-sans font-regular text-[16px] pt-[60px]">
          © Chow Africa Ltd 2023.
        </div>
      </div>
    </div>
  );
};
