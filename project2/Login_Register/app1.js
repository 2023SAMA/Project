
document.addEventListener("DOMContentLoaded", function () {
  const login = document.getElementById("loginform");
  const register = document.getElementById("registerform");
  const forget = document.getElementById("forgetPasswordForm");
  const verify = document.getElementById("verifyCodeForm");
  const reset = document.getElementById("Resetform");
  let email = "";
  const formtype = localStorage.getItem("formtype");

  function safeGet(id) {
    const el = document.getElementById(id);
    if (!el) console.error(`Element with id '${id}' not found.`);
    return el;
  }

  if (formtype === "register") {
    if (login && register) showRegister();
  } else {
    if (login && register) showLogin();
  }

  // const showRegisterBtn = safeGet("showregister");
  // if (showRegisterBtn) showRegisterBtn.addEventListener("click", showRegister);
  const showRegisterBtn = document.getElementById("showregister");
if (showRegisterBtn) showRegisterBtn.addEventListener("click", showRegister);


  const showLoginBtn = safeGet("showlogin");
  if (showLoginBtn) showLoginBtn.addEventListener("click", showLogin);

  function showRegister() {
    if (login) login.classList.add("d-none");
    if (register) register.classList.remove("d-none");
    localStorage.setItem("formtype", "register");
  }

  function showLogin() {
    if (register) register.classList.add("d-none");
    if (login) login.classList.remove("d-none");
    localStorage.setItem("formtype", "login");
  }

  const forgetbtn = document.getElementById("forgetbtn");
  if (forgetbtn) {
    forgetbtn.addEventListener("click", function () {
      if (login) login.classList.add("d-none");
      if (register) register.classList.add("d-none");
      if (forget) forget.classList.remove("d-none");
      if (verify) verify.classList.add("d-none");
    });
  }

  const inputs = document.querySelectorAll("#loginform input, #registerform input");
  inputs.forEach((input, index) => {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const nextInput = inputs[index + 1];
        if (nextInput) nextInput.focus();
      }
    });
  });

  function showMessage(message) {
    const box = document.getElementById("messagebox");
    const overlay = document.getElementById("overlay");
    const messagebox = document.getElementById("messageText");
    const closebtn = document.getElementById("closemessage");

    if (messagebox) messagebox.textContent = message;
    if (overlay) overlay.classList.add("active");
    if (box) box.classList.remove("d-none");
    if (overlay) overlay.classList.remove("dnone");
    if (box) box.classList.remove("show-animate");
    if (box) void box.offsetWidth;
    if (box) box.classList.add("show-animate");

    if (closebtn) {
      closebtn.onclick = () => {
        if (box) box.classList.add("d-none");
        if (overlay) overlay.classList.remove("active");
        if (box) box.classList.remove("show-animate");
      };
    }

    setTimeout(() => {
      if (box) box.classList.add("d-none");
      if (overlay) overlay.classList.remove("active");
      if (box) box.classList.remove("show-animate");
    }, 6000);
  }

  const loginForm = document.getElementById("myform");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = loginForm.querySelector('input[type="email"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;

      if (!email || !password) {
        showMessage("Please fill in all fields.");
      } else if (!email.includes("@") || !email.includes(".")) {
        showMessage("Please enter a valid email");
      } else if (password.length < 8) {
        showMessage("Password must be at least 8 characters");
      } else {
        fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.token) {
              setTimeout(() => {
                window.location.href ="/home.html"
              }, 1500);
            } else {
              showMessage(data.message || "Login failed.");
            }
          })
          .catch((err) => {
            showMessage("Something went wrong: " + err.message);
          });
      }
    });
  }

  const regform = document.getElementById("form2");
  if (regform) {
    regform.addEventListener("submit", function (e) {
      e.preventDefault();
      const Name = regform.querySelector('input[name="name"]').value.trim();
      const Phone = regform.querySelector('input[name="phone"]').value.trim();
      const email = regform.querySelector('input[name="email"]').value.trim();
      const password = regform.querySelector('input[name="password"]').value;
      const confirmPassword = regform.querySelector('input[name="confirm_password"]').value;

      if (!email || !password || !Name || !Phone || !confirmPassword) {
        showMessage("Please fill in all fields.");
      } else if (!email.includes("@") || !email.includes(".")) {
        showMessage("Please enter a valid email");
      } else if (password.length < 8) {
        showMessage("Password must be at least 8 characters");
      } else if (password !== confirmPassword) {
        showMessage("Passwords don’t match");
      } else {
        fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: Name,
            email,
            password,
            phone: Phone,
            rePassword: confirmPassword,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "success") {
              setTimeout(() => {
                window.location.href ="/home.html"
                showLogin();
              }, 1000);
            } else {
              showMessage(data.errors?.msg || data.message || "Something went wrong");
            }
          })
          .catch((err) => {
            showMessage("ERROR:" + err.message || "Something went wrong");
            console.error(err);
          });
      }
    });
  }

  if (forget) {
    forget.addEventListener("submit", function (e) {
      e.preventDefault();
      email = forget.querySelector('input[type="email"]').value.trim();
      if (!email || !email.includes("@") || !email.includes(".")) {
        showMessage("Please enter a valid email");
        return;
      }
      localStorage.setItem("email", email);
      fetch("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.statusMsg === "success") {
            setTimeout(() => {
             document.getElementById("forgetform").classList.add("d-none")
             document.getElementById("CodeForm").classList.remove("d-none");
             document.getElementById("verifyCodeForm").classList.remove("d-none")
             console.log("verify:", verify)
             }, 2000);
            }
           else {
            showMessage(data.message || "Something went wrong");
          }
        })
        .catch((err) => {
          showMessage("ERROR: " + err.message || "Something went wrong");
        });
    });
  }

  if (verify) {
    verify.addEventListener("submit", function (e) {
      e.preventDefault();
      let email = localStorage.getItem("email");
      const code = verify.querySelector('input[name="resetcode"]').value;
      if (!code || isNaN(code)) {
        showMessage("Please enter a valid code");
        return;
      }
      console.log("resetCode being sent:", `"${code}"`);
      console.log("Email in localStorage during verify:", localStorage.getItem("email"));
      fetch("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resetCode: code }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "Success") {
            setTimeout(() => {
              const codeForm = document.getElementById("CodeForm");
              const resetPasswordCard = document.getElementById("resetPasswordCard");
              const resetForm = document.getElementById("Resetform");
              if (codeForm) codeForm.classList.add("d-none");
              if (resetPasswordCard) resetPasswordCard.classList.remove("d-none");
              if (resetForm) resetForm.classList.remove("d-none");
              console.log("Code sent:", code);
            }, 1500);
          } else {
            showMessage(data.message || "Invalid code");
          }
        })
        .catch((err) => {
          showMessage("ERROR:" + err.message || "Something went wrong");
        });
    });
  }

  if (reset) {
    reset.addEventListener("submit", function (e) {
      e.preventDefault();
      let email = localStorage.getItem("email");
      const newPassword = reset.querySelector('input[name="newpass"]').value.trim();
      const confirmPassword = reset.querySelector('input[name="Confirmnewpass"]').value.trim();

      if (!newPassword || newPassword.length < 6) {
        showMessage("Password must be at least 6 characters");
        return;
      }

      if (newPassword !== confirmPassword) {
        showMessage("Passwords do not match");
        return;
      }

      fetch("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          newPassword,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            setTimeout(() => {
              window.location.href = "login.html";
            }, 2000);
          } else {
            showMessage(data.message || "Something went wrong");
          }
        })
        .catch((err) => showMessage("Error: " + err.message));
    });
  }
  window.addEventListener("load", function () {
  const forgetbtn = document.getElementById("forgetbtn");
  console.log("Forget button loaded after page:", forgetbtn);
});

}); 




