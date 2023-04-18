import React from "react";
import { FaTimes, FaCircle, FaPenAlt } from "react-icons/fa";

const Icons = ({fontname})=>{

    console.log("usericon",fontname)
switch(fontname){

     case "cross":return<FaTimes className="icons"></FaTimes>
     case "circle":return <FaCircle className="icons"></FaCircle>;
     default:return <FaPenAlt className="icons"></FaPenAlt>;
}


}
export default Icons;