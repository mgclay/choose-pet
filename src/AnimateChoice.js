import Spritesheet from 'react-responsive-spritesheet'
import orangesheet from './hs.jpg'
import graysheet from './ghs.jpg'
import './AnimateChoice.css'
import './textbox.css'
import Card from 'react-bootstrap/Card';
import { useState, useRef, useContext } from "react"
//import selectpet from './selectpet'

import PetSelectionContext from './contexts/PetSelectionContext'
const AnimateChoice = () => {
    const handlers = useContext(PetSelectionContext);
    const [showTextBox, setShowTextBox] = useState(Array(2).fill(false));
    const spriteRefs = [useRef(null), useRef(null)];
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [submittedText, setSubmittedText] = useState(null);
    const [enteredText, setEnteredText] = useState("");
    const petType = "CT";
    const textChangeHandler = (i) => {
        setEnteredText(i.target.value);
        //console.log(i.target.value);
      };
  // handle selection
    const handleClick = (index) => {
        spriteRefs[index].current.goToAndPlay(1);
        spriteRefs[index].current.pause();
        setSelectedIndex(index);
        for (let i = 0; i < spriteRefs.length; i++) {
            if (i !== index) {
                setSelectedIndex(index);
                //spriteRefs[i].current.goToAndPlay(2);//
            }
        }
        const updatedShowTextBox = [...showTextBox];
        updatedShowTextBox[index] = true;
        setShowTextBox(updatedShowTextBox);
     };

     const handleSubmit = (event, index) => {
        event.preventDefault();
        setSubmittedText(enteredText);
        const updatedShowTextBox = [...showTextBox];
        updatedShowTextBox[index] = false;
        setShowTextBox(updatedShowTextBox);
        const currentDate = new Date().toISOString().slice(0,10)

        const petInfo = {
            enteredText,
            petType,
            date: currentDate,
        };
        
        

       handlers.petselection(petInfo);
     }

 /*    const select_pet = () => {
        const newpet = {
            avatar_type: "CT",
            pet_name: "",
            palette: "",
            last_interaction: "2023-03-11",
            last_feed: "2023-03-11"
        }
           // selectpet
             //   .petselection()*/

       // }
    // }

    return (
        <div>
            <Card style= {{width: '130rem'}}>
            <Card.Header className = 'pet-choice'><center><h1>CHOOSE YOUR PET</h1></center></Card.Header> </Card>
            <hr />
            <div
            className="sprite-container">
            <Spritesheet
                index = {1}
                ref={spriteRefs[0]}
                className={`sprite ${selectedIndex !== null && selectedIndex !== 0 ? 'hidden' : ''}`}
                image = {orangesheet}
                stopLastFrame = {true}
                widthFrame = {266}
                heightFrame = {305}
                steps = {2}
                fps = {20}
                loop = {false}
                autoplay = {false}
                isResponsive = {false}
                endAt = {2}
                  onClick={() => handleClick(0)}
            />
            <Spritesheet
                index = '1'
                ref = {spriteRefs[1]}
                stopLastFrame = {true}
                className={`sprite ${selectedIndex !== null && selectedIndex !== 1 ? 'hidden' : ''}`}
                image = {graysheet}
                widthFrame = {266}
                heightFrame = {305}
                steps = {2}
                fps = {20}
                loop = {false}
                autoplay = {false}
                isResponsive = {false}
                  onClick={() => handleClick(1)}
            />
            </div>
            {showTextBox.map((isShown, index) => isShown && ( 
                <form key={index} onSubmit={(event) => handleSubmit(event, index)}>
                    <input className = "input" type="text" placeholder="Name your pet!" value={enteredText} onChange={textChangeHandler}/>
                    <button className="button" type="submit">Submit</button>
                </form>
            ))}
            {submittedText && (<form className = 'pet-name' > {enteredText}</form>)}
        </div>
    );
}

export default AnimateChoice
