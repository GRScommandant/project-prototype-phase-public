import s from "./aimage.module.css"
import propsTypes from "prop-types"
function Aimage (props) {
return (
<>
<div className={s.container}>
    <img src={props.iss} alt={props.aplt} className={s.rimage}/>



</div>
</>


)
}
Aimage.propsTypes = {
iss : propsTypes.string,
aplt: propsTypes.string,
}
Aimage.defaultProps = {
iss : "put image url here",
aplt: "put the alt value here",



}

export default Aimage 