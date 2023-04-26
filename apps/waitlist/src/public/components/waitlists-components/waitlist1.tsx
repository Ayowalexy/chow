import { Layout } from '../../views/layouts/waitlist-layout';
import { HeroSection } from '../cards/hero-sections';
import { TiredHeaderSection } from '../cards/tired-section';
import { BusySection } from '../cards/busy-section';
import { WhyIShouldJoin } from '../cards/why-i-should-join';
import { Footer } from '../cards/footer';
import useMediaQuery from '../hooks/useMediaquery';
import { MobileHeader } from '../custom/mobile-header';
import { MobileMenu } from './mobile-menu';

export const Waitlist1 = () => {
  const matches = useMediaQuery('(min-width: 768px)');
  const doc = document.querySelector('.cursor') as HTMLElement;

  const handleHover = (): void => {
    document.onmousemove = function (e) {
      doc.style.left = e.pageX - 25 + 'px';
      doc.style.top = e.pageY - 25 + 'px';
    };
  };

  return (
    <div data-barba="wrapper" >
      {/* <div className="cursor"></div> */}
      <div data-barba="container"  data-barba-namespace="home">
        <Layout>
          <div className="pt-[50px] body">
            <HeroSection />
            <TiredHeaderSection />
            <BusySection />
            <WhyIShouldJoin />
          </div>
        </Layout>
        {/* <div className="flex body z-40 justify-between items-start bg-white md: lg:p-10 lg:pb-[0px] w-full">
          {matches && <div className="w-[15%]" />}
          <div className="lg:w-[85%] md:w-[75%] w-[100%] overflow-hidden">
            <Footer />
          </div>
        </div> */}
      </div>
    </div>
  );
};
