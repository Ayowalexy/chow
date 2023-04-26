import { FoodCardProps } from 'libs/design-system/src/interfaces/foods/foods.interface';


export const FoodCard = (props: FoodCardProps) => (
  <div className={`bg-white w-[161px] scaler h-[180px] lg:w-[264px] lg:h-[310px] p-2 rounded-[15px]`}>
    <div className={`flex justify-center items-center h-[80px] lg:h-[161px] w-full rounded-[15px] bg-[#F4F3E8]`}>
      <div
        style={{
          backgroundImage: `url(${props.food.img})`,
          height: '70%',
          width: 320,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      />
    </div>
    <div className="pt-[20px]">
      <p className="text-[#3C3937] font-pangram-medium text-[8px] lg:text-[14px]">
        {props.food.name}
      </p>
      <div className="bg-[#D6D5CA] rounded-[13px] w-[fit-content] lg:p-[5px] lg:pl-4 lg:pr-4 mt-[10px] font-pangram-regular text-[8px] lg:text-[12px] tracking-[0.2em]">
        CONTINENTAL
      </div>
      <div className="flex justify-start items-center space-x-2 mt-[10px]">
        <img src="/assets/images/svgs/thumbs.svg" className="h-[13px]" />
        <div className="text-[#858786] text-[6px] lg:text-[12px]">120picks</div>
        <div className="bg-[#858786] h-[4px] w-[4px] rounded-[20px]" />
        <div className="text-[#858786] text-[6px] lg:text-[12px]">Approx. ₦3,000</div>
      </div>
    </div>
  </div>
);

