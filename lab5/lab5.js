/* Lab 5 JavaScript File 
   Place variables and functions in this file */

   function validate(formObj) {
      // put your validation code here
      // it will be a series of if statements
   
      var alertText = ""
      var focusSet = 0
   
      if (formObj.firstName.value === "") {
         alertText += "You must enter a first name\n";
         if (focusSet === 0) {
            formObj.firstName.focus();
            focusSet = 1;
         }
      }
   
      if (formObj.lastName.value === "") {
         alertText += "You must enter a last name\n";
         if (focusSet === 0) {
            formObj.lastName.focus();
            focusSet = 1;
         }
      }
   
      if (formObj.title.value === "") {
         alertText += "You must enter a title\n";
         if (focusSet === 0) {
            formObj.title.focus();
            focusSet = 1;
         }
      }
   
      if (formObj.org.value === "") {
         alertText += "You must enter an organization\n";
         if (focusSet === 0) {
            formObj.org.focus();
            focusSet = 1;
         }
      }
   
      if (formObj.pseudonym.value === "") {
         alertText += "You must enter a nickname\n";
         if (focusSet === 0) {
            formObj.pseudonym.focus();
            focusSet = 1;
         }
      }
   
      if (formObj.comments.value === "" || formObj.comments.value == "Please enter your comments") {
         alertText += "You must enter your comments\n";
         if (focusSet === 0) {
            formObj.comments.focus();
            focusSet = 1;
         }
      }
   
      if (alertText === "") {
         alert("Form successfully submitted!");
         return true;
      }
   
      if (alertText !== "") {
         alert(alertText);
         return (false);
      }
      return true;
   }
