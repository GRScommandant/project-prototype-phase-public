import s from "./Aheader.module.css"
import propTypes from "prop-types"
function Aheader (props) {
return(
<>
<div className={s.container}>
    <div className={s.headerbox}>
        <p className={s.subt}>{props.h}</p>
    </div>
    <div className={s.contentboxes}>
        <div className={s.content}>{props.w}</div>
        <div className={s.content}>{props.d}</div>
        <div className={s.content}>زمان مطالعه:{props.ti}دقیقه</div>

    </div>

</div>
</>

)


}
Aheader.propTypes = {
w:propTypes.string,
ti:propTypes.string,


}
Aheader.defaultProps = {
w:"writer",
ti:"timeread",
}
export default Aheader