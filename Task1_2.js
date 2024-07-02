const fs = require('fs');//working with file systems
const path = require('path');//working with directories
const cheerio = require('cheerio'); //html document manipulation
// Path to the HTML file
const filePath = 'index.html';
// Read file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  // Print the contents of the file to the console
  console.log(data);
});

//part2 
// Directory containing HTML files
const dirPath = path.join(__dirname, 'test');

// Read the directory content
fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter HTML files
  const htmlFiles = files.filter(file => file.endsWith('.html'));

  // Process each HTML file
  htmlFiles.forEach(file => {
    const filePath = path.join(dirPath, file);

    // Read each file asynchronously
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${file}`, err);
        return;
      }
      // Use cheerio to load the HTML content
      const $ = cheerio.load(data);

      // Count <img> tags
      const imgCount = $('img').length;

      // Log the result
      console.log(`${file} has ${imgCount} <img> tags.`);
    });
  });
});