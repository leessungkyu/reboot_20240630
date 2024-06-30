import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setInterval } from "timers/promises";

const TopDiv = () => {
    const items = ["라라필","리프팅","백목주사"]
    const [currentItem,setCurrentItem] = useState<number>(0);



    return <div className="flex justify-between w-full p-4 bg-gray-800 text-white">
        <div>돌아가는 박스</div>
        <div><Link to={"/product/1"}>돋보기</Link></div>
    </div>
}

export default TopDiv;