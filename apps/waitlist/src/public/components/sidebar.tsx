import { Twitter, Facebook, Instagram } from './socials/socials';

export const SideBar = () => {
  return (
    <div className="pt-[50px] w-full">
      <div className="ml-[2rem]">
        <div className="bg-[url('assets/images/svgs/s-logo.svg')] h-[56px] w-[68px] " />
        <div className="pt-[60px]">
          <div className="text-brand-200 border-l-2 pl-[20px] border-[#D87023]">
            Home
          </div>
          <div className="text-brand-200 border-l-0 pl-[20px] border-[#D87023] mt-[25px]">
            Join Waitlist
          </div>
          <div className="flex justify-between items-center w-[100%] mt-[25px]">
            <div className="h-[34px] w-[34px] rounded-[5px] mr-[10px] bg-[#F7ECE4] flex justify-center items-center">
              <Facebook color="#D87023" />
            </div>
            <div className="h-[34px] w-[34px] rounded-[5px] mr-[10px] bg-[#F7ECE4] flex justify-center items-center">
              <Twitter color="#D87023" />
            </div>
            <div className="h-[34px] w-[34px] rounded-[5px] mr-[10px] bg-[#F7ECE4] flex justify-center items-center">
              <Instagram color="#D87023" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-0 left-[-30px]" /> */}
    </div>
  );
};
