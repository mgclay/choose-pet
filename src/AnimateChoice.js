import Spritesheet from 'react-responsive-spritesheet'
import orangesheet from './hs.jpg'
import graysheet from './ghs.jpg'
import './AnimateChoice.css'
import './textbox.css'
import Footer from './components/Footer.js'
import Card from 'react-bootstrap/Card';

const AnimateChoice = () => {

    function handleClick(spritesheet) {
        spritesheet.goToAndPlay(1)
        return (
            <><input type="text" /><button>Submit</button></>
        );
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }

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
                onClick ={spritesheet => {
                    handleClick(spritesheet);}}
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
                onClick ={spritesheet => {
                    handleClick(spritesheet);}}
            />
            </div>

        </div>
    )
}

export default AnimateChoice