import FunctionDefinition from "@/components/Functions/FunctionDefinition"
import FunctionCall from "@/components/Functions/FunctionCall"
import { Define } from "@/components/System"
import Variable from "@/components/Variable"

export default function Organize(){
    return(
        <FunctionDefinition title="organize">
            <Define/> <Variable>result</Variable> = <FunctionCall title="test1" link="/other/test1" />;
        </FunctionDefinition>
    )
}