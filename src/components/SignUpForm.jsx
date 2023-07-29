import { useState } from 'react'

export default function SignUpForm({setToken}){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    // const [successMessage, setSuccessMessage] = useState("")

    async function handleSubmit(event) {

        //Prevent the browser from reloading the page
        event.preventDefault();
        //Do something with the form data
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
                method: "POST",
                
                body: JSON.stringify( { 
                    username,
                    password,
                 }),
            });
            
            
            const result = await response.json();
            console.log("Signup Result: ", username, password,result);
            setToken(result.token);
            
        } catch (error) {
            setError(error.message);
        }
        setUsername("");
        setPassword("");

    }

    return (
        <>
            <h2>SIGN UP</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}> 
                <label>
                    Username:{" "} 
                    <input 
                    type="text"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br/> <br/>
                <label>
                    Password:{" "} 
                    <input 
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br/><br/>
                <button id="submit_btn" type="submit">Submit</button>
            </form>
        
        </>
      
  
    )
}