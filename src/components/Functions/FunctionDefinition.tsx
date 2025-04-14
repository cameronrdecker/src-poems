import styles from './Function.module.css'
import Parameters from '../Parameters'

export default function FunctionDefinition({title, parameters = [], children}: {title: string, parameters?: string[], children: any}){

    return(
        <div>
            <span className={styles.functionTitle}>
                {title}(<Parameters parameters={parameters}/>)
            </span>&#123;<br/>

            <div className={styles.indent}>{children}</div>

            <span>&#125;</span>
        </div>
    )
}

