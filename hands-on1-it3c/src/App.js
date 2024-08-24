import logo from './logo.svg';
import './App.css';
import Name from './components/Name/Name';
import Section from './components/Section/Section';
import Description from './components/Description/Description';
import UserInformation from './components/UserInformation';
import { useState } from 'react';
import { useTransition } from 'react';

function App() {
  const [userInformation, setUserInformation] = useState({
    firstName: "Claudine",
    middleInitial: "S.",
    lastName: "Cruz",
    section: "IT-3C",
    description: "I am tall and I can sing",
  });

 
  
  function updateName() {
    userInformation.firstName = 'clau'
    setUserInformation({ ...UserInformation});
  }

  function movetheMoon() {
    setUserInformation({ ...UserInformation});
  }

  return (
    <div className="App">
        <Name 
          firstName={userInformation.firstName}
          middleInitial={userInformation.middleInitial}
          lastName={userInformation.lastName} />
        <Section/>
        <Description />
        <div className="moon"> </div>
        <button type="button" onClick={updateName}>Update Name</button>
        <button type="button"onClick={movetheMoon}>move</button>
    </div>
  );
}

export default App;
