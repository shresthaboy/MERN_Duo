//QN: to access data and save into localStorage as array of objects.
let form = document.getElementById("login");
let arrObj=[];
let arrSave=[];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("e1").value;
    let pass = document.getElementById("p1").value;

    let obj = {
        email: email,
        password: pass
    };

    //accessing previous emails:
    let prevEmail = JSON.stringify(localStorage.getItem("email"));
    
    //array of given objects:
    arrObj.push(obj);       
    
    localStorage.setItem("email", JSON.stringify(arrObj));       //saving and retrieving on localStorage
    let saved = localStorage.getItem("email") + prevEmail;
    arrSave.push(saved);
    console.log(arrSave);
    

})