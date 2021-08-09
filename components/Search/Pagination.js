const Pagination = ({np,ci,setCi}) => {
    let content = [];
    let key=1;
    for(var i=1;i<=np;i++){
        content.push(<li onClick={setCi.bind(i,i)} className={ci==i&&`active`} >{i}</li>)
        console.log(content[i-1]);
        key++;
    }
    return(
        content
    )
}
export default Pagination;