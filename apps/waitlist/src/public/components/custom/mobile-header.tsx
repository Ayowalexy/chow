import { useAuth } from '../../context/auth-context';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type props = {
  withPadding?: boolean;
};

export const MobileHeader = ({ withPadding = false }: props) => {
  const { setIsOpen, isOpen } = useAuth();
  const [a, setA] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const doc = document.querySelector('#nav-icon1');

    if (a) {
      doc?.classList.toggle('open');
    } else {
      setA(true);
    }
  }, [isOpen]);
  return (
    <div className='fixed w-[100%] left-[0] top-[0] pl-[20px] pr-[20px] pt-[10px] pb-[10px] z-50 bg-white pb-[10px]'>
      <div
        style={{
          paddingLeft: withPadding ? '20px' : '0px',
          paddingRight: withPadding ? '20px' : '0px',
        }}
        className="w-full h-[50px] mb-[10px] justify-between flex items-center"
      >
        <div className="bg-[url(assets/images/svgs/s-logo.svg)] h-[36px] w-[44px] bg-contain bg-no-repeat" />
        <div className="flex space-x-4 justify-between items-center">
          {!isOpen && (
            <button
              onClick={() => navigate('/sign-up')}
              className="bg-[#D87023] w-[114px] h-[32px] rounded-[50px] text-[#fff] text-[13px]"
            >
              JOIN WAITLIST
            </button>
          )}

          <div onClick={() => setIsOpen(!isOpen)} id="nav-icon1">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};
