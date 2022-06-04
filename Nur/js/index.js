$('a.flipper').click(function(){
  $('.flip').toggleClass('flipped');
});

// Section 1 -  Declare an array of elements -----------------
var myImagesArray = ["Nur/canada/1L.jpg","Nur/canada/2L.jpg","Nur/canada/3L.jpg","Nur/canada/4L.jpg","Nur/canada/5L.jpg","Nur/canada/6L.jpg","Nur/canada/7L.jpg","Nur/canada/8L.jpg","Nur/canada/9L.jpg","Nur/canada/10L.jpg", "Nur/canada/11L.jpg", "Nur/canada/12L.jpg"];


// -----------------------------------------------------------
// Section 2 -  Build the slide of images --------------------
var ImageNumber = 0;
var difference = myImagesArray.length - 1;
function ChangeImage(direction)
{//begin function
   
        ImageNumber = ImageNumber + direction;
        if(ImageNumber > difference)
        {//begin first inner if
            ImageNumber = 0;
        }//end first if
        if(ImageNumber < 0)
        {//begin second inner if
            ImageNumber = difference;
        }//end second if

        document.getElementById('slideshow').src= myImagesArray[ImageNumber];
    
}//end function

// Name and Password from the register-form
var email = document.getElementById('email');
var pw = document.getElementById('pass');
var fn = document.getElementById('fullname');

// storing input from register-form
function store() {
    localStorage.setItem('emails', email.value);
    localStorage.setItem('passwords', pw.value);
    $('#email').val('');
    $('#email').focus();
    $('#pass').val('');
    $('#pass').focus();
    $('#fullname').val('');
    $('#fullname').focus();
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = l 
    var storedPw = localStorage.getItem('passwords');

    // entered data from the login-form
    var userName = document.getElementById('emaill');
    var userPw = document.getElementById('passwordl');

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName && userPw.value == storedPw) {
      alert('You are loged in.');
    }else {
      alert('ERROR.');
    }
    document.getElementById('emaill') = '';
    document.getElementById('passwordl') = '';
}

// 'use strict';

// $(document).ready(function() {

//   const data = JSON.parse(localStorage.getItem('emails'));

//   $('#add_logs').click(function() {

//     var textbox = $('#email');
//     var task = textbox.val();
//     if (task === '') {
//       alert('Please enter a e-mail.');
//       textbox.focus();
//     } else {
//       // add task to web storage// stored data from the register-form
//       var storedName = localStorage.getItem('emails');
//       if(task != storedName) {
//         alert('ERROR');
//       }else {
//         alert('You are loged in.');
//       }
//       for (var i = 0, length = localStorage.length; i < length; i++) {
//         alert(localStorage.getItem('emails').key(i));
//         if (localStorage.getItem(localStorage.key(i)) === task) {
//           alert('This e-mail exists, please enter different e-mail.');
//         }
//         else {
          

//           var textbox1 = $('#pass');
//           var task1 = textbox1.val();
//           if (task1 === '') {
//             alert('Please enter a password.');
//             textbox1.focus();
//           } else {

//             var textbox2 = $('#fullname');
//             var task2 = textbox2.val();
//             if (task2 === '') {
//               alert('Please enter a password.');
//               textbox2.focus();
//             } else { 

//               var textbox2 = $('#fullname');
//               var task2 = textbox2.val();
//               if (task2 === '') {
//                 alert('Please enter a password.');
//                 textbox2.focus();
//               } else {   
//                 // add task to web storage
//                 var arr = localStorage.emails || ''; // default value of empty string
//                 localStorage.emails = arr.concat(task, '\n');

//                 // clear task text box and re-display tasks
//                 textbox.val('');
//                 textbox.focus();

//                 var arr1 = localStorage.passwords || ''; // default value of empty string
//                 localStorage.passwords = arr1.concat(task1, '\n');
          
//                 // clear task text box and re-display tasks
//                 textbox1.val('');
//                 textbox1.focus();

//                 var arr2 = localStorage.fullnames || ''; // default value of empty string
//                 localStorage.fullnames = arr2.concat(task2, '\n');
          
//                 // clear task text box and re-display tasks
//                 textbox2.val('');
//                 textbox2.focus();
//              }
//             }
//           }
//         }
//       }
//     }
//   });
// });