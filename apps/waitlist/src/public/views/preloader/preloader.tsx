import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/auth-context';
import useMediaQuery from '../../components/hooks/useMediaquery';

export const Preloader = () => {
  const navigate = useNavigate();
  const [pwd, setPwd] = useState<any>('');
  const { setValidated } = useAuth();
  const matches = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    // const password = window.prompt('Enter password');
    // setPwd(password);
  }, []);

  useEffect(() => {
    // if (pwd === process.env.NX_PASSWORD) {
      setTimeout(() => {
        setValidated(true);
        navigate('/waitlist');
      }, 1752);
    // }
  }, [navigate, pwd]);
  // if (window.location.host === process.env.NX_STAGING || window.location.host === process.env.NX_LOCAL_HOST) {
  //   if (pwd !== process.env.NX_PASSWORD) {
  //     return null;
  //   }
  // }

  return (
    <div className="loader overflow-hidden" data-barba="wrapper">
      <div
        data-barba="container"
        data-barba-namespace="home"
        className="h-[100%] bg-gradient-to-b w-[100%] -z-30 from-black-100 to-black-200 overflow-hidden"
      >
        {matches ? (
          <div className="absolute">
            <div className="lg:h-[100vh] w-full origin-center  z-10 rotate-09 -mt-[400px]">
              <div className="text-chow lg:text-10xl anim">CHOW AFRICA</div>
              <div className="text-chow lg:text-10xl anim1">CHOW AFRICA</div>
              <div className="text-chow lg:text-10xl anim">CHOW AFRICA</div>
              <div className="text-chow lg:text-10xl anim1">CHOW AFRICA</div>
              <div className="text-chow lg:text-10xl anim">CHOW AFRICA</div>
            </div>
          </div>
        ) : (
          <div className="absolute w-full overflow-hidden top-0">
            <div className="h-[100vh] w-full origin-center pt-[190px]  rotate-09  z-10">
              <div className="text-chow anim text-10xl">Chow africa</div>
              <div className="text-chow anim1 text-10xl">Chow africa</div>
            </div>
          </div>
        )}

        <div className="flex justify-center -z-50 items-center flex-col w-full h-[100vh]">
          <img
            src="/assets/images/pngs/chow_logo.png"
            height={96}
            width={117}
            alt="user"
            className="h-[108px]"
          />
          <div className="flex justify-center items-center mt-[20px]">
            <div className="text-white font-sans text-[16px] lg:text-[23px]">
              Helping you find what to eat in...
            </div>
            <div className="lg:pl-[20px] pl-[10px] text-brand-100 text-[16px] lg:text-[28px]">
              <CountUp end={100} duration={1.75} />
            </div>
            <div className="text-white text-brand-100 text-[16px] lg:text-[28px]">
              %
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
