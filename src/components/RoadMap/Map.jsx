import styles from './roadmap.module.css'
import propsTypes from "prop-types";

export default function Map (props) {
    return (
        <>
          <div className={styles.maincontainer}>
            <div className={styles.container}>
                <div className={styles.contentcontainer}>

                    <div className={styles.content}>
                        <h4 style={{color:"#69b6e3"}}>
                            {props.s1h}
                        </h4>
                        <p>
                            {props.s1t}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.container2}>
                <div className={styles.contentcontainer2}>
                    <div className={styles.content}>
                        <h4 style={{color:"#3d89ad"}}>
                            {props.s2h}
                        </h4>
                        <p>
                            {props.s2t}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.container3}>
                <div className={styles.contentcontainer3}>
                    <div className={styles.content}>
                        <h4 style={{color:"#337694"}}>
                            {props.s3h}
                        </h4>
                        <p>
                            {props.s3t}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.container2}>
                <div className={styles.contentcontainer2}>
                    <div className={styles.content}>
                        <h4 style={{color:"#29657e"}}>
                            {props.s4h}
                        </h4>
                        <p>
                            {props.s4t}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.container3}>
                <div className={styles.contentcontainer3}>
                    <div className={styles.content}>
                        <h4 style={{color:"#1d576c"}}>
                            {props.s5h}
                        </h4>
                        <p>
                            {props.s5t}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.container4}>
                <div className={styles.contentcontainer4}>
                    <div className={styles.content}>
                        <h4 style={{color:"#0f3f4f"}}>
                            {props.s6h}
                        </h4>
                        <p>
                            {props.s6t}
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
Map.prototype = {
    s1h:propsTypes.string,
    s1t:propsTypes.string,
    s2h:propsTypes.string,
    s2t:propsTypes.string,
    s3h:propsTypes.string,
    s3t:propsTypes.string,
    s4h:propsTypes.string,
    s4t:propsTypes.string,
    s5h:propsTypes.string,
    s5t:propsTypes.string,
    s6h:propsTypes.string,
    s6t:propsTypes.string,
}
Map.defualtProps = {
    s1h:"",
    s1t:"",
    s2h:"",
    s2t:"",
    s3h:"",
    s3t:"",
    s4h:"",
    s4t:"",
    s5h:"",
    s5t:"",
    s6h:"",
    s6t:"",
}