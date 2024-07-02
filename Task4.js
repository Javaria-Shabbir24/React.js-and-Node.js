const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,//listens the inputs from user
    output: process.stdout//sends output
});
//asks question from user and waits for response
rl.question('Enter the number of HTML files you want to create: ', function (numFiles) {
    numFiles = parseInt(numFiles);
    if (!numFiles) {
        console.log('Please enter a valid number.');
        rl.close();
        return;
    }
    
    let count = 0;
    const createFile = () => { //creates file
        if (count < numFiles) {
            let fileNumber = count + 1;
            rl.question(`Enter title for HTML file ${fileNumber}: `, function (title) {
                rl.question(`Enter content for HTML file ${fileNumber}: `, function (content) {
                    const filePath = `file_${fileNumber}.html`;//file names
                    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
</head>
<body>
    <p>${content}</p>
</body>
</html>
`;

                    fs.writeFile(filePath, htmlContent, (err) => {//writing the contents in file
                        if (err) {
                            console.log(`Error creating file ${filePath}:`, err);
                        } else {
                            console.log(`${filePath} created successfully!`);
                            count++;
                            createFile(); // Recursively call to create next file
                        }
                    });
                });
            });
        } else {
            rl.close(); // Close the readline interface
        }
    };

    createFile(); // Start the recursive function
});

rl.on('close', function () {
    console.log('Done creating HTML files.');
    process.exit(0);
});
