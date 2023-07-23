function addBigNumbers(a, b) {
  let bigA = BigInt(a);
  let bigB = BigInt(b);
  let sum = bigA + bigB;
  return sum.toString();
}

// Hàm tính tích hai số nguyên siêu lớn
function multiplyBigNumbers(a, b) {
  let bigA = BigInt(a);
  let bigB = BigInt(b);
  let product = bigA * bigB;
  return product.toString();
}

// Hàm chính xử lý input và tính kết quả
function calculateResult(input) {
  //sử dụng regex pattern
  const pattern = /^([0-9]+)\s*([+*])\s*([0-9]+)$/; // Pattern để trích xuất số và toán tử từ input
  const match = input.match(pattern);

  if (!match) {
    return "Invalid input format";
  } else {
    console.log("Valid input format\n")
    let numberA = match[1]; 
    console.log("Number a:",numberA); // check first number in input format
    let operator = match[2];
    console.log("Operator:",operator); // check operator in input format
    let numberB = match[3]; 
    console.log("Number b:",numberB); // check second number in input format

    let result;
    if (operator === "+") {
      result = addBigNumbers(numberA, numberB);
    } else if (operator === "*") {
      result = multiplyBigNumbers(numberA, numberB);
    }
    return result;
  }
}

// Test với số nguyên siêu lớn
let input = "202 * 20";
console.log("Inserted input:",input);
let result = calculateResult(input);
console.log("\nResult:", result);
