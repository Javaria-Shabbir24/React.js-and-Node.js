const fs = require('fs');
const readline = require('readline');
// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Function to update HTML file content with replacement string
function updateHTMLFile(keyword, replacement) {
  const filePath = 'about.html';
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      rl.close();
      return;
    }
    // Perform replacement
    const updatedContent = data.replace(new RegExp(keyword, 'g'), replacement);//replace all occurences of keywords
    // Write updated content back to the file
    fs.writeFile(filePath, updatedContent, (err) => {
      if (err) {
        console.error('Error updating file:', err);
      } else {
        console.log('File updated successfully!');
      }
      rl.close();
    });
  });
}
// Gather user input for keyword and replacement string
rl.question('Enter the keyword to replace: ', (keyword) => {
  rl.question('Enter the replacement string: ', (replacement) => {
    updateHTMLFile(keyword, replacement);
  });
});