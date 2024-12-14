import axios from "axios";
import {langVers} from "./var.js";
//апишка для компиляции кода https://emkc.org/
const API =axios.create({
baseURL: "https://emkc.org/api/v2/piston",
})

export const executeCode = async (language, srcCode) => {
const response = await API.post('/execute', {
    language: language, //апи принимает язык который нужно скомпилировать
    version: langVers[language], //апи принимает версию языка
    files: [
        {
            content: srcCode,
        }
    ]
})
    return response.data;
}