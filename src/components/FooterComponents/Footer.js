import React from 'react';
import Image from './Image'
import './Footer.css'
import mail from './../../assets/images/mail.png';
import comment from './../../assets/images/comment.png';

const Footer = ()=>{
    const imgSource = [ comment,mail];
    return (
        <div className="footer">
        {   
            imgSource.map((item,i)=>{
                    let rVal = <Image src={item} imgWidth='30px' key={i}></Image> 
                    return rVal; 
            })
        }
        </div>
    );
}
export default Footer;
