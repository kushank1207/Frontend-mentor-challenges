const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener('submit', e => {
  e.preventDefault();
  const emailVal = email.value;
  if (!validate(emailVal)) {
    form.classList.add('error');
  } else {
    form.classList.remove('error');
    document.body.innerHTML = `<div style="display:flex; align-items: center; justify-content: center;"><h1>Thank you!</h1></div>`;
  }
});

function validate(email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  //var address = document.getElementById[email].value;
  if (reg.test(email) == false) {
    return (false);
  }
  return (true);
}
