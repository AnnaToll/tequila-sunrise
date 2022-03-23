const Register = () => {
    return ( 
        <form>
        <div className="form-inner">

            <h2>Register</h2> 

            <div className="form-group">
                <label htmlFor='name'>Name:</label>
                <input type="text" name="name" id="name" required/>
            </div>

            <div className="form-group">
                <label htmlFor='lastname'>Lastname:</label>
                <input type="text" lastname="lastname" id="lastname" required/>
            </div>

            <div className="form-group">
                <label htmlFor='email'>Email:</label>
                <input type="text" email="email" id="email" required/>
            </div>

            <div className="form-group">
                <label htmlFor='password'>Password:</label>
                <input type="password" password="password" id="password" required/>
            </div>

            <input type="submit" value="REGISTER" />
        </div>
    </form>
  )
}
 
export default Register;