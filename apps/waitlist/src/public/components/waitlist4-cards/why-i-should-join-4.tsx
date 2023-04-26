import { JoinBtn } from '../custom/join-btn';
import { JoinWaitListHeader } from '../custom/join-waitlist-header';
import { WhyCard } from '../custom/why-card';
import { WhyCardsData } from '../utils/images';
import useMediaQuery from '../hooks/useMediaquery';

export const WhyIShouldJoin4 = () => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <div className="lg:mt-[120px] mt-[60px] flex flex-col justify-center items-center">
      <JoinWaitListHeader text="Discover, Compare, Explore meals" />
      <div className="flex flex-wrap justify-center lg:justify-between w-full lg:w-[85%] mt-[90px]">
        {WhyCardsData.map((element, idx) => (
          <WhyCard
            key={element.text}
            icon={element.icon}
            img={element.img}
            text={element.text}
          />
        ))}
      </div>
      <div className="lg:w-full w-[90%] pt-[50px] lg:pt-[0px] lg:pb-[0px] pb-[50px] flex-wrap h-fit lg:h-[160px] flex justify-between items-center pl-[30px] pr-[30px] bg-white shadow-2xl mt-[100px] rounded-[20px] border-1 border-[#EDEFFC]">
        {matches ? (
          <div className="text-black leading-relaxed font-pangram-medium text-[32px]">
            Be one of the first to{'   '}
            <span className="bg-[#5F63E1] rounded-[50px] pl-[15px] pr-[15px] pt-[3px] pb-[3px] text-white border-2 border-[#009F79] mr-[10px]">
              discover new food options
            </span>
            <br />
            with{'  '}
            <span className="bg-[#D87023] rounded-[50px] pl-[15px] pr-[15px] pt-[3px] pb-[3px] text-white border-2 border-[#000] mr-[10px]">
              Chow africa
            </span>{' '}
            Signup now!😎
          </div>
        ) : (
          <div>
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
          </div>
        )}

        <JoinBtn />
      </div>
    </div>
  );
};
