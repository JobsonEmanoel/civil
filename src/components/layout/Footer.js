import {FaFacebook, FaInstagram} from 'react-icons/fa'
import styles from '../layout/Footer.module.css'

function Footer() {
    return(
    <footer className={styles.footer}>
    <ul className={styles.social_list}>
          <li>
            <FaFacebook />
            </li>  

            <li>
                <FaInstagram />
            </li>
            
    </ul>
        <p className={styles.copy_right}><span> Policia Civil </span> &copy; 2022 </p>
    </footer>
    )
};
export default Footer;