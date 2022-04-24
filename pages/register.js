import { useState, useEffect } from 'react'
import BankID from '../components/Bankid';
import styles from '../styles/Login.module.css' 


export default function Register() {
  const [details, setDetails] = useState({name: "", email: "", password: "", phone: "", social: ""})
  const [message, setMessage] = useState("")

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
      setTimeout(() => {
          setIsOpen(isOpen)
      }, 4000);
  }



    const registerHandler = async (e) => {
      e.preventDefault()

      const registerUser = {
          name: details.name,
          phone: details.phone,
          email: details.email,
          password: details.password,
          social: details.social
      }

      fetch('/api/register', {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(registerUser),
      })
      .then((res) => {
          return res.json()
      })
      .then((data) => {
          console.log(data)
          setMessage(data.message)
      })
  }

  return (
    <form onSubmit={registerHandler} className={styles.container}>
        <div className={styles.formInner}>
            <h2>Registrera</h2>
            <p> {message} </p> {/* error or success message for the user */}
            
            <div className={styles.formGroup}>
                <label htmlFor='name'>Namn:</label>
                <input type="text" name="name" id="name" required onChange={e =>setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor='phone'>Mobil:</label>
                <input type="text" phone="phone" id="phone" required onChange={e =>setDetails({...details, phone: e.target.value})} value={details.phone}/>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor='email'>Epost:</label>
                <input type="text" email="email" id="email" required onChange={e =>setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor='password'>Lösenord:</label>
                <input type="password" password="password" id="password" required onChange={e =>setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor='social'>Personnummer:</label>
                <input type="social" social="social" id="social" required onChange={e =>setDetails({...details, social: e.target.value})} value={details.social}/>
            </div>

            <input type="submit" value="Registrera" className={styles.btn} onClick={togglePopup}/>
        </div>
        <div>
 
    {isOpen && <BankID
      content={<>
        <h2>Vänligen starta ditt mobila bank ID</h2>
        <p>Tänk på att aldrig starta ditt bank ID på uppmaning av okänd part!</p>
      </>}
      handleClose={togglePopup}
    />}
  </div>
    </form>
  )
}
