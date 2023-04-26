import { FoodCardProps } from 'libs/design-system/src/interfaces/foods/foods.interface';

export const FoodCardSM = (props: FoodCardProps) => (
  <div className={`bg-white w-[85px] lg:w-[134px] mr-[10px] shadow-xl mb-[10px] h-[111px] lg:h-[165px] p-2 rounded-[15px]`}>
    <div className="flex justify-center items-center h-[56px] lg:h-[84px] w-full rounded-[15px] bg-[#F4F3E8]">
      {/* <img src={props.food.img} className="h-[70%]" /> */}
      <div 
        style={{
          backgroundImage: `url(${props.food.img})`,
          height: '70%',
          width: 100,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center'
        }}
      />
    </div>
    <div className="pt-[10px]">
      <p className="text-[#3C3937] font-pangram-medium text-[4px] lg:text-[8px]">
        {props.food.name}
      </p>
      <div className="bg-[#D6D5CA] rounded-[13px] w-[fit-content] p-[2px] pl-4 pr-4 mt-[5px] font-pangram-regular text-[3px] lg:text-[6px] tracking-[0.2em]">
        CONTINENTAL
      </div>
      <div className="flex justify-start items-center lg:space-x-2 mt-[4px]">
        <div 
          style={{
            backgroundImage: `url(/images/svgs/thumbs.svg)`,
          }}
          className='thumbs'
        />
        <div className="text-[#858786] text-[3px] lg:text-[6px]">120picks</div>
        <div className="bg-[#858786] h-[4px] w-[4px] rounded-[20px]" />
        <div className="text-[#858786] text-[3px] lg:text-[6px]">Approx. ₦3,000</div>
      </div>
    </div>
  </div>
);
