// Button element ko pakad rahe hain
const button = document.getElementById('testButton');
const output = document.getElementById('jsOutput');

// Jab button par click hoga tab kya karna hai
button.addEventListener('click', function () {
    output.textContent = "🚀 JavaScript bilkul makkhan chal raha hai! Deployment Successful!";
    button.textContent = "Maine apna kaam kar diya! ✅";
    button.style.backgroundColor = "#28a745"; // Button green ho jayega

    console.log("Vercel console me bhi JS chal raha hai!");
});