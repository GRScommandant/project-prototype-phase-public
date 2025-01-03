import styles from "./navbar.module.css";
import {Link} from "react-router-dom";
import config from "../../config/index.js";

function Nav() {
	return (
		<>
			<div className={styles.container}>
				<ul className={styles.lists}>
					<li className={styles.items}><Link to={config.ROUTE.home} className={styles.links}>صفحه ی
						اصلی</Link></li>
					<li className={styles.items}><Link to={config.ROUTE.login} className={styles.links}>ورود</Link></li>
					<li className={styles.items}><Link to={config.ROUTE.aboutus} className={styles.links}>درباره ی
						ما</Link></li>
					<li className={styles.items}><Link to={config.ROUTE.register} className={styles.links}>ثبت
						نام</Link></li>
					<li className={styles.items}><Link to={config.ROUTE.user_panel} className={styles.links}>پنل
						کاریری</Link></li>
					<li className={styles.items}><Link to={config.ROUTE.dashboard}
													   className={styles.links}>داشبورد</Link></li>
				</ul>
			</div>
		</>
	);
}

export default Nav;