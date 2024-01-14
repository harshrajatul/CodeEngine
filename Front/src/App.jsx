import React, { useState } from 'react';
import Editor from "@monaco-editor/react";

function App() {

  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');



  const handleEditorDidMount = (editor, monaco) => {
    console.log('Editor instance:', editor);
    editor.setValue('print("Hello, World!")');
  };




  const handleCodeChange = (value, event) => {
    setCode(value);
    console.log('Code changed:', value);
  };


  const handleInputChange = (event) => {
    setInput(event.target.value);
  };



  
  const handleButtonClick = () => {
    
    fetch('http://localhost:3001/submitCode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, input }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Backend response:', data);
      // setOutput(data.output);

      if (data.error)
      {
        setOutput(data.error);
      }
      else if (data.output)
      {
        setOutput(data.output);
      }
      else
      {
          return { error: 'Unexpected response from compiler' };
      }



    })
    .catch(error => {
      console.error('Error:', error);
    });
  };





  return (
    <div>
      {/* Monaco Editor component */}
      <Editor
        height="50vh"
        defaultLanguage="cpp"
        defaultValue='print("Hello, World!")'
        theme="vs-dark"
        onMount={handleEditorDidMount}
        onChange={handleCodeChange}
      />

      {/* Display the code value (for demonstration purposes) */}
      <p>Code value: {code}</p>


      {/* Input textarea */}
      <div>
        <h3>Input:</h3>
        <textarea
          value={input}
          onChange={handleInputChange} // Handle input changes
          rows="5"
          cols="50"
        />
      </div>



      {/* Submit button */}
      <button onClick={handleButtonClick}>Submit Code</button>

      {/* Output textarea */}
      <div>
        <h3>Output:</h3>
        <textarea
          value={output}
          rows="5"
          cols="50"
          readOnly
        />
      </div>
    </div>
  );
}

export default App;
