import { useEffect, useState, useRef } from 'react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Waitlist1 } from '../../public/components/waitlists-components/waitlist1';
import { Waitlist2 } from '../../public/components/waitlists-components/waitlist2';
import { Waitlist3 } from '../../public/components/waitlists-components/waitlist3';
import { Waitlist4 } from '../../public/components/waitlists-components/waitlist4';
import { useAuth } from '../../public/context/auth-context';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { MobileMenu } from '../../public/components/waitlists-components/mobile-menu';
import { MobileHeader } from '../../public/components/custom/mobile-header';
import useMediaQuery from '../../public/components/hooks/useMediaquery';

const Waitlist = () => {
  const [waitlist, setWaitlist] = useState<number>(1);
  const matches = useMediaQuery('(min-width: 768px)');
  const { validated } = useAuth();
  const { isOpen } = useAuth();
  const ref = useRef<string | null>(null);

  useEffect(() => {
    if (!Boolean(localStorage.getItem('waitlist'))) {
      localStorage.setItem('waitlist', '1');
    }
    const currentWaitlist = localStorage.getItem('waitlist') || 1;

    setWaitlist(Number(currentWaitlist));

    // window.onbeforeunload = function (e) {
    //   const currentWaitlist = localStorage.getItem('waitlist');
    //   let num = Number(currentWaitlist);
    //   if (num !== 4) {
    //     num = num + 1;
    //     localStorage.setItem('waitlist', num.toString());
    //   } else if (num === 4) {
    //     localStorage.setItem('waitlist', '1');
    //   }
    // };

    // const currentWaitlist = localStorage.getItem('waitlist');
    // let num = Number(currentWaitlist);
    // if(num === 1){
    //   localStorage.setItem('waitlist', '2');
    // } else if(num === 2){
    //   localStorage.setItem('waitlist', '2')
    // } else if(num === 3){
    //   localStorage.setItem('waitlist', '3');
    // } else if(num === 4)
    // if (num !== 4) {
    //   num = num + 1;
    //   localStorage.setItem('waitlist', num.toString());
    // } else if (num === 4) {
    //   localStorage.setItem('waitlist', '1');
    // }

    return () => {
      console.log('running cleanup')
      const currentWaitlist = localStorage.getItem('waitlist');
      let num = Number(currentWaitlist);
      if (num !== 4) {
        num = num + 1;
        localStorage.setItem('waitlist', num.toString());
      } else if (num === 4) {
        localStorage.setItem('waitlist', '1');
      }
    };
  }, []);

  useEffect(() => {
    const body = document.querySelector('.body');
    const menu = document.querySelector('.menu');
    const side = document.querySelector('.bar_side');

    if (isOpen && body && side) {
      body.classList.remove('in');
      body.classList.add('out');

      menu?.classList.remove('menu-in');
      menu?.classList.add('menu-out');
      window.scrollTo(0, 0);
      disableBodyScroll(side);

      ref.current = '**';
    } else if (!isOpen && body && ref.current && side) {
      body.classList.remove('out');
      body.classList.add('in');
      menu?.classList.remove('menu-out');
      menu?.classList.add('menu-in');

      enableBodyScroll(side);
    }
  }, [isOpen]);

  // if (!validated) {
  //   window.location.replace('/');
  //   return null;
  // }

  return (
    <div className="overflow-hidden">
      {!matches && <MobileHeader />}
      <div className="menu z-50">
        <MobileMenu />
      </div>
      <div className="">
        {waitlist === 1 && <Waitlist1 />}
        {waitlist === 2 && <Waitlist2 />}
        {waitlist === 3 && <Waitlist3 />}
        {waitlist === 4 && <Waitlist4 />}
      </div>
    </div>
  );
};

export default Waitlist;
