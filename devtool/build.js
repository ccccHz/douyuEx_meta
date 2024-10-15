// build.js on my own
const fs = require("fs");
const path = require("path");
const uglifyjs = require("uglify-js");

let css = "";
let js = "";

function handleFolder(folderPath, excludingFileName) {
    // 读取文件夹中的所有文件和子文件夹
    fs.readdirSync(folderPath).forEach((item) => {
        const itemPath = path.join(folderPath, item);
        if (fs.statSync(itemPath).isDirectory()) {
            handleFolder(itemPath, excludingFileName);
        } else {
            if (item !== excludingFileName) {
                const fileContent = fs.readFileSync(itemPath, "utf8");
                if (item.includes(".css")) css += fileContent + "\r\n";
                if (item.includes(".js")) js += fileContent + "\r\n";
            }
        }
    });
}

function build(ifDev = false) {
    handleFolder("./src", "main.js");
    css = css.replace(/\r\n/g, "");
    let template = fs.readFileSync("./src/main.js", "utf8");
    template = template.replace("/*编译器标记 勿删*/", css).replace("// 编译器标记 勿删", js);

    if (!fs.existsSync("./dist")) fs.mkdirSync("./dist");
    fs.writeFileSync("./devtool/douyuex.js", template);

    let header = "";
    header = fs.readFileSync("./src/main.js", "utf8").split("// ==/UserScript==")[0];
    header += "// ==/UserScript==\r\n";

    const result = uglifyjs.minify(template);
    fs.writeFileSync("./devtool/douyuex.user.js", header + result.code);

    if (ifDev) {
        // remove first line if equal to "use strict"
        devCodes = template.split("// ==/UserScript==")[1]
        fs.writeFileSync("./devtool/dyEx_dev.user.js", devCodes);
    }

}

const args = process.argv.slice(2);
switch (args[0]) {
    case "build-mine":
        build();
        break;
    case "dev":
        build(ifDev = true);
        break;
    case "watch":
        build();
        fs.watch("./src", { recursive: true }, (eventType, filename) => {
            build();
        });
        break;
    default:
        console.log("Invalid command");
        break;
}