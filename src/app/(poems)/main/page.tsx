import FunctionDefinition from "@/components/Functions/FunctionDefinition"
import FunctionCall from "@/components/Functions/FunctionCall"
import Command from "@/components/Command"
import Variable from "@/components/Variable"

export default function Main(){
    return(
        <FunctionDefinition title="Main">
            <Command>let</Command> <Variable>result</Variable> = <FunctionCall title="live a life" link="/live-a-life" />;
        </FunctionDefinition>
    )
}