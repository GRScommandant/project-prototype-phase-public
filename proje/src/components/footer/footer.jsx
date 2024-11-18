import Insta from "../../assets/insta.png"
import Whatsapp from "../../assets/whatsapps.png"
import Github from "../../assets/github.png"
import s from "./footer.module.css"
function Footer () {
return (
<>
<div className={s.container}>
    <div className={s.items}><img src={Insta} alt="instagram"/></div>
    <div className={s.items}><img src={Whatsapp} alt="whatsapp"/></div>
    <div className={s.items}><img src={Github} alt="github" height="30px" width="30px"/></div>
</div>


</>




)
}
export default Footer