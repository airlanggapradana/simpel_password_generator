let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

function generatePassword(len) {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";

  const data = lowerAlphabet + upperAlphabet + numeric;
  let generator = "";
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
}

function getPassword() {
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
  alert(
    "Password berhasil dibuat! silakan klik save password untuk mendownload"
  );
}

const savePassword = () => {
  saveButton.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," +
      encodeURIComponent(`password saya: ${password.value}`)
  );
  saveButton.setAttribute("download", "MyPasswordLOG.txt");
};
