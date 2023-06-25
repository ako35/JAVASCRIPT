const showAlert = (msg) => {
    alert(msg);
}

const showConfirm = (msg) => {
    return confirm(msg);
}

const setMessage = (msg) => {
    document.getElementById('message').innerHTML = msg;
}

export {showAlert, showConfirm};