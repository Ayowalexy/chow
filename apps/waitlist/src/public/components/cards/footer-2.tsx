import { JoinBtn } from '../custom/join-btn';
import { footerIcons } from '../utils/images';
import useMediaQuery from '../hooks/useMediaquery';
import {
  Twitter,
  Facebook,
  Instagram,
  LinkedIn,
  Youtube,
} from '../socials/socials';

type props = {
  type?: string;
};

export const Footer2 = ({ type }: props) => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <div className="lg:mt-[180px] mt-[100px]">
      <div className="w-full h-fit flex flex-col lg:flex-row jusify-between bg-[url('/assets/images/svgs/line-white.svg')] bg-cover item-center bg-[#000] overflow-hidden">
        <div className="w-full lg:w-[50%] pt-[100px] pl-[20px] lg:pl-[100px]">
          <div className="bg-[url('/assets/images/svgs/people.svg')] h-[231px] w-[222px] bg-contain bg-no-repeat" />

          <div className="flex justify-start mt-[50px] items-center space-x-5 lg:space-x-10">
            <div className="bg-[url('/assets/images/svgs/star.svg')] h-[20px] w-[20px] bg-contain bg-no-repeat" />
            <div className="text-white text-[10px] lg:text-[15px] uppercase font-pangram-medium">
              READY, SET, CHOW
            </div>
            <div className="bg-[url('/assets/images/svgs/star.svg')] h-[20px] w-[20px] bg-contain bg-no-repeat" />
          </div>
          <div className="text-white pt-[50px] font-pangram-medium text-[32px] lg:text-[65px] leading-[40px] lg:leading-[70px]">
            Be the first to know <br />
            when <span className="font-courgette sketch">we launch</span>
          </div>
          <div className="font-sans text-[#fff]  lg:pt-[20px] pt-[40px] font-normal text-[20px]">
            Is it time to eat? Chow africa takes away the guess work in finding
            food and exploring interesting meal choices.
          </div>
          <div className="pt-[50px] mb-[100px]">
            <JoinBtn color={type === '4' ? '#D87023' : ''} />
          </div>
        </div>
        {matches ? (
          <div className="w-full lg:w-[50%] flex justify-end items-end">
            <div className="bg-[url('/assets/images/svgs/span.svg')] h-[800px] bg-bottom w-[530px] bg-contain bg-no-repeat" />
          </div>
        ) : (
          <div className="lg:w-[35%] w-[100%] h-full lg:flex lg:justify-end items-end pt-[20px] lg:pt-[0px]">
            <div className="bg-[url('/assets/images/svgs/phone.svg')] phoner bg-no-repeat bg-contain bg-bottom h-[456px] w-full" />
          </div>
        )}
      </div>
      <div className="bg-[#009F79] w-full h-[550px] lg:h-[480px] flex-col pt-[50px] lg:pt-[0px] flex lg:justify-center items-center">
        <div className="bg-[url('/assets/images/svgs/logo.svg')] bg-contain lg:w-[104px] h-[36px] w-[44px] lg:h-[87px] " />
        <div className="text-[#fff] font-pangram-medium text-[14px] lg:text-[20px]">
          Answering the{' '}
          <span className="font-courgette text-[#000] pt-[30px]">
            “what will I eat”
          </span>{' '}
          next question.
        </div>
        <div className="border flex-wrap flex border-t-[0.000001px] border-b-2 w-full  h-fit mt-[60px]">
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
        <div className="text-[#fff] font-sans font-regular text-[16px] pt-[60px]">
          © Huxforte Technologies Ltd 2023.
        </div>
      </div>
    </div>
  );
};
