
import React from "react";
import './../styles/App.css';

const App = () => {
  let cnt = 0;
  function btnClicked(){
    cnt++;
    document.getElementById("display").innerHTML = `Button clicked ${cnt} times.`;
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p id="display">Button clicked 0 times.</p>
        <button onClick={btnClicked}>Click me</button>
    </div>
  )
}

export default App
