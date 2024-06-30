import { useState } from "react";
type PriceProps = {
    Price: number;
}
const InputCount = ({Price}:PriceProps) => {
    const [cnt, setCnt] = useState(1);

    const handleAdd = () => {
        setCnt(cnt + 1);
    }
    const handleMinus = () => {
        setCnt(cnt === 1 ? 1 : cnt -1);
    }    


    return (
        <>
            <div className="flex items-center gap-2">
                <button className="border border-slate-500 text-red-600" onClick={handleMinus}>-</button>
                <span>{cnt}</span>
                <button onClick={handleAdd}>+</button>
            </div>
            <div>
                {Price * cnt}
            </div>
        </>
    )
}

export default InputCount;