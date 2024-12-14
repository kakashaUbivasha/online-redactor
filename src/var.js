export const langVers = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    php: "8.2.3",
}
export const text = {
    javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("World");\n`,
    typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "World" });\n`,
    python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("World")\n`,
    php: "<?php\n\n$name = 'World';\necho $name;\n",
}
