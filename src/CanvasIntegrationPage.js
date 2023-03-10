import Spritesheet from 'react-responsive-spritesheet'
import orangesheet from './hs.jpg'
import graysheet from './ghs.jpg'
import './AnimateChoice.css'
import './textbox.css'
import Card from 'react-bootstrap/Card';
import { useState, useRef, useContext } from "react";


const CanvasIntegrationPage = () => {
    return (
        <div>
            <Card style= {{width: '130rem'}}>
            <Card.Header className = 'pet-choice'><center><h1>ADD YOUR CANVAS ACCOUNT!</h1></center></Card.Header> </Card>
            <hr />
            <p> So you want your pet to help you track your Canvas assignments... </p>
            <p> It's easy! Just follow these steps: </p>
            </div>
    )
}
export default CanvasIntegrationPage