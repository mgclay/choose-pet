import { useState } from 'react';
import neutral_gray from'./neutral_gray.jpg'
import neutral_orange from './orange266.jpg'
export default function PetChoice(){
    const [selection, setselection] = useState(['orangecat', 'graycat']);
    const clickHandler = () => {
        setselection(selection);
        console.log("you picked a pet!");
        <img src = {selection} alt = " "></img>
    }
    return (
        <div>
            
            <h1><center>Pick your pet!</center></h1>
            <center><button onClick = {clickHandler} style = {{width: "300px", height: "300px"}}><img src = {neutral_gray}style = {{width: "300px", height: "300px"}} alt = ""></img> </button><button style = {{width: "300px", height: "300px"}}><img src = {neutral_orange} style = {{width: "300px", height: "339px"}} alt = ""></img></button></center>
            <h1> {{selection}} </h1>
            <input type = "text"></input>
        </div>
    );
}
/*  

 */