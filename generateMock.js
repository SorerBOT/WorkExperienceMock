const fs = require('fs');
const path = require('path');

/**
 * Generate multiple mock code files for a language
 * @param {string} baseName - base filename prefix
 * @param {string} language - 'js' or 'cs'
 * @param {number} totalBytes - total bytes across all files
 * @param {number} numFiles - how many files to split into
 */
function generateMockFiles(baseName, language, totalBytes, numFiles) {
  let boilerplate = '';
  if (language === 'js') {
    boilerplate = `(function(){let x=1;console.log(x);})();\n`;
  } else if (language === 'cs') {
    boilerplate = `namespace Dummy{class Program{static void Main(){}}}\n`;
  } else {
    throw new Error('Unsupported language');
  }

  const bytesPerFile = Math.floor(totalBytes / numFiles);

  for (let i = 1; i <= numFiles; i++) {
    let content = '';
    while (Buffer.byteLength(content, 'utf8') < bytesPerFile) {
      content += boilerplate;
    }
    // Trim to exact bytes per file
    content = content.slice(0, bytesPerFile);
    const filename = `${baseName}_${i}.${language}`;
    fs.writeFileSync(path.join(__dirname, filename), content);
    console.log(`Created ${filename} (${bytesPerFile} bytes)`);
  }
}

// Example usage:
generateMockFiles('Auto3P_frontend', 'js', 4927430, 10);
generateMockFiles('Auto3P_Backend', 'cs', 2969530, 10);
generateMockFiles('Code-Clique', 'js', 1202026, 3);

