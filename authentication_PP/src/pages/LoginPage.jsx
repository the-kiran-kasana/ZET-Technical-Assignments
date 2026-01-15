import react,  {useState , useEffect} from 'react';

export default function LoginPage(){

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const handleSubmit = () => {
       console.log("login successfully")
    }

    const handleLogin = () => {

    }

     const handleSignUp = () => {

     }

    return (
    <>
      <form onSubmit = {handleSubmit}>
        <label>Email : </label>
        <input placeholder="enter your email " onChange={(e) => setEmail(e.target.value)} type="email" value={email}/>
        <label>Password : </label>
        <input placeholder="enter your password " onChange={(e) => setPassword(e.target.value)} type="password" value={password}/>
        <button type="Submit" onClick={handleLogin}>Login</button>
        <button type="Submit" onClick={handleSignUp}>SignUp</button>
      </form>
    </>
    )
}