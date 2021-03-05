const exec = require('child_process').execSync
const fs = require('fs')
const download = require('download')

// 公共变量
const URL = process.env.URL
const path = "./Task/result.txt";
const runFile = process.env.RUNFILE;

async function downFile() {
    let file = await download(URL, './')
    await fs.writeFileSync(`./${runFile}`, file, 'utf8')
}

async function changeFiele () {
    let content = await fs.readFileSync(`./${runFile}`, 'utf8')
    content = content.replace(/"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);/, ``)
    await fs.writeFileSync(`./${runFile}`, content, 'utf8')
}

async function deleteFile(path) {
  // 查看文件result.txt是否存在,如果存在,先删除
  const fileExists = await fs.existsSync(path);
  // console.log('fileExists', fileExists);
  if (fileExists) {
    const unlinkRes = await fs.unlinkSync(path);
    // console.log('unlinkRes', unlinkRes)
  }
}

async function start() {
    // 下载最新代码
    await downFile();
    console.log('下载代码完毕')
    // 替换变量
    await changeFiele();
    console.log('替换变量完毕')
    // 执行
    await exec(`node ${runFile} >> Task/result.txt`);
    console.log('执行完毕')

    let content = "";
    if (fs.existsSync(path)) {
      content = fs.readFileSync(path, "utf8");
    }
    console.log(content)
    console.log('运行完成后，删除下载的文件\n')
    await deleteFile(path);
    await deleteFile(`./${runFile}`);
}
start()
