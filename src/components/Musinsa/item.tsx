type ItemProps = {
    imgUrl: string;
    title: string;
}
const Item = ({imgUrl, title}:ItemProps) => {
    return <div>
        <div>
        <img src = {imgUrl} />
        </div>
        <span>{title}</span>
    </div>
}

export default Item;