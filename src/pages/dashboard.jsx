import Navdash from "../components/dashboardnavbar/navdash.jsx";
import styles from "../components/dashboardnavbar/navdash.module.css";
import {Outlet} from "react-router-dom";
import Nav from "../components/navbar/navbar.jsx";

export function Dashboard () {
    return (
        <>
        <Navdash/>
            <main>
                <Outlet/>
            </main>
        </>
    )

}