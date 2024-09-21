//Author: Brandon Wayne Fields
var isValid;
var name, email_add, message_txt;

$(document).ready(function(){
  $('#Submit_Btn').off('click').on('click', function(){
    isValid = validateForm();
    if (!isValid) {
      alert("Please validate your input (Make sure you gave your name, full email address, and a message.)");
    }
    else {
      sendSMTPEmail();
    }
  });
}); //end of document.ready

/**
 * validateForm - validates the Contact Us form.
 *
 * @author Brandon Wayne Fields, fields.it.consult@gmail.com
 * @param {string} email - the user's given email
 * @return {bool} true/false
 */
function validateForm() {

  if (!$('#Name_Txt').val()) {
    alert("Please give your name");
  }
  else {
    name = $('#Name_Txt').val();
  }

  if (!$('#Email_Txt').val()) {
    alert("Please give your email address.");
  }
  else {
    if (!IsEmail($('#Email_Txt').val())) {
      alert("Please input a valid email.");
    }
    else {
      email_add = $('#Email_Txt').val();
    }
  }

  if (!$('#Message_Txt').val()) {
    alert("Please input a message");
  }
  else {
    message_txt = $('#Message_Txt').val();
  }

  if (name.length == 0 || email_add.length == 0 || message_txt.length == 0) {
    return false;
  }
  else {
    return true;
  }
}

/**
 * IsEmail - verifies with a regex expression that the given text follows email rules.
 *
 * @author Kristi Castro, https://www.tutorialspoint.com/How-to-validate-email-using-jQuery
 * @param {string} email - the user's given email
 * @return {bool} true/false
 */
function IsEmail(email_add) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email_add)) {
    return false;
  }else{
    return true;
  }
}

/**
 * sendSMTPEmail- verifies with a regex expression that the given text follows email rules.
 *
 * @author Brandon Wayne Fields, fields.it.consult@gmail.com
 * @param {string} email - the user's given email
 * @return {bool} true/false
 */
function sendSMTPEmail() {
  Email.send({
      SecureToken : "930d1449-14a7-4d2e-aa13-4565e0c5468d",
      To : '6thstreetgeneralbaptist@gmail.com',
      From : "6thstreetgeneralbaptist@gmail.com",
      Subject : "Contact Us Inquiry",
      Body : "Name: " + name + "\n" + "Email: " + email_add + "\n" + "Message: " + message_txt
  }).then(
    message => alert("Email sent successfully.")
  );

  name = "";
  email_add = "";
  message_txt = "";
}
