import React from 'react';
import './App.css';
import AnimateChoice from './AnimateChoice'
import CanvasIntegrationPage from './CanvasIntegrationPage'
import Header from './components/Header.js'

const App = () => {
  const userInfo = {}
  //const [hidden, setHidden] = useState(true);
  return (
    <div>
    <Header title="My Study Buddy"/>  
    <center><CanvasIntegrationPage/></center>
    </div>
    
    

  )
}
export default App;




