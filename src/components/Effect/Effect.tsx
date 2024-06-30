import { stringify } from "querystring";
import { useEffect, useState } from "react";

const Effect = () => {
    //side Effect
    //1. 데이터 가져오기
    //2. 다른 api 사용
    //3. dom 직접 조작

    const [num, setNum] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<string>("");

    const fetchData = async () => {
       setLoading(()=>true);
       const response = await fetch('https://fakerapi.it/api/v1/addresses?_quantity=1');
       const result = await response.json();
       setData(result.data[0].city);       
       setLoading(()=>false);
    }

    const reload = () => fetchData();
    //함수, 배열[의존성 배열]: 앞의 함수가 재실행 하도록 하는 요소들
    useEffect(()=>{ fetchData() } ,[]);
 
    return <div>
    <div onClick={()=>setNum((pre)=>pre + 1)}>{num}</div>
    <div onClick={reload}> {loading ? "loading" : data}</div>
    </div>
}

export default Effect;