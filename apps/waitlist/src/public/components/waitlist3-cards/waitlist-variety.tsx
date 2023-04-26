import { useEffect, useState } from 'react';
import { JoinWaitListHeader } from '../custom/join-waitlist-header';

export const Waitlist3Variety = () => {
  const [num, setNumber] = useState(0);
  const doc = document.querySelector('.movement');
  const move = document.querySelector('.sliding');

  const action_1 = () => {
    if (num === 0) {
      move?.classList.remove('move_2');
      move?.classList.add('move_0');
      setNumber(1);
    } else if (num === 1) {
      move?.classList.remove('move_0');
      move?.classList.add('move_1');
      setNumber(2);
    } else if (num === 2) {
      move?.classList.remove('move_1');
      move?.classList.add('move_2');
      setNumber(0);
    }
  };

  const action_2 = () => {
    if (num === 0) {
      doc?.classList.remove('slide_2');
      doc?.classList.add('slide_0');
    } else if (num === 1) {
      doc?.classList.remove('slide_0');
      doc?.classList.add('slide_1');
    } else if (num === 2) {
      doc?.classList.remove('slide_1');
      doc?.classList.add('slide_2');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      action_1();
    }, 3000);
  }, [num]);

  useEffect(() => {
    setTimeout(() => {
      action_2();
    }, 3000);
  }, [num]);

  return (
    <div className="bg-[url('/assets/images/pngs/frame-bg.png')] flex flex-col justify-start pt-[100px] items-center w-full h-[1100px] mt-[90px] bg-cover">
      <JoinWaitListHeader />
      <div className="w-[70%]">
        <div className="text-[#000] font-pangram-medium text-[54px] text-center leading-[60px] pt-[20px]">
          Find a wide variety of delicious,
          <br /> nutritious,{' '}
          <span className="bg-[#D87023] text-[#fff] pr-[20px] pl-[10px] border-4 border-[#000] rounded-[50px]">
            food ideas{' '}
            <span role="img" aria-label="image">
              🍝
            </span>
          </span>{' '}
          based on <br />
          your preferences.
        </div>
        <div className="mt-[150px] overflow-hidden h-[550px] flex justify-between items-start w-full">
          <div className="flex w-[45%]  w-full">
            <div className="h-[520px] bg-[#EEEEEE] w-[10px] ">
              <div className="w-[10px] movement h-[100px] move h-[120px] bg-[#D87023]" />
            </div>
            <div className="h-[500px] w-[60%] overflow-scroll scroll scrollbar">
              {[
                {
                  header: 'Discover meals',
                  text: 'This should be an explanation for what this target user can discover',
                },
                {
                  header: 'Compare prices',
                  text: 'This should be an explanation for what this target user can discover',
                },
                {
                  header: 'Explore options',
                  text: 'This should be an explanation for what this target user can discover',
                },
              ].map((element, idx) => (
                <div
                  key={element.header}
                  className="flex justify-start items-start space-x-10"
                >
                  <div className="w-[100%] mb-[80px]">
                    <div className="font-pangram-medium font-semi text-[#353542] text-[40px]">
                      {element.header}
                    </div>
                    <div className="font-sans font-regular  text-[#353542] text-[18px]">
                      {element.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[40%] sliding flex flex-col">
            <div className="h-fit pt-[100px] flex justify-center items-center w-[100%] bg-[#FFF8F2] rounded-[20px] border-5 border-[#fff]">
              <div className="bg-[url('/assets/images/svgs/phone-img-2.svg')] bg-center bg-contain bg-no-repeat flex justify-center items-center h-[400px] w-[300px]">
                <div className="bg-[url('/assets/images/pngs/food-one.png')] h-[180px] w-[300px] bg-contain bg-no-repeat -ml-[150px]" />
              </div>{' '}
            </div>
            <div className="h-fit pt-[100px] flex justify-center items-center w-[100%] bg-[#FFF8F2] rounded-[20px] border-5 border-[#fff]">
              <div className="bg-[url('/assets/images/svgs/phone-img-2.svg')] bg-center bg-contain bg-no-repeat flex justify-center items-center h-[400px] w-[300px]">
                <div className="bg-[url('/assets/images/pngs/food-two.png')] h-[180px] w-[300px] bg-contain bg-no-repeat -ml-[150px]" />
              </div>{' '}
            </div>
            <div className="h-fit pt-[100px] pb-[100px] flex justify-center items-center w-[100%] bg-[#FFF8F2] rounded-[20px] border-5 border-[#fff]">
              <div className="bg-[url('/assets/images/svgs/phone-img-2.svg')] bg-center bg-contain bg-no-repeat flex justify-center items-center h-[400px] w-[300px]">
                <div className="bg-[url('/assets/images/pngs/food-three.png')] h-[180px] w-[300px] bg-contain bg-no-repeat -ml-[150px]" />
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
