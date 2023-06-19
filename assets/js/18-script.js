
function sayHello() {
    const nameInput = document.querySelector("#txtName");
    const welcomeMsg = document.querySelector("#welcome");
  
    if (!nameInput) return;
  
    welcomeMsg.innerHTML = `Hello ${nameInput.value}`;
  }