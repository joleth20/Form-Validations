window.addEventListener('DOMContentLoaded', () => {

     const userName = document.querySelector("#username")
     const passWord = document.querySelector("#password")
     const subMit = document.querySelector("#submit")
     const messAge = document.querySelector('#msg') 


    //  Validations


    subMit.addEventListener('click', (e) => {
     e.preventDefault();

        // conditions
       if (userName.value.length === 0 || passWord.value.length === 0){
             messAge.innerHTML = "<h4 class='error'>Please complete details!</h4>";
       
               setTimeout(() => document.querySelector('.error').remove(), 3000)
       }else{
        console.log('true')
       }


    })
     

// Form Event
    subMit.addEventListener('click', (event) => {
      event.preventDefault();
        userName.style.background = 'black';
     

     })



})