import React from 'react';
import './App.css';
import AnimateChoice from './AnimateChoice'

import Header from './components/Header.js'

const App = () => {
  const userInfo = {}
  //const [hidden, setHidden] = useState(true);
  return (
    <div>
    <Header title="My Study Buddy"/>  
    <center><AnimateChoice/></center>
    </div>
    
    

  )
}
export default App;




