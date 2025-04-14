import FunctionDefinition from "@/components/Functions/FunctionDefinition"
import FunctionCall from "@/components/Functions/FunctionCall"
import Define from "@/components/Define"
import Variable from "@/components/Variable"

export default function Test2(){
    return(
        <FunctionDefinition title="test2">
            <Define/> <Variable>result</Variable> = <FunctionCall title="live a life" link="/live-a-life" />;
        </FunctionDefinition>
    )
}