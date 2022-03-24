const Register = () => {

  const [details, setDetails] = useState({name: "", email: "", password: "", phone: ""})

  const handleSubmit = async (e) => {
      e.preventDefault();

      const user = {
        name: details.name,
        phone: details.phone,
        email: details.email,
        password: details.password
      }
    
      fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => console.log(data));
    }

    return ( 
        <form>
        <div className="form-inner" onClick={handleSubmit}>

            <h2>Register</h2> 

            <div className="form-group">
                <label htmlFor='name'>Name:</label>
                <input type="" name="name" id="name" required onChange={e =>setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>

            <div className="form-group">
                <label htmlFor='phone'>Phone number:</label>
                <input type="number" phone="phone" id="phone" required onChange={e =>setDetails({...details, phone: e.target.value})} value={details.phone}/>
            </div>

            <div className="form-group">
                <label htmlFor='email'>Email:</label>
                <input type="text" email="email" id="email" required onChange={e =>setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>

            <div className="form-group">
                <label htmlFor='password'>Password:</label>
                <input type="password" password="password" id="password" required onChange={e =>setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>

            <input type="submit" value="REGISTER" />
        </div>
    </form>
  )
}
 
export default Register;