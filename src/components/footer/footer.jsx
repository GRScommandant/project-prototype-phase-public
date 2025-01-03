import Insta from "../../assets/insta.png"
import Whatsapp from "../../assets/footer/مشاورسرا.png"
import Github from "../../assets/github.png"
import s from "./footer.module.css"
import {Link} from "react-router-dom";

function Footer () {
return (
<>
<div className={s.container}>
    <div className={s.contentcontainer}>
        <div className={s.details} >
            <img src={Whatsapp} alt="website logo" style={{width:"200px" , height:"70px"}}/>
        </div>



        <div className={s.details2} >
            <div>
            <h3 style={{color:"white"}}>دسته ها</h3>
            <ul style={{listStyle:"none" , color:"#b7b7b7", textAlign:"right"}}>
                <li><Link to="/" className={s.links}>صفحه ی اصلی</Link> </li>
                <li><Link to="/Login" className={s.links}>ورود</Link></li>
                <li><Link to="/Aboutus" className={s.links}>درباره ی ما</Link></li>
                <li><Link to="/" className={s.links}>صفحه ی اصلی</Link> </li>
                <li><Link to="/Login" className={s.links}>ورود</Link></li>
                <li><Link to="/Aboutus" className={s.links}>درباره ی ما</Link></li>
                <li><Link to="/" className={s.links}>صفحه ی اصلی</Link> </li>
            </ul>
            </div>
        </div>
        <div className={s.detailstext}>
            <div>
                <p>
                    آکادمی مشاوره تحصیلی مشاورسرا از رتبه برترهای
                    کنکور سراسری سال های اخیر تشکیل شده که
                    خودشون این راه رو با موفقیت رفتن و در این مسیر
                    آموزش های مختلف روانشناسی و
                    روانشناختی و شیوه های نوین مطالعه و برنامه ریزی رو دیدن،
                    مشاورسرا اینجاست به شما کمک کنه تا مهارت های
                    رتبه برترها رو یادبگیری
                </p>
            </div>
        </div>

    </div>


</div>
    <div className={s.copyrightcontainer}>
        <div className={s.copyrightdetails}>
            <hr/>
            <p>تمامی حقوق این سایت متعلق به ...می باشد</p>
        </div>
    </div>

</>




)
}
export default Footer