// rename-js-to-ts.js

const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '');

function renameJsToTs(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      renameJsToTs(fullPath); // Recursive
    } else if (file.endsWith('.js')) {
      const newFile = fullPath.replace(/\.js$/, '.ts');
      fs.renameSync(fullPath, newFile);
      console.log(`Renamed: ${file} → ${path.basename(newFile)}`);
    }
  }
}

renameJsToTs(rootDir);
console.log('✅ All .js files renamed to .ts');
