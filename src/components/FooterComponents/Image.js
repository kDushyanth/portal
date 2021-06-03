import React,{useState} from 'react';

const Image = ({src,imgWidth})=>{
    var [num,setNum] = useState(0);
    const onClickHandler = ()=>{
        setNum((prevState)=> prevState+1);
    }
    return (
        <>
            <span> <img alt="footer-img" style= {{maxWidth:imgWidth,cursor:'pointer'}} src={src} onClick={onClickHandler}></img> <span>{num}</span> </span>
        </>
    )
}
export default Image;