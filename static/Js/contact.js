$(document).ready(
$("#contact-form").submit((evt) => {
  evt.preventDefault();

  let isValid = true;
  const email = $("#email").val();
  const subject = $('#subject').val();
  const message = $("#message").val();

  if (email == "") {
    $("#emailError").show();
    isValid = false;
  } else if (!validateEmail(email)) {
    $("#emailError").show();
    isValid = false;
  } else {
    $("#emailError").hide();
  }

  if (subject == "") {
    $('#subjectError').show();
    isValid = false;
  } else {
    $("#subjectError").hide();
  }

  if (message == "") {
    isValid = false;
    $("#messageError").show();
  } else {
    $("#messageError").hide();
  }

  if (isValid == true) {
    $("#formErrorMessage").hide();
    $("#formConfirmationMessage").show();
  } else {
    $("#formErrorMessage").show();
    $("#formConfirmationMessage").hide();
  }
}))

function validateEmail(email) {
  const emailReg = /(^[\w.-]+)@([\w-]+\.)+([^.]+)$/;
  return emailReg.test(email);
}