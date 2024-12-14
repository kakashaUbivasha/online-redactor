import  { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import CustomSelector from "./CustomSelector.jsx";
import {text} from "../var.js";
import Output from "./Output";

const CodeEditor = () => {
    const editorRef = useRef();
    const [value, setValue] = useState("");
    const [language, setLanguage] = useState("javascript");

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const onSelect = (language) => {
        setLanguage(language);
        setValue(text[language]);
    };

    return (
        <Box>
            <HStack spacing={4}>
                <Box w="50%">
                    <CustomSelector language={language} onSelect={onSelect} />
                    <Editor
                        options={{
                            minimap: {
                                enabled: false,
                            },
                        }}
                        height="75vh"
                        theme="vs-dark"
                        language={language}
                        defaultValue={text[language]}
                        onMount={onMount}
                        value={value}
                        onChange={(value) => setValue(value)}
                    />
                </Box>
                <Output editorRef={editorRef} language={language} />
            </HStack>
        </Box>
    );
};
export default CodeEditor;
