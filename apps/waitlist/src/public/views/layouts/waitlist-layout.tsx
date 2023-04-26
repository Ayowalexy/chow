import { ReactNode } from 'react';
import { SideBar } from '../../components/sidebar';
import useMediaQuery from '../../components/hooks/useMediaquery';

interface layoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: layoutProps) => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <div className="flex justify-between items-start bg-white pt-5 pr-5 pl-5 lg:pl-0 lg:pt-10 lg:pr-10 lg:pb-[0px] w-full">
      {matches && (
        <div className="w-[15%] z-10 ">
          <div className='w-full h-[100vh]'>
            <div className="fixed bg-[url('assets/images/svgs/side.svg')] bg-no-repeat bg-contain bg-bottom  overflow-hidden h-full">
              <SideBar />
            </div>
          </div>
        </div>
      )}
      <div className="lg:w-[85%] md:w-[75%] w-[100%] overflow-hidden">
        {children}
      </div>
    </div>
  );
};
