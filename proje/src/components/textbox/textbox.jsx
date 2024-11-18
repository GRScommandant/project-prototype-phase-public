import s from "./textbox.module.css"
import propTypes from "prop-types"
function Textbox (props) {

return (
<>
<div className={s.container}>
    <p className={s.texth}>{props.h}</p>
    <p className={s.texts}>{props.t}</p>

</div>


</>
)
}
Textbox.propTypes = {

    t:propTypes.string,
    h:propTypes.string,
}
Textbox.defaultProps = {
t:"",
h:"",
}
export default Textbox