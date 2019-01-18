// BUTTONS
var searchBtn = document.getElementById('search');
var signUp = document.getElementById("signUp");
var loginBtn = document.getElementById("login");

// Login Screen
var loginScreen = document.getElementById('popUp');

//Close Button
var closeBtn = document.getElementById('close');

// LOGIN BUTTON
loginBtn.onclick = function LogInFunction () {
  // console.log('Log In Connected');

  if(loginScreen.className == 'is-active') {
  
    return;
  } else {
      //activate the Modal
    loginScreen.className = "is-active";
  }
  
};

// CLOSE MODALS AND POPUPS

// CLOSE LOGIN MODAL

closeBtn.addEventListener('submit',function () {
  loginScreen.classList.remove("is-active");
});

// closeBtn.onclick = function () {
//   if(loginScreen.className == 'is-active') {
//   loginScreen.classList.remove("is-active");
    
//   } else {
//     return;
//   }
// };

signUp.onclick = function signUpFunction () {
  console.log('Sign Up Connected!');
};