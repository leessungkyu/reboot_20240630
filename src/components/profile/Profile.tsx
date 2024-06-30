type PropfileProps = {
    imgUrl : string;
    name : string;
}
const Profile = ({imgUrl,name}:PropfileProps) => {
    return (
        <>
        <div className="flex flex-col items-center ">
            <div className="w-20 h-20 rounded-full">
                <img className="w-full h-full rounded-full object-cover" src={imgUrl} alt=""/>
            </div>
            <span>{name}</span>
        </div>
        </>
    )
}
export default Profile;