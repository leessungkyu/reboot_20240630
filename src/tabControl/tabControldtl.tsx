import Profile from "../components/profile/Profile"

type tabControldtlProps = {
    cnt: number;
}
const TabControldtl = ({cnt}:tabControldtlProps) => {
    let result = [];
    for(let i=0; i<cnt; i++){
        result.push(i);
    }
    return (
        <div>
           {result.map((v, i) => {
             return (
                <div>
                    
                </div>    
             )
           })}
        </div>
    )
}

export default TabControldtl;