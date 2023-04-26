import { Layout2 } from '../../views/layouts/waitlist3-layout';
import { Footer2 } from '../cards/footer-2';
import { Waitlist4HeroSection } from '../waitlist4-cards/waitlist4-header';
import { Waitlist4Describes } from '../waitlist4-cards/waitlist4-describe';
import { Waitlist4Variety } from '../waitlist4-cards/waitlist4-variety';
import { WhyIShouldJoin4 } from '../waitlist4-cards/why-i-should-join-4';
import useMediaQuery from '../hooks/useMediaquery';
import { Waitlist4MobileVariety } from '../waitlist4-cards/waitlist4-mobile';

export const Waitlist4 = () => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <Layout2>
      <div className="body">
        <Waitlist4HeroSection />
        <Waitlist4Describes />
        {matches ? <Waitlist4Variety /> : <Waitlist4MobileVariety />}
        <div className="lg:p-[120px]">
          <WhyIShouldJoin4 />
        </div>
        <Footer2 type="4" />
      </div>
    </Layout2>
  );
};
