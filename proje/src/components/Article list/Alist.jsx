import s from "./alist.module.css"
import propTypes from 'prop-types'
function Alist (props) {
return (
<>
<div className={s.container}>
<ul className={s.list}>
    <li className={s.items}><p className={s.t}>{props.reason1}</p></li>
    <li className={s.items}><p className={s.t}>{props.reason2}</p></li>
    <li className={s.items}><p className={s.t}>{props.reason3}</p></li>
    <li className={s.items}><p className={s.t}>{props.reason4}</p></li>
</ul>

</div>
</>
)
}
Alist.propTypes = {
reason1:propTypes.string,
reason2:propTypes.string,
reason3:propTypes.string,
reason4:propTypes.string,
}
Alist.defaultProps = {
reason1:"",
reason2:"",
reason3:"",
reason4:"",
}
export default Alist