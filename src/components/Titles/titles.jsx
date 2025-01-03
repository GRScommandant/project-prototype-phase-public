import s from "./titles.module.css";
import propsTypes from "prop-types";
import Aimage from "../Aimage/Aimge.jsx";
export default function Titles(props) {
    return (
        <>
                <h1 className={s.headerd}>{props.h}</h1>
                <hr className={s.titlehr}/>

        </>
    )
}
Titles.prototype = {
    h:propsTypes.string,
}
Titles.defaultProps = {
  h:"header"
}