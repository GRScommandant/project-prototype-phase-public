import styles from "./navbar.module.css"
import { Link } from "react-router-dom"
function Nav () {
return(
<>
<div className={styles.container}>
    <ul className={styles.lists}>
        <li className={styles.items}><Link to="/" className={styles.links}>صفحه ی اصلی</Link></li>
        <li className={styles.items}><Link to="/Login" className={styles.links}>ورود</Link></li>
        <li className={styles.items}><Link to="/Aboutus" className={styles.links}>درباره ی ما</Link></li>
        <li className={styles.items}><Link to="/register" className={styles.links}>ثبت نام</Link></li>
    </ul>
</div>

</>

)




}
export default Nav