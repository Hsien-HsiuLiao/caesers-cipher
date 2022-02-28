import logo from './logo.svg';
import './App.css';

function App() {

  function rot13(str) { // LBH QVQ VG!
    var num;
    var newstr="";
    var decoded="";
    for (let i=0;i<str.length ;i++){
      num= str.charCodeAt(i);
   // num = num-13; a=65 Z=90
      if (num>77 && num <91){
    decoded += String.fromCharCode(num-13);
      //decoded += newstr;
      }
      else if (num>64 && num <78){
    decoded += String.fromCharCode(num+13);
      //decoded += newstr;
      }
      else {
          decoded += String.fromCharCode(num);
  
      }  
    }
    return decoded;
  }
  
  // Change the inputs below to test
  rot13("SERR CVMMN!");
  //rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Add button and input box to call rot13 function and output result to user</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
