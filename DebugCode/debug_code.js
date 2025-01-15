    
    function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let num3 = parseInt(document.getElementById('input3').value);
    let num4 = parseInt(document.getElementById('input4').value);
    
    
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)&& !isNaN(num3)&& !isNaN(num4)) {
    // Perform the operation
                    let result = multiply(num1, num2, num3, num4);

                    // Display the result
                    displayResult(result);
                } else {
                    displayResult('Please enter valid numbers');
                }
            }

            function multiply(a, b ,c, d) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Multiply the numbers
                return ((a * b) + c)/d;
            }

            function displayResult(result) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result');
                resultElement.textContent = `The result is: ${result}`;
            }
        
