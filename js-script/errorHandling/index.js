const fs = require("fs");

// 1
// const safeJsonParse = (text) => {
//   try {
//     console.log(JSON.parse(text));
//   } catch (error) {
//     console.error("Error : ", error.message);
//   }
// };

// safeJsonParse("tom"); // error
// safeJsonParse('{"name": "tom"}'); // good

// 2
function readFileWithErrorHandling(fileName, callback) {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      return callback(`Error: File not found: ${fileName}`);
    }

    const fileSize = data.length;
    callback(`Success: File read successfully. Size: ${fileSize} bytes`);
  });
}

readFileWithErrorHandling("existing.txt", (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});
