const fs = require('fs');
// HTML content with basic structure
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task3</title>
</head>
<body>
  <h1>Lab 10</h1>
  <h2>Open with Live Server</h2>
  <p>We are working on file generation</p>
</body>
</html>
`;
fs.writeFile('new_page2.html', htmlContent, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('New HTML file created successfully!');
});