import styles from './Command.module.css'

export default function Command({children}: {children: string}){
    return <span className={styles.command}>{children}</span>
}