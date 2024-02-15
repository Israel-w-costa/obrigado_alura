import styles from "./Banner.module.css"

import banner from "../../Assets/Banner.png"

export default function Banner () {
    return (
    <div className={styles.container_banner}>
        <img
        src={banner}
        alt="Banner Alura"
        className={styles.banner}
        />
    </div>        
    )
}