   function login() {

       var email = document.getElementById('username').value;
       var password = document.getElementById('pwd').value;


       if (password === localStorage.getItem(email)) {
           console.log("Welcome to SpaceLive.com");
           return true;
       } else {
           console.log("Invalid Login");
           return false;
       }
   }