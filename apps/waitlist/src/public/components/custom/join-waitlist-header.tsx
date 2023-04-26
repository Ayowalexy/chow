type cardProp = {
  header?: string;
  text?: string;
};

export const JoinWaitListHeader = ({
  header = 'Join the Chow africa waitlist',
  text,
}: cardProp) => {

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center items-center space-x-3 lg:space-x-10">
        <div className="bg-[url('assets/images/svgs/black-star.svg')] bg-contain h-[15px] w-[15px] lg:h-[20px] lg:w-[20px]" />
        <div className="font-pangram-light header-one uppercase tracking-[0.095em] leading-loose text-[12px] lg:text-[20px]">
          {header}
        </div>
        <div className="bg-[url('assets/images/svgs/black-star.svg')] bg-contain h-[15px] w-[15px] lg:h-[20px] lg:w-[20px]" />
      </div>
      <div className="font-pangram-regular header-two text-[#353542] pt-[20px] lg:pt-[0px] w-[80%] lg:w-[100%] text-[25px] lg:text-[52px] text-center">
        {text}
      </div>
    </div>
  );
};
