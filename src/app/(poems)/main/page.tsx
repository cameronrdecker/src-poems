import FunctionDefinition from "@/components/Functions/FunctionDefinition"
import FunctionCall from "@/components/Functions/FunctionCall"
import Define from "@/components/Define"
import Variable from "@/components/Variable"

export default function Main(){
    return(
        <FunctionDefinition title="main">
            <Define/> <Variable>result</Variable> = <FunctionCall title="test1" link="/other/test1" />;
        </FunctionDefinition>
    )
}