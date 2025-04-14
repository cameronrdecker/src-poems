import styles from './Variable.module.css'

export default function Variable({children}: {children: string}){
    return <span className={styles.variable}>{children}</span>
}