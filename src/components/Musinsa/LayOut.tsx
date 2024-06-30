import { Outlet } from "react-router-dom"
import TopDiv from "./Top/TopDiv"
import BottomDiv from "./Bottom/BottomDiv"

const LayOut = () => {
    return (
        <div>
            <TopDiv />
            <main>
                <Outlet />
            </main>
            <BottomDiv />
        </div>
    )
}

export default LayOut;