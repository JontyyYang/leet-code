import fs = require('fs');
import Path = require('path');
import {copyFile, createNewFolder} from '../utils/linux';

// 复制文件
const copyFiles = (newFilePath: string) => {
  const renderFileName = ['index.ts', 'README.md'];
  copyFile(renderFileName, 'template', newFilePath);
};

// 主要是不想在renderFile里面增加太多的代码
const getPath = () => {
  const name = process.argv.slice(2, 3)[0];
  const newFileName = `code-${name}`;
  const newFilePath = Path.join(__dirname, '../', 'leet-code', newFileName);

  return {
    newFilePath,
    name,
  };
};

// 校验是否重名
const check = (path: string) => {
  const {name} = getPath();

  const files = fs.readdirSync(path);
  const filesNameArray: number[] = [];
  files.forEach(item => {
    // 存在一个.DS_Store的隐藏文件需要过滤，其实应该判断字符串是否以code开头。这种if判断不是很合理
    item.startsWith('code-') && filesNameArray.push(Number.parseInt(item.split('-')[1]));
  });

  if (filesNameArray.includes(+name)) {
    console.log('文件名重名');
    return false;
  }
  return true;
};

// 生成相应内容
const createContent = () => {
  const {newFilePath} = getPath();

  createNewFolder(newFilePath);

  copyFiles(newFilePath);
};

// 主文件，执行
const renderFile = (path: string): void => {
  const res = check(path);
  if (!res) return;

  createContent();
};

renderFile('./leet-code');
