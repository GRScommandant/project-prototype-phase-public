import styles from './AaN.module.css'
import image1 from '../../assets/Education-selection-questions.jpg'

export function Card({img_url = "", title = "Card Title", content = "Card Content"}) {
    return (
        <>
            <div className={styles.card}>
                <img className={styles.cardImg} src={img_url} alt=""/>
                <div className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>{title}</h2>
                    <p className={styles.cardText}>{content}</p>
                    <a href="#" className={styles.cardLink}>Go somewhere</a>
                </div>
            </div>
        </>
    )

}

export default function AaN() {
    const contents = [
        {img_url: image1, title: "Card Title 1", content: "Card Content 1"},
        {img_url: image1, title: "Card Title 2", content: "Card Content 2"},
        {img_url: image1, title: "Card Title 3", content: "Card Content 3"},
        {img_url: image1, title: "Card Title 4", content: "Card Content 4"},
        {img_url: image1, title: "Card Title 5", content: "Card Content 5"},
        {img_url: image1, title: "Card Title 6", content: "Card Content 6"},
    ]
    return (
        <>
            <div className={styles.container}>
                <div className={styles.row}>
                    {contents.map((card) =>
                        <Card img_url={card.img_url} title={card.title} content={card.content}/>
                    )}
                </div>
            </div>
        </>
    )
}