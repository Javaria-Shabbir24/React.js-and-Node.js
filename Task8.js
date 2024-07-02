const fs = require('fs');
const path = require('path');
// Directory path containing HTML files to be renamed
const directoryPath = 'html_backup';
// Get current timestamp
const timestamp = new Date().toISOString().replace(/:/g, '-');
// Read all files in the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  // Filter HTML files
  const htmlFiles = files.filter(file => path.extname(file).toLowerCase() === '.html');
  // Rename each HTML file with timestamp
  htmlFiles.forEach((file) => {
    const oldFilePath = path.join(directoryPath, file);
    const newFileName = `${path.parse(file).name}_${timestamp}.html`;
    const newFilePath = path.join(directoryPath, newFileName);
    // Rename the file
    fs.rename(oldFilePath, newFilePath, (err) => {
      if (err) {
        console.error(`Error renaming file ${file}:`, err);
      } else {
        console.log(`File ${file} renamed to ${newFileName} successfully!`);
      }
    });
  });
});