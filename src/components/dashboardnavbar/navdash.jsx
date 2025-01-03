import styles from "./navdash.module.css";
import {useState} from "react";
import {Outlet, Link} from "react-router-dom";
import Nav from "../navbar/navbar.jsx";
import HomeIcon from "../../assets/icons8-menu-50.png";
import auth from "../../lib/auth";
import {getHeight} from "react-slick/lib/utils/innerSliderUtils.js";
import {useForm} from "react-hook-form";
import config from "../../config/index.js";

export default function Navdash() {
	const [IsOpen, setIsOpen] = useState(false);
	const use_form = useForm({});
	const links = [
		{
			name: "سوالات",
			path: config.ROUTE.test,
		},
	];
	const toggleNav = () => {
		setIsOpen(!IsOpen);
	};
	return (
		<>
			<Nav/>
			<div className={styles.container}>
				<div className={styles.buttonse}>
					<button className={styles.Buttons} onClick={toggleNav}>{IsOpen ? (<>  <img src={HomeIcon}
																							   className={IsOpen ? styles.shrink : ''}
																							   alt="close Menu"/></>) :
						(<>  <img src={HomeIcon} alt="Open Menu" className={IsOpen ? styles.shrink : ''}/></>)}</button>
				</div>
				<div className={`${styles.contentcontainer} ${IsOpen ? styles.open : ''}`}>
					<div className={styles.contents}>

						<div className={styles.links}>
							{links.map((link) => (
								<p key={link.name}>
									<Link to={link.path}>
										{link.name}
									</Link>
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
