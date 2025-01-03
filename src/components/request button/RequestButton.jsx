import react, {useRef, useState} from 'react'
import styles from './button.module.css'

    const Requestflow = () => {
        const [response, setResponse] = useState(null);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);

        const handlechangeColor = (e) =>{
            const v = e.current.target
            if (error) {
                e.current.style.color = "red"
            }
            else {
            }
t        }
        const handleButtonClick = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await fetch("", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({key: 'value'}),
                });

                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await res.json();
                setResponse(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        return (
            <div>
            <button onClick={handleButtonClick}  disabled={loading} className={styles.buttons} >
                {loading ? 'درحال بارگیری' : 'درخواست'}
            </button>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
            </div>
        )
    }
export default Requestflow;