import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <div className="auth">
      <form className="login" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label className="authlabel">Email:</label>
        <input 
          type="email"
          // placeholder="example@house.com"
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
        />
        <label className="authlabel">Password:</label>
        <input 
          type="password"
          // placeholder="password"
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
        <button disabled={isLoading}>Log in</button>
        <p>Don't have an account? <a href="/login">Sign Up</a></p>
        {error && <div className="error">{error}</div>}
      </form>
      
    </div>
    
  )
}

export default Login