import styles from '../styles/Login.module.css' 

const BankID = (props) => {

    return ( 

        <div className={styles.popupBox}>
      <div className={styles.box}>
        <span className={styles.closeIcon} onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
     )
}
 
export default BankID;