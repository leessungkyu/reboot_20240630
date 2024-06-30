import { Link } from "react-router-dom";
import Item from "../item";
import { IoTicket  } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

const BottomDiv = () => {
    return (
        <div className=" p-4 w-full  ">
            <nav className="absolute bottom-0 w-full">
                <ul className="flex justify-around ">
                    <li><Link to="/" ><Item imgUrl="https://www.yeoshin.co.kr/assets/m/home_enable.svg?w=512&q=90&f=webp" title="홈"/></Link></li>
                    <li><Link to="/search" ><Item imgUrl="https://www.yeoshin.co.kr/assets/m/explorer_disable.svg?w=512&q=90&f=webp" title="탐색기"/></Link></li>
                    <li><Link to="/review" ><Item imgUrl="https://www.yeoshin.co.kr/assets/m/comment_disable.svg?w=512&q=90&f=webp" title="후기" /></Link></li>
                    <li><Link to="/reservation" ><IoTicket />티켓/예약</Link></li>
                    <li><Link to="/product/123" ><CiUser />마이</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default BottomDiv;
