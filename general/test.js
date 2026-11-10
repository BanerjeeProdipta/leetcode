"use strict";

// Import Node.js file system module
const fs = require("fs");

// Start reading input from stdin
process.stdin.resume();

// Set encoding format
process.stdin.setEncoding("ascii");

// Variable to store entire input
let inputString = "";

// Tracks current line being read
let currentLine = 0;

// Runs whenever input data is received
process.stdin.on("data", function (chunk) {
  // Append incoming data into inputString
  inputString += chunk;
});

// Runs after all input is finished
process.stdin.on("end", function () {
  // Split input by new lines into array
  inputString = inputString.split("\n");

  // Start main program
  main();
});

// Function to read one line at a time
function readLine() {
  // Return current line and move pointer to next line
  return inputString[currentLine++];
}

// Parent class
class User {
  // Constructor runs automatically when object is created
  constructor(userName) {
    // Store username in object
    this.userName = userName;
  }

  // Returns username
  getUsername() {
    return this.userName;
  }

  // Updates username
  setUsername(username) {
    this.userName = username;
  }
}

// Child class inheriting from User
class ChatUser extends User {
  // Constructor for ChatUser
  constructor(userName) {
    // Call parent class constructor
    super(userName);

    // Initialize warning count to 0
    this.warningCount = 0;
  }

  // Increase warning count by 1
  giveWarning() {
    this.warningCount++;
  }

  // Return current warning count
  getWarningCount() {
    return this.warningCount;
  }
}

// Main function starts here
function main() {
  // Create output stream for HackerRank
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  // Read initial username from input
  const initialUsername = readLine().trim();

  // Create ChatUser object
  const chatUserObj = new ChatUser(initialUsername);

  // Read number of operations
  let numberOfOperations = parseInt(readLine().trim());

  // Loop through all operations
  while (numberOfOperations-- > 0) {
    // Read operation line and split by space
    const inputs = readLine().trim().split(" ");

    // First word is operation type
    const operation = inputs[0];

    // Second word is username (if provided)
    const username = inputs[1];

    // Check operation type
    switch (operation) {
      // If operation is GiveWarning
      case "GiveWarning":
        // Increase warning count
        chatUserObj.giveWarning();
        break;

      // If operation is SetName
      case "SetName":
        // Update username
        chatUserObj.setUsername(username);
        break;

      // Default case does nothing
      default:
        break;
    }
  }

  // Print final username and warning count
  ws.write(
    `User ${chatUserObj.getUsername()} has a warning count of ${chatUserObj.getWarningCount()}\n`,
  );

  // Check inheritance using instanceof
  ws.write(
    `ChatUser extends User: ${(chatUserObj instanceof User).toString()}`,
  );

  // Close output stream
  ws.end();
}
