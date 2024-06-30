import { useEffect, useState } from "react";
import InputCount from "./components/InputCount/InputCount";
import Profile from "./components/profile/Profile";
import TabControl from "./tabControl/tabControl";
import SnapShot from "./components/snapShot/SnapShot";
import Queue from "./components/Queue/Queue";
import Effect from "./components/Effect/Effect";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Musinsa from "./components/Musinsa/Musinsa";
import Home from "./Home";
import Product from "./components/Musinsa/Product";
import TopDiv from "./components/Musinsa/Top/TopDiv";
import BottomDiv from "./components/Musinsa/Bottom/BottomDiv";
import LayOut from "./components/Musinsa/LayOut";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<LayOut />}>
            <Route path="/" Component={Home}/>
            <Route path="/tab" Component={Musinsa}/>
            <Route path="/musinsa" Component={Musinsa}/>
            <Route path="/product/:id" Component={Product}/> 
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


{/*
  const [page, setPage] = useState(0);

  useEffect(()=>{
    setPage(page)
    console.log(page)
  },[page])

  const pageClick = (page:number) => {
    if (page === 0){
      <Profile imgUrl="profile1.jpg" name="강쥐"/>
    }
  }

  const pageList = ["tab1", "tab2", "tab3"];
  const pageDtl = [{name:"profile1.jpg", title:"강쥐"},
                   {name:"profile2.jpg", title:"강쥐2"},
                   {name:"profile3.jpg", title:"강쥐3"}]  
  
<TabControl pages={pageList} page={page} setPage={setPage} />
{pageDtl.map((v, i)=>{
  console.log(i);
  return(
    page === i ?
    <Profile key={i} imgUrl={ v.name } name="강쥐"/>
    : <div key={i}></div>
  )
})}

 <SnapShot /> 
 <Queue />
 <Effect /> */}