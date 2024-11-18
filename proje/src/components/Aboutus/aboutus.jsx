import s from "./aboutus.module.css"
import Textbox from "../textbox/textbox"
import Alist from "../Article list/Alist"
import Footer from "../footer/footer"
function Aboutus () {
return (
<>
<div className={s.container}> 
    <div className={s.contentbox}>
        <div className={s.contents}>
            <Textbox h="با سایت....، قدم به قدم تا موفقیت در کنکور!" t="آیا آماده‌اید تا بهترین نتیجه را در کنکور کسب کنید؟ با وب‌سایت کنکوری، مسیر موفقیت خود را با منابع آموزشی حرفه‌ای، آزمون‌های آنلاین و مشاوره‌های تخصصی هموار کنید.
            ما به شما کمک می‌کنیم با برنامه‌ریزی دقیق، محتوای به‌روز و نکات طلایی، استراتژی مناسبی برای آمادگی کنکور خود داشته باشید. از هر نقطه از کشور، تنها با چند کلیک به ابزارهایی دسترسی پیدا کنید که به شما در رسیدن به اهدافتان کمک خواهند کرد."/>
            <Textbox h="ویژگی‌های ویژه ما:" t=""/>
            <Alist reason1="منابع آموزشی متنوع و به‌روز" reason2="آزمون‌های شبیه‌سازی کنکور" reason3="مشاوره و برنامه‌ریزی تحصیلی اختصاصی" reason4="مقالات و نکات طلایی برای موفقیت در کنکور" />   
            <Textbox h="با ما پیشی بگیرید!" t="همین حالا به وب‌سایت ...... بپیوندید و اولین گام را برای موفقیت در کنکور بردارید." />
        </div>
    </div>
    <Footer/>
</div>







</>


)
}
export default Aboutus