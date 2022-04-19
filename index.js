function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*---smtp---*/

function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "demo@gmail.com",
    Password : "fillpassword",
    To : 'demo@gmail.com',
    From : document.getElementById("email").value,
    Subject : "enquiry",
    Body : "And this is the body"
}).then(
   swal("Good job!", "Your message sent successfully!", "success")
);
}