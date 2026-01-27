// 1
function checkLuckyNumber(num) {
  // TODO: Create and return a promise that:
  return new Promise((resolve, reject) => {
    // 1. Waits 800ms (use setTimeout)
    setTimeout(() => {
      // 2. Resolves with "Lucky!" if number is divisible by 7
      if (num % 7 === 0) {
        resolve(`${num} is Lucky `);
      }
      // 4. Rejects with Error("Invalid number") if number is negative or zero
      if (num <= 0) {
        resolve(new Error("Invalid number"));
        return;
      } else {
        // 3. Resolves with "Not lucky" for other positive numbers
        resolve(`${num} is Not lucky`);
      }
    }, 800);
  });
}

checkLuckyNumber(7)
  .then((num) => console.log(num))
  .catch((err) => console.log(err));

// -------------------------- 2
function processFile(filename, processingTime) {
  return new Promise((resolve, reject) => {
    console.log(`Starting to process ${filename}...`);

    setTimeout(() => {
      // 15% chance of failure for realistic simulation
      if (Math.random() < 0.15) {
        reject(new Error(`Failed to process ${filename}`));
      } else {
        const result = {
          filename: filename,
          size: Math.floor(Math.random() * 1000) + 100, // Random size
          processedAt: new Date().toLocaleTimeString(),
        };
        console.log(`✓ Completed ${filename}`);
        resolve(result);
      }
    }, processingTime);
  });
}

// TODO: Use Promise.all() to process these files concurrently:
const files = [
  { name: "document1.pdf", time: 2000 },
  { name: "image1.jpg", time: 1500 },
  { name: "data.csv", time: 3000 },
  { name: "report.docx", time: 1000 },
];

// TODO:
// 1. Create an array of promises using the files array
const promises = files.map((file) => processFile(file.name, file.time));

const startTime = Date.now();

// 2. Use Promise.all() to wait for all files to complete
Promise.all(promises)
  .then((results) => {
    // 3. Log total processing time and all results
    console.log("Total processing time: " + (Date.now() - startTime) + "ms");
    console.log("All files processed successfully!");
    console.log(results);
  })
  // 4. Handle the case where any file fails
  .catch((error) => {
    console.error("Error processing files:", error);
  });

//------------------------ 3
// Simulated inventory database
const inventory = {
  laptop: { price: 999, stock: 5 },
  mouse: { price: 25, stock: 10 },
  keyboard: { price: 75, stock: 0 }, // Out of stock
  monitor: { price: 299, stock: 3 },
};

function checkInventory(items) {
  // TODO: Return a promise that:
  return new Promise((resolve, reject) => {
    // 1. Waits 500ms (simulating database check)
    setTimeout(() => {
      // 2. Checks if all items are in stock
      for (const item of items) {
        if (inventory[item].stock === 0) {
          // 4. Rejects with specific item that's out of stock
          reject(new Error(`${item} is out of stock`));
        }
      }
      // 3. Resolves with items if all available
      resolve(items);
    }, 500);
  });
}

function calculateTotal(items) {
  // TODO: Return a promise that:
  return new Promise((resolve, reject) => {
    // 1. Waits 200ms
    setTimeout(() => {
      // 2. Calculates total price including 8% tax
      let subtotal = 0;
      for (const item of items) {
        subtotal += inventory[item].price;
      }
      const tax = subtotal * 0.08;
      const total = subtotal + tax;
      // 3. Resolves with { subtotal, tax, total }
      resolve({ subtotal, tax, total });
    }, 200);
  });
}

function processPayment(amount) {
  // TODO: Return a promise that:
  return new Promise((resolve, reject) => {
    // 1. Waits 1500ms (simulating payment processing)
    setTimeout(() => {
      // 2. 90% success rate
      if (Math.random() < 0.9) {
        // 3. Resolves with { transactionId, amount, status: 'success' }
        resolve({
          transactionId: Math.random().toString(36).substring(2, 15),
          amount,
          status: "success",
        });
      } else {
        // 4. Rejects with payment failure error
        reject(new Error("Payment failed"));
      }
    }, 1500);
  });
}

function updateInventory(items) {
  // TODO: Return a promise that:
  return new Promise((resolve, reject) => {
    // 1. Waits 300ms
    setTimeout(() => {
      // 2. Reduces stock for each item
      for (const item of items) {
        inventory[item].stock--;
      }
      // 3. Resolves with updated inventory status
      resolve(inventory);
    }, 300);
  });
}

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names

// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately

function checkout(itemNames) {
  // TODO: Implement the complete checkout flow
  return checkInventory(itemNames)
    .then((items) => calculateTotal(items))
    .then((total) => processPayment(total.total))
    .then((payment) => updateInventory(itemNames))
    .then((inventory) => ({ payment, inventory }))
    .catch((error) => {
      console.error("Order failed:", error.message);
    });
}

// Test cases:
checkout(["laptop", "mouse"]) // Should succeed
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["laptop", "keyboard"]) // Should fail - keyboard out of stock
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["monitor", "mouse", "laptop"]) // Might fail at payment (10% chance)
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));
