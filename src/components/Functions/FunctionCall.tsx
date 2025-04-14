import styles from './Function.module.css'
import Parameters from '../Parameters'
import Link from 'next/link'

export default function FunctionCall({title, parameters = [], link}: {title: string, parameters?: string[], link: string}){

    return(
        <Link href={link} className={styles.functionTitle}>
            {title}(<Parameters parameters={parameters}/>)
        </Link>
    )
}