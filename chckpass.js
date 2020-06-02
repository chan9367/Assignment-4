function checkInputValue() {
  //check if input value matches the password 12345678
  var passwordVal = document.getElementById("pass").value;
  const defaultPass = "123456678";

  if (passwordVal == defaultPass) return "Success!";

  return "Wrong Pass!";
}
