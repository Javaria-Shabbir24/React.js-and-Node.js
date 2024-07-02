const fs = require('fs');
// File paths
const oldFilePath = 'new_page.html';
const newFilePath = 'old_page.html';
// Rename the file
fs.rename(oldFilePath, newFilePath, (err) => {
  if (err) {
    console.error('Error renaming file:', err);
  } else {
    console.log('File renamed successfully!');
  }
});