import { useState } from "react";

function Button({text,color,size,onClick,disabled}){

}

function BasicProps(){
    const [clickCount,setClickCount]=useState(0)
    return(
        <>
        <section className=" text-white">Basic</section>
        </>
    )
}
export default BasicProps