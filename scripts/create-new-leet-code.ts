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
  copyIt(Path.join(__dirname, '../', 'template/index.ts'), targetPath);
  copyIt(Path.join(__dirname, '../', 'template/README.md'), targetPath);
};

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

const renderFile = (path: string): void => {
  const {newFilePath, targetPath, name} = getPath();
  const files = fs.readdirSync(path);
  const filesNameArray: number[] = [];

  files.forEach(item => {
    // 存在一个.DS_Store的隐藏文件需要过滤，其实应该判断字符串是否以code开头。这种if判断不是很合理
    item.startsWith('code-') && filesNameArray.push(Number.parseInt(item.split('-')[1]));
  });

  if (filesNameArray.includes(+name)) {
    console.log('重名了');
    return;
  }

  // 创建文件夹
  createNewFolder(newFilePath, targetPath);

  copyFile(targetPath);
};

renderFile('./leet-code');
