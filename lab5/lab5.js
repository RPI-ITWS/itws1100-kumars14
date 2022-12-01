/* Lab 5 JavaScript File 
   Place variables and functions in this file */

function validate(formObj) {
   // put your validation code here
   // it will be a series of if statements

   if (formObj.firstName.value == "") {
      alertText += "You must enter a first name\n";
      if (focusSet == 0) {
         formObj.firstName.focus();
         focusSet = 1;
      }
      //return false;
   }

   if (formObj.lastName.value == "") {
      alertText += "You must enter a last name\n";
      if (focusSet == 0) {
         formObj.lastName.focus();
         focusSet = 1;
      }
      //return false;
   }



   return true;
}
