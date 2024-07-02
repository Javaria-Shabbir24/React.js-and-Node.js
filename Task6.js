const fs = require('fs');
// File path to be deleted
const filePath = 'obselete_page.html';
// Check if the file exists
fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error('File does not exist or cannot be accessed.');
    return;
  }
  // Delete the file
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
    } else {
      console.log('File deleted successfully!');
    }
  });
});