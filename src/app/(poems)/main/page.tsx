import FunctionDefinition from "@/components/Functions/FunctionDefinition"
import FunctionCall from "@/components/Functions/FunctionCall"
import Define from "@/components/Define"
import Variable from "@/components/Variable"

export default function Main(){
    return(
        <FunctionDefinition title="Main">
            <Define/> <Variable>result</Variable> = <FunctionCall title="live a life" link="/live-a-life" />;
        </FunctionDefinition>
    )
}