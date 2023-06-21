import { useState } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(dob);
    const ageInMilliseconds = today - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    setAge(ageInYears);
  };

  const handleInputChange = (e) => {
    setDob(e.target.value);
  };
  var mydivstyle = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign:"center"
  }
  var mybuttonstyle = {
    backgroundColor:"#007fff",
    borderRadius:"10%",
    color:"white",
    border:"0px",
    width:"120px",
    height:"40px"
  }
  var myinputstyle = {
    width:"350px",
    height:"30px"
  }
  return (
    <>
    <div style={mydivstyle} className="App">
      <h1>Age Calculator</h1>
      <h5>Enter your date of birth</h5>
      <input style={myinputstyle} type="date" id="dob" value={dob} onChange={handleInputChange} /><br/><br/>
      <button style={mybuttonstyle} onClick={calculateAge}>Calculate Age</button>
      {age && <h5>Your age is {age} </h5>}
    </div>
    </>
  );
}

export default App;
