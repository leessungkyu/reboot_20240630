import { useState } from "react";
const SnapShot = () => {
    const [num, setNum] = useState<number>(0);
    const onclick = () => {
        setNum((v)=>v+1);
        console.log(num);
    }
    return (
            <button onClick={onclick}>{num}</button>
            
    )
}
export default SnapShot;