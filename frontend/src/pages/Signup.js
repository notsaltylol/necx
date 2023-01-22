import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <div className="auth">
      <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        
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

        <button disabled={isLoading}>Sign up</button>
        <p>Already have an account? <a href="/login">Login</a></p>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  )
}

export default Signup