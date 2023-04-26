import { ReactNode } from 'react';
import { Waitlist2Header } from '../../components/custom/wailtist3-header';
import useMediaQuery from '../../components/hooks/useMediaquery';
import { MobileHeader } from '../../components/custom/mobile-header';

type layoutProps = {
  children: ReactNode;
};

export const Layout2 = ({ children }: layoutProps) => {
  const matches = useMediaQuery('(min-width: 768px)');
  return (
    <div className="w-full pt-[20px]">
      {matches && <Waitlist2Header /> } 
      <div className='lg:mt-[80px]'>{children}</div> 
    </div>
  );
};
