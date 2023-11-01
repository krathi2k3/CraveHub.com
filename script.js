//let loginForm=document.querySelector('.login-form');

//document.querySelector('.fa-regular fa-user').onclick=() =>{
//    loginForm.classList.toggle('active');
//}

   // document.getElementById("toggleBtn").onclick = function() {
        //var icons = document.getElementById("icons");
        //if (icons.style.display === "none") {
        //    icons.style.display = "block";
      //  } else {
           // icons.style.display = "none";
    //    }
  //  };
//

// const showFormButton = document.getElementById('showFormButton');
// const myForm = document.getElementById('myForm');

// // Add a click event listener to the button
// showFormButton.addEventListener('click', () => {
//     // Toggle the visibility of the form
//     if (myForm.style.display === 'show') {
//         myForm.style.display = 'block';
//     } else {
//         myForm.style.display = 'none';
//     }
// });

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const form = document.getElementById('form');

  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
  
    form.style.display = 'none';
  }
});