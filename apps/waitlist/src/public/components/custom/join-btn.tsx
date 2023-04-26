import { useNavigate } from "react-router-dom";

type btnProps = {
  color?: string | undefined;
  title?: string;
};

export const JoinBtn = ({ color, title = 'Join waitlist' }: btnProps) => {
  const navigate = useNavigate();
  return (
    (
      <button
        onClick={() => navigate('/sign-up')}
        className={`bg-[#009F79] btn shadow-lg w-[180px] h-[55px] uppercase border-2 border-[#fff] rounded-[50px] text-white font-sans text-[17px] tracking-wide ${
          color && `bg-[${color}]`
        }`}
      >
        {title}
      </button>
    )
  )
};
