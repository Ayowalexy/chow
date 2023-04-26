

type cardProps = {
  img: string;
  icon: string;
  text: string;
};

export const WhyCard = (props: cardProps) => (
  <div className="w-[90%] lg:w-[280px] lg:mb-[0px] h-[458px] mb-[40px] bg-[#000] rounded-[15px] p-[6px]">
    <div
      style={{
        backgroundImage: `url(${props.img})`,
        height: 140,
        width: '100%',
        backgroundSize: 'cover',
      }}
    />
    <div className="w-full border bg-[#FFF8F2] h-[305px] rounded-b-[12px] p-[20px] pt-[60px] pb-[30px]">
      <img
        alt="icon"
        src={`${props.icon}`}
        width={40}
        height={40}
        className="mb-[10px]"
      />
      <div className="text-[#353542] w-[300px] lg:w-full pr-[30px] lg:pr-[0px] font-pangram-medium text-[25px]">
        {props.text}
      </div>
    </div>
  </div>
);
