import styles from './Userpanel.module.css'
import Profilepicture from "../Profilepicture/Profilepicture.jsx";

export default function Userpanel () {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.contentcontainer}>
                <div className={styles.contents}>
                    <p className={styles.details}>نام کاربری :</p>
                    <hr/>
                    <p className={styles.details}>نام:</p>
                    <hr/>
                    <p className={styles.details}>نام خانوادگی :</p>
                    <hr/>
                    <p className={styles.details}>سن :</p>
                    <hr/>

                </div>
                <div className={styles.profilepicture}>
                    <div className={styles.profileconatiner}>
                    <Profilepicture/>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}