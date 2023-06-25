import { showAlert, showConfirm } from "./message.js";

document.getElementById('btnAlert').addEventListener('click', () => {
    showAlert('Hello World');
});

document.getElementById('btnConfirm').addEventListener('click', () => {
    showConfirm('Are you sure?');
})