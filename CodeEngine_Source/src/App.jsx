import React, { useState } from 'react'


function App() {
  const [inputData, setInputData] = useState('');
  const [inputD, setInput] = useState(""); // State to store user input
  const [responseData,setResponseData] =useState("");
 async function handleSubmit(e){
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:3000/compile', {
      method: 'POST', // Change to the appropriate HTTP method
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code: inputData, input:inputD }), // Sending user input to the backend
    })

    .then(response=> response.json())
    .then(data=>{
      var temp2=data.output
      console.log((temp2));
      setResponseData(temp2);
    })
  } catch (error) {
    console.error('Error fetching data:', error);
  }
 }

  return (
    <div class="row m-3">
        <div class="col">
            
            <form onSubmit={handleSubmit}>
                <textarea type="text" id="codeArea" name="code" class="form-control" aria-label="First name" value={inputData}
          onChange={(e) => setInputData(e.target.value)}></textarea>
                
                <button type="submit" id="run" class="btn btn-success">Run</button>
                <div class="col d-flex flex-column rounded bg-dark px-4">
            <div>
                <label for="Input" class="text-light">Input</label>
                <textarea type="text" id="intput" name="input" class="form-control" aria-label="Last name" value={inputD} onChange={(e) => setInput(e.target.value)}></textarea>
            </div>
            
            </div>
            </form>
            <div>
                <label for="Output" class="text-light">Output</label>
                <textarea type="text" id="output" name="output" class="form-control" aria-label="Last name" value={responseData}></textarea>
            </div>
        </div>
        </div>
  )
}

export default App

