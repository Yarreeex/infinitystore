document.addEventListener('DOMContentLoaded', function() {
    var username = localStorage.getItem('username');
    var displayUsername = document.getElementById('display-username');
    if (username) {
      displayUsername.textContent = username;
    }

    var email = localStorage.getItem('email');
    var displayEmail = document.getElementById('display-email')
    if (email) {
      displayEmail.textContent = email;
    }
  });

  // Mendapatkan elemen dengan ID "bio"
var bioElement = document.getElementById('bio');

// Mendeteksi perubahan pada elemen "bio"
bioElement.addEventListener('input', function() {
  // Mendapatkan nilai bio yang diedit
  var editedBio = bioElement.innerText;

  // Simpan bio yang diedit ke localStorage
  localStorage.setItem('editedBio', editedBio);
});

// Memeriksa apakah ada bio yang sudah disimpan sebelumnya
var savedBio = localStorage.getItem('editedBio');

// Mengisi nilai bio dengan bio yang sudah disimpan sebelumnya (jika ada)
if (savedBio) {
  bioElement.innerText = savedBio;
}


  // Mendapatkan elemen dengan ID "skill"
  var skillElement = document.getElementById('skill');

  // Mendeteksi perubahan pada elemen "skill"
  skillElement.addEventListener('input', function() {
    // Mendapatkan nilai skill yang diedit
    var editedSkill = skillElement.innerText;
  
    // Simpan skill yang diedit ke localStorage
    localStorage.setItem('editedSkill', editedSkill);
  });
  
  // Memeriksa apakah ada skill yang sudah disimpan sebelumnya
  var savedSkill = localStorage.getItem('editedSkill');
  
  // Mengisi nilai skill dengan skill yang sudah disimpan sebelumnya (jika ada)
  if (savedSkill) {
    skillElement.innerText = savedSkill;
  }

  