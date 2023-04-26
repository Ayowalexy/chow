import { Layout2 } from '../../views/layouts/waitlist3-layout';
import { Waitlist3HeroSection } from '../waitlist3-cards/waitlist3-header';
import { WaitlistTwoDescribes } from '../waitlist3-cards/waitlist3-describe';
import { Waitlist3Variety } from '../waitlist3-cards/waitlist-variety';
import { WhyIShouldJoin } from '../cards/why-i-should-join';
import { Footer2 } from '../cards/footer-2';
import useMediaQuery from '../hooks/useMediaquery';
import { Waitlist4MobileVariety } from '../waitlist4-cards/waitlist4-mobile';

export const Waitlist3 = () => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <Layout2>
      <div className="lg:pr-[50px] body lg:pl-[50px]">
        <Waitlist3HeroSection />
        <WaitlistTwoDescribes />
      </div>
      {matches ? <Waitlist3Variety /> : <Waitlist4MobileVariety bg='#FFF8F2' />}
      <div className="lg:p-[120px]">
        <WhyIShouldJoin text="Recipes, Taste Bud, Foodiverse" />
      </div>
      <Footer2 />
    </Layout2>
  );
};
