import React, {useState} from 'react'
import Input from './Input'

function Form(){
    const [input,setInput]=useState({username:"",password:""});
    const [state,setState] = useState(true);
    function change(e){
        const {name,value} =e.target;
        setInput(prevValue=>{
            return({
                ...prevValue,
                [name]:value
            }
            )
        }
        )
    }
    console.log(input);
    function click(){
        setState(!state)
    }
    async function handleSubmit(e){
        e.preventDefault();
    try{
        const response = await fetch('http://localhost:3000/login', {
      method: 'POST', // Change to the appropriate HTTP method
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: input.username, password:input.password})
    })
    .then((response)=> response.json());
} catch (error) {
    console.error('Error fetching data:', error);
  }
}
    return(
        <div className='form' >
            <h1>{state===true ? "Login" :"Register" }</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={change} type="text" placeholder="Username" name="username" value={input.username}/>
                <input onChange={change} type="password" placeholder="Password" name="password" value={input.password} />
                {state===false && <Input type="password" placeholder="Confirm Password"/>}
                <button >Submit</button>

                <p onClick={click}>{state===true ? "I am new here." :"Have you been here before?" }</p>
            </form>
        </div>
    )
}

export default Form;