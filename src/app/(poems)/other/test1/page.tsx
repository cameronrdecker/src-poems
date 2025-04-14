import FunctionDefinition from "@/components/Functions/FunctionDefinition"
import FunctionCall from "@/components/Functions/FunctionCall"
import Define from "@/components/Define"
import Variable from "@/components/Variable"

export default function Test1(){
    return(
        <FunctionDefinition title="test1">
            <Define/> <Variable>result</Variable> = <FunctionCall title="test4" link="/other/sub/test4" />;
        </FunctionDefinition>
    )
}