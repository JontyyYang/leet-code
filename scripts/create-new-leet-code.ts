import fs = require('fs');
import Path = require('path');
import {copyIt} from '../utils/linux';

// 创建文件夹
const createNewFolder = (newFilePath: string, targetPath: string): void => {
  fs.mkdirSync(newFilePath);
  fs.mkdirSync(targetPath);
};

// 复制文件
const copyFile = (targetPath: string) => {
  const renderFileName = ['index.ts', 'README.md'];
  renderFileName.forEach(item => {
    copyIt(Path.join(__dirname, '../', `template/${item}`), targetPath);
  });
};

// 主要是不想在renderFile里面增加太多的代码
const getPath = () => {
  const name = process.argv.slice(2, 3)[0];
  const newFileName = `code-${name}`;
  const newFilePath = Path.join(__dirname, '../', 'leet-code', newFileName);
  const targetPath = Path.join(newFilePath, 'jontyy');

  return {
    newFilePath,
    targetPath,
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

// 主文件，执行
const renderFile = (path: string): void => {
  const {newFilePath, targetPath} = getPath();

  const res = check(path);
  if (!res) return;

  createNewFolder(newFilePath, targetPath);

  copyFile(targetPath);
};

renderFile('./leet-code');
