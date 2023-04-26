import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  LinkedIn,
} from '../../public/components/socials/socials';
import useMediaQuery from '../../public/components/hooks/useMediaquery';
import { useAuth } from '../../public/context/auth-context';

export const ConfirmationPage = () => {
  const matches = useMediaQuery('(min-width: 768px)');
  const { name } = useAuth();

  return (
    <div className="w-full h-[100vh] flex flex-col overflow-hidden bg-[#000] bg-[url('assets/images/svgs/confirm-bg.svg')] pl-[40px] lg:pl-[0px] flex flex-col justify-start items-start lg:items-center pt-[80px] bg-contain">
      <div className="bg-[url('assets/images/svgs/chow-logo-colored.svg')] w-[107px] h-[87px] bg-contain bg-no-repeat" />
      <div className="flex justify-center items-center space-x-2 lg:space-x-6 pt-[50px]">
        <div className="bg-[url('assets/images/svgs/star.svg')] bg-contain lg:h-[20px] h-[10px] w-[10px] lg:w-[20px]" />
        <div className="text-white text-[10px] lg:text-[15px] uppercase font-pangram-regular tracking-[3px]">
          SIGNUP CONFIRMED
        </div>
        <div className="bg-[url('assets/images/svgs/star.svg')] bg-contain lg:h-[20px] h-[10px] w-[10px] lg:w-[20px]" />
      </div>

      <div className="text-white font-pangram-medium lg:leading-[90px] leading-[35px] pt-[30px] text-[40px] lg:text-[96px] text-center">
        You’re in,
        <span className="font-courgette text-[#009F79] sketch">
          <TypeAnimation
            cursor={false}
            sequence={[name, 1000]}
            speed={10}
            wrapper="span"
          />
        </span>
        👊🏽
      </div>
      <div className="text-white w-[80%] lg:w-[60%] firsted font-sans text-[14px] p-[10px] lg:text-[20px] text-left lg:text-center pt-[30px]">
        We’ve kept a slice of us for you. You’ll be notified when we{' '}
        launch. Join +2000 chowfans on social media.
      </div>
      <div className="flex flex-col lg:flex-row h-[80px] space-y-6 lg:space-x-6 mt-[30px] lg:mt-[10px]">
        {[
          <Twitter name="Twitter" color="#fff" text="#fff" />,
          <Youtube color="#fff" name="Youtube" text="#fff" />,
          <Facebook color="#fff" name="Facebook" text="#fff" />,
          <LinkedIn color="#fff" name="LinkedIn" text="#fff" />,
          <Instagram color="#fff" name="Instagram" text="#fff" />,
        ].map((element, idx) => (
          <div
            style={{
              alignSelf: matches
                ? idx % 2 === 0
                  ? 'flex-start'
                  : 'flex-end'
                : 'flex-start',
            }}
            key={element.toString()}
          >
            {element}
          </div>
        ))}
      </div>
      {matches && (
        <>
          {/* <div className='absolute w-full -bottom-[30px]'>
        <div className="w-full h-[250px] self-end space-x-0 flex justify-center items-end">
          {['food-one', 'food-two', 'food-three', 'food-four', 'food-five'].map(
            (element) => (
              <div
                key={element}
                style={{
                  backgroundImage: `url(assets/images/svgs/confirm-foods/${element}.svg)`,
                }}
                className="w-1/5 bg-bottom h-[157px] bg-contain bg-no-repeat"
              />
            )
          )}
        </div>
      </div> */}
          <div className="absolute -bottom-[30px] w-full">
            <div className="flex justify-between items-center w-full">
              {[
                'food-six',
                'food-seven',
                'food-8',
                'food.9',
                'food-six',
                'food-seven',
                'food-8',
              ].map((element, idx) => (
                <div
                  style={{
                    marginBottom:
                      idx === 0 || idx === 6
                        ? 200
                        : idx === 2 || idx === 4
                        ? -130
                        : idx === 3
                        ? -200
                        : 0,
                    backgroundImage: `url(assets/images/svgs/confirm-foods/${element}.svg)`,
                  }}
                  className="w-1/6 bg-bottom h-[157px] bg-contain bg-no-repeat"
                  key={element + Math.random()}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
