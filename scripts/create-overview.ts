// 生成overView文件夹
// 生成下面的标题文件夹
// 复制模板文件， 分别是模板和包含代码
import fs from 'fs';
import path from 'path';
import chalk = require('chalk');
import {copyFile, createNewFolder} from '../utils/linux';

const getBasicData = () => {
  const containerPath = './overview';

  const name = process.argv.slice(2, 3)[0];

  const newPath = path.join(__dirname, '../', 'overview', name);

  return {containerPath, name, newPath};
};

// 校验并创建overview文件夹
const validateContainerFolder = () => {
  const {containerPath} = getBasicData();
  try {
    fs.accessSync(containerPath);
    console.log(chalk.green('正在创建目录'));
  } catch (e) {
    fs.mkdirSync(path.join(__dirname, '../', containerPath));
  }
};

// 校验是否重名
const validateOverviewName = (): boolean => {
  const {containerPath} = getBasicData();

  const files = fs.readdirSync(containerPath);

  const {name} = getBasicData();
  const flag = files.includes(name) ? true : false;

  return flag;
};

// 校验
const validateFunc = () => {
  validateContainerFolder();

  if (validateOverviewName()) {
    console.log(chalk.green('文件件名称重复，请重新创建'));
    return false;
  }
  return true;
};

const renderOverView = () => {
  if (validateFunc()) {
    const {newPath} = getBasicData();
    createNewFolder(newPath);
    copyFile(['overview.md'], 'template', newPath);
  }
};

renderOverView();
