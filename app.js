/*function Callme(fname, lname, email){
    this.fname = fname;
    this.lname = lname;
    this.email = email;

}



function add(){

    //var formdata = {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    //}
var data = new Callme(fname, lname, email);

console.log(data); 
//console.log(formdata.lname);
//console.log(formdata.email);

let alluser = [
    {email:"zubiar@gmail.com"},
    {email:"zubiar@gmail.com"},
    {email:"zubiar@gmail.com"},
]

}*/

// Local Storage & JSON
// var email = "ahmer@gmail.com";
// var password = "12345";


// function submitLogin() {

//     if (email === userEmail && password === userPassword) {
//         alert("conguralation you are loggedin ");
//         window.location.href = "./home.html"

//     } else {
//         alert("you are failed");
//         window.location.href = "./404.html"
//     }
// }




function login() {

    var luserEmail = document.getElementById("email").value;

    let user = localStorage.getItem('mykey')
    console.log(JSON.parse(user));
    user = JSON.parse(user);  
}


// let obj = {
//     name: 'zubair',
//     email: 'zubair@gmail.com',
//     password: 'fjsdafkdsjalk'
// }

// let allusers = localStorage.getItem('allusers')
// usersArray.push(obj);

// let joanDATA = JSON.stringify(usersArray)
// localStorage.setItem('allusers', joanDATA);

/*function checkexistinguser(userEmail){

let user = localStorage.getItem('mykey')
    console.log(JSON.parse(user));
    user = JSON.parse(user);
    
    for (let index = 0; index < user.length; index++) {

        var singleUserData = user[index]
        if (singleUserData.email === userEmail)
        {
        alert("Login Successful")
        }      
}
alert("User already exist")
}
*/