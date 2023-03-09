import Spritesheet from 'react-responsive-spritesheet'
import orangesheet from './hs.jpg'
import graysheet from './ghs.jpg'
import './AnimateChoice.css'
import './textbox.css'
import Footer from './components/Footer.js'
import Card from 'react-bootstrap/Card';
import { useState, useRef } from "react";

const AnimateChoice = () => {

    const [choice, setChoice] = useState({image : ''});

    const [showTextBox, setShowTextBox] = useState(false);

  // handle selection
  const handleSelection = () => {
    setShowTextBox(true);
  }

    function handleClick(spriteInstance, image) {
        spriteInstance.goToAndPlay(1);
        spriteInstance.pause();
        return (
            <><input type="text"></input><button> Choose pet! </button></>
        )
    };

    return (
        <div>
            <Card style= {{width: '130rem'}}>
            <Card.Header className = 'pet-choice'><center><h1>CHOOSE YOUR PET & NAME IT!</h1></center></Card.Header> </Card>
            <hr />
                <div className= "AnimateChoice">
            <Spritesheet
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
                getInstance={spritesheet => {
                    this.spriteInstance = spritesheet;
                  }}
                onClick ={handleSelection}
            />
            <Spritesheet
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
                getInstance={spritesheet => {
                    this.spriteInstance = spritesheet;
                  }}
                onClick = {handleSelection}
            />
            </div>
            <div>

        {showTextBox && <input type="text" placeholder="Name your pet" />}
        </div>
        </div>
    )
}

export default AnimateChoice