import Spritesheet from 'react-responsive-spritesheet'
import orangesheet from './hs.jpg'
import graysheet from './ghs.jpg'
import './AnimateChoice.css'
import './textbox.css'
import Card from 'react-bootstrap/Card';
import { useState, useRef } from "react";

const AnimateChoice = () => {

    //const [choice, setChoice] = useState({image : ''});
    const [showTextBox, setShowTextBox] = useState(Array(2).fill(false));
    const spriteRefs = [useRef(null), useRef(null)];

  // handle selection
    const handleClick = (index) => {
        spriteRefs[index].current.goToAndPlay(1);
        spriteRefs[index].current.pause();
        for (let i = 0; i < spriteRefs.length; i++) {
            if (i !== index) {
                spriteRefs[i].current.goToAndPlay(2);
            }
        }
        const updatedShowTextBox = [...showTextBox];
        updatedShowTextBox[index] = true;
        setShowTextBox(updatedShowTextBox);
     };

     const handleSubmit = () => {
        //axios stuff here?
     }

    return (
        <div>
            <Card style= {{width: '130rem'}}>
            <Card.Header className = 'pet-choice'><center><h1>CHOOSE YOUR PET!!</h1></center></Card.Header> </Card>
            <hr />
            <div className= "AnimateChoice">
            <Spritesheet
                ref = {spriteRefs[0]}
                className="orange"
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
                ref = {spriteRefs[1]}
                stopLastFrame = {true}
                className = "gray"
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
                    <input type="text" placeholder="Name your pet!" />
                    <button type="submit">Submit</button>
                </form>
            ))}
        </div>
    );
}

export default AnimateChoice


/*       const updatedShowTextBox = [...showTextBox];
        updatedShowTextBox[index] = true;
        setShowTextBox(updatedShowTextBox);
        spriteRefs[index].current.goToAndPlay();
        spriteRefs[index].current.pause();
        const selectedSprite = spriteRefs[index].current.wrapper;
        selectedSprite.style.position = "absolute";
        selectedSprite.style.top = "50%";
        selectedSprite.style.left = "50%";
        selectedSprite.style.transform = "translate(-50%, -50%)";

        spriteRefs.forEach((ref, i) => {
            if (i !== index) {
              ref.current.wrapper.style.display = "none";
            }
          }); */