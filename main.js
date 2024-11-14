    const passwordBox = document.getElementById('password');

const lowerCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const upperCase='abcdefghijklmnopqrstuvwxyz';
const symbol='~!@#$%^&*()_-+=?\/<>{}[]';
const numbers='0123456789';
const length = 15;

function createPassword(){
    let password = '';
    const allChars= lowerCase + upperCase + symbol + numbers;
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];



    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

function copyPassword(){
    navigator.clipboard.writeText(password.value)
    .then(() => {
      alert("Text copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
    });
}