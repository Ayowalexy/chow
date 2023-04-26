import { Layout } from '../../views/layouts/waitlist-layout';
import { WaitListBusySection } from '../waitlist2-cards/waitlist2-busy-section';
import { Waitlist2TiredHeaderSection } from '../waitlist2-cards/waitlist2-tired-section';
import { WaitList2HeroSection } from '../waitlist2-cards/waitlist2-hero-sections';
import { WaitlistActions } from '../waitlist2-cards/waitlist2-cards';
import { WaitlistActions2 } from '../waitlist2-cards/waitlist2-cards-1';
import { WaitlistActions3 } from '../waitlist2-cards/waitlist2-cards-2';
import { Footer } from '../cards/footer';
import useMediaQuery from '../hooks/useMediaquery';
import { MobileHeader } from '../custom/mobile-header';
import { MobileMenu } from './mobile-menu';

export const Waitlist2 = () => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <Layout>
        <div>
          <div className='body'>
            <WaitList2HeroSection />
            <Waitlist2TiredHeaderSection />
            <WaitListBusySection />
            <WaitlistActions />
            <WaitlistActions2 />
            <WaitlistActions3 />
          </div>
        </div>
      </Layout>
      <div></div>
      <div className="flex justify-between items-start bg-white md: lg:p-10 w-full">
        {matches && <div className="w-[15%]" />}
        <div className="lg:w-[85%] md:w-[75%] w-[100%] overflow-hidden">
          <Footer />
        </div>
      </div>
    </>
  );
};
