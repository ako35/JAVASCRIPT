const txtNameElement = document.querySelector("#txtName");
const welcomeElement = document.querySelector("#welcome");

welcomeElement.innerHTML = `<strong>Welcome <em>${txtNameElement.value}</em></strong>`