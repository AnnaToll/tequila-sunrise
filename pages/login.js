import React, { useState} from 'react'

const Login = () => {

    const [details, setDetails] = useState({email: "", password: ""})
  
    const handleLogin = async (e) => {
        e.preventDefault();
  
        const user = {
          email: details.email,
          password: details.password
        }
      
        fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        /* .then(res => res.json())
        .then(data => console.log(data)); */
      }
  
      return ( 
        <form onSubmit={handleLogin}>
        <div className="form-inner">
            <h2>Login</h2>

            <div className="form-group">
                <label htmlFor='email'>Email:</label>
                <input type="text" email="email" id="email" required onChange={e =>setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>

            <div className="form-group">
                <label htmlFor='password'>Password:</label>
                <input type="password" password="password" id="password" required onChange={e =>setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            
            <input type="submit" value="LOGIN" />
        </div>

    </form>
    )
  }
   
  export default Login;