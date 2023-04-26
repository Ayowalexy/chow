
import { AiFillLinkedin, AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { JoinBtn } from "./join-btn"

export const Waitlist2Header = () => (
    <div className="w-full z-40 bg-white h-[100px] fixed top-0 flex justify-between items-center pr-[50px] pl-[50px]">
        <img src='/assets/images/svgs/m-logo.svg' width={68} height={56} alt='logo' />
        <div className="flex justify-center items-center space-x-7">
            <div className="flex justify-center items-center space-x-3">
                <AiFillLinkedin fill='#000' size={20} />
                <BsFacebook fill="#000" size={20} />
                <AiOutlineTwitter fill="#000" size={20} />
                <AiOutlineInstagram fill="#000" size={20} />
                <AiFillYoutube fill="#000" size={20} />
            </div>
            <JoinBtn color="#D87023" />
        </div>
    </div>
)