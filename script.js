const regForm = document.querySelector("#registerForm");
if (regForm) {
  regForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("regUsername").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let password = document.getElementById("regPassword").value.trim();
    let confirmPassword = document.getElementById("regConfirmPassword").value.trim();

    if (!username || !email || !password || !confirmPassword) {
      alert("❌ Заполните все поля!");
      return;
    }

    if (!/^[a-zA-Zа-яА-Я0-9_]{3,20}$/.test(username)) {
      alert("❌ Имя пользователя должно быть от 3 до 20 символов и содержать только буквы, цифры или _");
      return;
    }

    if (!/^[\w-\.]+@[\w-]+\.[a-z]{2,}$/i.test(email)) {
      alert("❌ Введите корректный email!");
      return;
    }

    if (password.length < 6) {
      alert("❌ Пароль должен быть не меньше 6 символов!");
      return;
    }

    if (password !== confirmPassword) {
      alert("❌ Пароли не совпадают!");
      return;
    }

    alert("✅ Добро пожаловать, " + username + "!");
  });
}

const loginForm = document.querySelector("#loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("loginUsername").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    if (!username || !password) {
      alert("❌ Заполните все поля!");
      return;
    }

    if (password.length < 6) {
      alert("❌ Пароль должен быть не меньше 6 символов!");
      return;
    }

    alert("✅ Вход выполнен, " + username + "!");
  });
}
