const frmLogin=document.getElementById('frmLogin');

frmLogin.addEventListener('submit',(e)=>{
    e.preventDefault(); // formun submit davranisini iptal eder.

    const txtEmail=document.getElementById('txtEmail');
    const txtPassword=document.getElementById('txtPassword');

    try {
        const email=txtEmail.value;
        const password=txtPassword.value;

        if(!email || !isEmail(email)) throw new Error('Please enter a valid email')
        else if (!password )throw  new Error ('Please enter your password.')
        
        e.target.submit();
    } catch (err) {
        console.error(err);
    }
})

const isEmail=email=>{
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}