import { JoinWaitListHeader } from '../custom/join-waitlist-header';
import { useAuth } from '../../context/auth-context';

export const Waitlist3HeroSection = () => {
  const { email, setEmail } = useAuth();
  return (
    <div className="w-full h-fit bg-[url('/assets/images/svgs/line-black.svg')] pr-[0px] pl-[0px] bg-cover flex justify-start pt-[100px] items-center flex-col bg-[#F4F3E8] mt-[30px] lg:rounded-[30px]">
      <div className="">
        <JoinWaitListHeader />
        <div className="text-black font-pangram-medium leading-[40px] text-center text-[40px] lg:text-[70px] lg:pt-[20px]">
          What will you eat{' '}
          <span className="font-courgette text-[#009F79] sketch">today?</span>
        </div>
        <div className="font-sans pl-[30px] lg:pl-[0px] lg:pr-[0px] pr-[30px] lg:w-full text-center text-[20px] text-[#000] lg:pt-[20px] pt-[40px]">
          Chow africa makes it easy to find and share interesting food ideas.{' '}
          <span aria-label="image" role="img">
            😎
          </span>
        </div>
        <div className="flex justify-center flex-wrap space-y-10 lg:space-y-0 items-center lg:space-x-10 mt-[60px]">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[56px] border w-[349px] leading-[108.1%] tracking-[0.09em] rounded-[10px] font-sans pl-[20px] text-[16px] text-[#1A1A1A]"
          />
          <button className="text-white bg-[#009F79] font-semi-bold leading-[24px] tracking-[0.07em] h-[56px] w-[200px] rounded-[56px] border-2">
            JOIN WAITLIST
          </button>
        </div>
        <div className="bg-[url('/assets/images/svgs/food.svg')] m-[auto] lg:h-[504px] lg:w-[706px] w-[356px] h-[340px] bg-center bg-contain bg-no-repeat" />
      </div>
    </div>
  );
};
