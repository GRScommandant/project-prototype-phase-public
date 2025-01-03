import axios from "axios";
import config from "../config/index.js";

/*
export default async function UserPanel() {
    const userdata = await axios.get(config.apiURL.auth.profile.replace(":id "," 1"))
    console.log(userdata)
    return(
        <>
            <p>w</p>
        </>
    )
}*/
import Userpanel from "../components/Userpanelui/Userpanel.jsx";
export default function UserPanel() {
    return (
        <>
        <Userpanel/>
        </>
    )

}