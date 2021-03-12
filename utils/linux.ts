import child_process = require('child_process');

export function copyIt(from: string, to: string): void {
  child_process.spawn('cp', ['-r', from, to]);
}
