import React from 'react';
import { useEffect, useState } from 'react';

type props = {
    bg?: string
}

export const Waitlist4MobileVariety = (props: props) => {
  const [num, setNumber] = useState(0);

  const action_2 = document.querySelector('.action_2');
  const action_3 = document.querySelector('.action_3');

  const action__2 = () => {
    if (num === 0) {
      action_2?.classList.remove('action_2_box');
      action_3?.classList.remove('action_3_box');

      action_2?.classList.add('action_2');
      action_3?.classList.add('action_3');

      setNumber(1);
    } else if (num === 1) {
      action_2?.classList.remove('action_2');
      action_2?.classList.add('action_2_box');

      setNumber(2);
    } else if (num === 2) {
      action_3?.classList.remove('action_3');
      action_3?.classList.add('action_3_box');

      setNumber(0);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      action__2();
    }, 2000);

    if (num === 0) {
      action_2?.classList.add('action_2');
      action_3?.classList.add('action_3');
    }
  }, [num]);

  return (
    <div className="pt-[100px]" style={{
        backgroundColor: props.bg ? '#EFFAF7' : '#FFF8F2'
    }}>
      <div className="flex justify-center items-center space-x-2">
        <div className="bg-[url('assets/images/svgs/black-star.svg')] bg-contain h-[15px] w-[15px] lg:h-[20px] lg:w-[20px]" />
        <div className="font-pangram-light header-one uppercase tracking-[0.095em] leading-loose text-[12px] lg:text-[20px]">
          Join the Chow africa waitlist
        </div>
        <div className="bg-[url('assets/images/svgs/black-star.svg')] bg-contain h-[15px] w-[15px] lg:h-[20px] lg:w-[20px]" />
      </div>
      <div className="text-[32px] p-[20px] text-center text-black font-pangram-regular">
        Find a wide variety of delicious, nutritious <br />
        <span className="bg-[#009F79] text-white pl-[10px] pr-[10px] border-[2px] rounded-[20px] border-[#353542]">
          food ideas 🍛
        </span>
        , based on your preferences.
      </div>

      <div className="pt-[50px]">
        {[
          {
            header: 'Discover meals',
            text: 'Why wait or think about it? Find your favourite meals or discover nice dishes worth trying.',
            class: 'action_1',
          },
          {
            header: 'Compare prices',
            text: 'Who waits to see how much their favourite meals costs. Certainly not you, so 👇🏽',
            class: 'action_2',
          },
          {
            header: 'Explore options',
            text: 'Its like having a buffet of all the best meal options to choose from - add, remove, pick!',
            class: 'action_3',
          },
        ].map((element, idx) => (
          <div
            key={element.header}
            style={{
              display:
                idx === 1 && num === 0
                  ? 'none'
                  : idx === 2 && (num === 1 || num === 0)
                  ? 'none'
                  : 'initial',
            }}
          >
            <div
              className={`flex justify-between items-center w-full mb-[50px] p-[20px] ${element.class}`}
            >
              <div
                style={{
                  backgroundColor: num === idx ? '#D87023' : '#EEEEEE',
                }}
                className="w-[8px] h-[110px]"
              />
              <div className="w-[90%]">
                <div
                  style={{
                    color: num === idx ? '#000' : '#35354280',
                  }}
                  className="font-pangram-medium text-[24px] font-bold text-black"
                >
                  {element.header}
                </div>
                <div
                  style={{
                    color: num === idx ? '#000' : '#35354280',
                  }}
                  className="font-pangram-regular text-[16px] font-bold text-normal"
                >
                  {element.text}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {num === 0 && (
        <div className="flex w-full justify-center items-center">
          <div className="bg-[url('/assets/images/svgs/phone-img-2.svg')] bg-center bg-contain bg-no-repeat flex justify-center items-center h-[300px] w-[200px]">
            <div className="bg-[url('/assets/images/pngs/food-one.png')] h-[180px] w-[200px] bg-contain bg-no-repeat -ml-[150px]" />
          </div>{' '}
        </div>
      )}
      {num === 1 && (
        <div className="flex w-full justify-center items-center">
          <div className="bg-[url('/assets/images/svgs/phone-img-2.svg')] bg-center bg-contain bg-no-repeat flex justify-center items-center h-[300px] w-[200px]">
            <div className="bg-[url('/assets/images/pngs/food-two.png')] h-[180px] w-[200px] bg-contain bg-no-repeat -ml-[150px]" />
          </div>{' '}
        </div>
      )}
      {num === 2 && (
        <div className="flex w-full justify-center items-center">
          <div className="bg-[url('/assets/images/svgs/phone-img-2.svg')] bg-center bg-contain bg-no-repeat flex justify-center items-center h-[300px] w-[200px]">
            <div className="bg-[url('/assets/images/pngs/food-three.png')] h-[180px] w-[200px] bg-contain bg-no-repeat -ml-[150px]" />
          </div>{' '}
        </div>
      )}
    </div>
  );
};
