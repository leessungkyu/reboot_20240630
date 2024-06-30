import { CSSProperties, useState } from "react";

type TabControlProps = {
    pages: string[];
    page: number;
    setPage: (page:number) => void;
}
const TabControl = ({pages, page, setPage}:TabControlProps) => {
    // const [page, setPage] = useState<number>(0);

    const tabActive = "w-1/2 border-b-4";
    const tabDisActive = "w-1/2"
    return (
        <div className="flex w-full text-center select-none">
            {pages.map((v,index) => {
                return(
                <div  key = {index} className={page === index ? tabActive : tabDisActive } 
                onClick={() => setPage(index)}>{v}</div>
                )})
            }

            {/* <div className={page === 1 ? tabActive : tabDisActive}
                 onClick={() => setPage(1)}>유틸</div>
            <div className={page === 2 ? tabActive : tabDisActive}
                 onClick={() => setPage(2)}>기타</div>                  */}
        </div>
    )
}

export default TabControl;