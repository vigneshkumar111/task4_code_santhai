import React,{ useRef , useState } from 'react';
function App() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const [sum , setSum] = useState(null);

  const handlecalculate = () => {
    const value1 = parseFloat(inputRef1.current.value) || 0 ;
    const value2 = parseFloat(inputRef2.current.value) || 0 ;
    setSum (value1 + value2);
  };



return(
  <div style = { {padding: '20px' ,fontFamily: 'arial'  }}>
    <h2> Sum calculator</h2>
    <input type = 'number' ref={inputRef1} placeholder='Enter a First number'></input>
    <br/><br/>
    <input type='number' ref={inputRef2} placeholder='Enter a Seconnd number'></input>
    <br/><br/>
    <button onClick={handlecalculate}>Click to sum</button>
    {sum != null && <p> The sum is:{sum}</p>}
  </div>
  );
} 
export default App;