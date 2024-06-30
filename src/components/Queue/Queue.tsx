import { useState } from "react"

const Queue = () => {
    const [num, setNum] = useState<number>(1);

    const click = () => {
        setNum(num + 1);   // 1 + 1
        setNum(num + 1);   // 1 + 1
        setNum(num + 1);   // 1 + 1

        setNum((n)=>n+1);  // 2 + 1
        setNum((n)=>n+1);  // 3 + 1
        setNum((n)=>n+1);  // 4 + 1
    }

    return (
        <div onClick={click}>{num}</div>
    )
}

export default Queue;