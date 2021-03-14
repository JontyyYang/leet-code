import child_process = require('child_process');
import fs from 'fs';
import Path from 'path';

export function copyIt(from: string, to: string): void {
  child_process.spawn('cp', ['-r', from, to]);
}

// 创建文件夹
export const createNewFolder = (newFilePath: string): void => {
  fs.mkdirSync(newFilePath);
};

// 复制文件
export const copyFile = (
  renderFileName: string[],
  originPath: string,
  newFilePath: string
): void => {
  renderFileName.forEach(item => {
    copyIt(Path.join(__dirname, '../', `${originPath}/${item}`), newFilePath);
  });
};
