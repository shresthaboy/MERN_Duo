// JS to save print input as object
document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("form").addEventListener("submit",function(event){
        event.preventDefault();
        let email = document.getElementById('email').value;
        let pass = document.getElementById('pass').value;

        let obj = {
        email: email,
        password: pass,
        };
        console.log(obj);
    });
});

