// function validateForm(e){
//     e.preventDefault();
//     let myForm = document.getElementById("myForm");
//     let errorSpans = document.querySelectorAll(".message");
//     let isValid = true;
    
//     // reset display of the error inputs before validating
//     myForm.firstName.classList.remove("errorInput");
//     myForm.lastName.classList.remove("errorInput");
//     myForm.comment.classList.remove("errorInput");
    
//     // reset the display of the error message spans
//     errorSpans.forEach(function(span){
//         span.classList.remove("error");
//     });

//     document.querySelector("#success").classList.remove("show");
//     document.querySelector("#success").classList.add("hide");

//     let nameRegex = /^\w{2,12}$/;
//     let zCodeRegex = /^\d{5}$/; // looking for five numbers only

//     if(!nameRegex.test(myForm.firstName.value)){
//         myForm.firstName.classList.add("errorInput");
//         errorSpans[0].classList.add("error");
//         isValid = false;
//     }

//     if(!nameRegex.test(myForm.lastName.value)){
//         myForm.lastName.classList.add("errorInput");
//         errorSpans[0].classList.add("error");
//         isValid = false;
//     }

//     if(myForm.comment.value === ""){
//         myForm.comment.classList.add("errorInput");
//         errorSpans[2].classList.add("error");
//         isValid = false;
//     }

//     if(isValid){
//         document.querySelector("#success").classList.remove("hide");
//         document.querySelector("#success").classList.add("show");
//         let successP = document.getElementById("formSub");
//         successP.innerHTML = "<strong>First Name: </strong>" + myForm.firstName.value +  
//         "<br><strong>Last Name: </strong>" + myForm.lastName.value +
//             "<br><strong>Zip Code: </strong>" + myForm.zipCode.value +
//             "<br><strong>Message: </strong>" + myForm.comment.value;
        
//         myForm.submit();
        
//         // clear the form and prepare for more input
//         myForm.firstName.value = "";
//         myForm.lastName.value = "";
//         myForm.comment.value = "";
//         myForm.firstName.focus();
//     }
// }