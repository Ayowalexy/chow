import { JoinWaitListHeader } from '../custom/join-waitlist-header';
import { BusySectionData } from '../utils/images';

export const WaitlistTwoDescribes = () => (
  <div className="w-full mt-[100px] flex flex-col items-center justify-center">
    <div className='w-[80%] flex items-center justify-center'>
      <div className="flex justify-center flex-col items-start ">
        <JoinWaitListHeader />
        <div className="font-pangram-regular text-[#353542] text-[25px] lg:text-[52px]">
          What best describes you? <span role="img" aria-label="image">👀</span>
        </div>
        <div>
          <div className="flex justify-flex- lg:space-x-20 flex-wrap items-start  w-[100%] mt-[50px]">
            {BusySectionData.map((element, idx) => {
              return (
                <div
                  key={element.text}
                  className="lg:h-[337px] h-[378px] mb-[30px] w-[95%]  lg:w-[249px] bg-[#EFFAF7] rounded-[15px] flex justify-center items-center p-4 lg:p-2"
                >
                  <div
                    className={`h-full w-full bg-[#fff] rounded-[15px] bg-[url('/assets/images/svgs/masks-1.svg')] bg-right-bottom bg-no-repeat user_bg pt-[35px] p-[20px]`}
                  >
                    <div className="w-[88px] h-[88px] rounded-[50px] bg-[#EFFAF7] flex justify-center items-center text-[40px]">
                      {element.emoji}
                    </div>
                    <div className="font-pangram-medium pt-[30px] text-[20px]">
                      {element.header}
                    </div>
                    <div className="font-sans font-light pt-[50px] lg:pt-[20px]">
                      {element.text}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </div>
);
