import {Box, useToast, Text, Button} from "@chakra-ui/react";
import {useState} from "react";
import {executeCode} from "../api.js";

const Output = ({editorRef, language}) => {
const toast = useToast();
const [output, setOutput] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);
const runCode = async () =>{
const srcCode =editorRef.current.getValue(); //получение введённого кода
if (!srcCode) return;
try{
setIsLoading(true);
console.log(srcCode)
const{run: result} = await executeCode(language, srcCode);
    setOutput(result.output.split("\n"));
    console.log(result);
    result.stderr ? setIsError(true) : setIsError(false);
}
catch(err){
console.log(err);
toast(
    {
        status: 'error',
        description: err.message,
        duration: 5000,
        title: "Error"
    }
)
}
finally {
    setIsLoading(false);
}
};
return (
    <Box width="50%">
   <Text mb={2} fontSize="lg">
        Вывод
   </Text>
        <Button
            variant="outline"
            colorScheme="green"
            mb={4}
            isLoading={isLoading}
            onClick={runCode}
        >
            Вперёд
        </Button>
        <Box
            height="75vh"
            color={isError ? "red.400" : ""}
            border="1px solid"
            borderRadius={4}
            borderColor={isError ? "red.500" : "#333"}
        >
            {output
                ? output.map((line, i) => <Text key={i}>{line}</Text>)
                : 'Нажмите вперёд чтобы скомпилировать код'}
        </Box>
    </Box>
)
}
export default Output;