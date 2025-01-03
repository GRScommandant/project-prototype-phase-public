import S from './exlpain.module.css'
import image from '../../../../assets/Education-selection-questions.jpg'
import propsTypes from "prop-types"

export default function Explain (props) {
    return (
        <>
            <div className={S.container}>
             <div className={S.contentcontainer}>
                 <div className={S.Imageholder}>
                     <img src={props.a} alt={props.b} style={{width:'100% ' , height:'159px' , borderRadius:"10px 10px 0px 0px"}}/>
                 </div>
                 <div className={S.description}>
                    <p>{props.desc}</p>
                 </div>
                 <div><a href={props.link}>more</a></div>
             </div>

            </div>
        </>
    )
}
Explain.propsTypes = {
    a : propsTypes.string,
    b: propsTypes.string,
    desc: propsTypes.string,
    link:propsTypes.string
}
Explain.defaultProps = {
    a:'image source',
    b:'alt',
    desc:'important notes & titles',
    link:'page',
}