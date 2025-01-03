import Nav from "../navbar/navbar"
import {Outlet} from "react-router-dom"

export function Layout () {
return (
<>
    <Nav/>
    <main>
        <Outlet/>
    </main>

</>


)
}
