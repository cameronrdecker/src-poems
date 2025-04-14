import Variable from '../Variable'

export default function Parameters({parameters}: {parameters: string[]}){
    if(parameters.length == 0){ return } 

    const vars = parameters.map((p, index)=> {
        return <Variable>{`${p}${index != parameters.length - 1 ? ', ' : ''}`}</Variable>
    })
    
    return <span>{vars}</span>

}