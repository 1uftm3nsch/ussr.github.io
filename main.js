function dangNhap() {
    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("date").value.trim();
    const cccd = document.getElementById("cccd").value.trim();
    const address = document.getElementById("address").value.trim();
    const message = document.getElementById("message");

    message.textContent = "";
    message.className = "message";

    if (!name || !dob || !cccd || !address) {
      message.textContent = "Fill out the log in page comrade";
      message.classList.add("error");
      return;
    }

    const cccdRegex = /^\d{12}$/;
    if (!cccdRegex.test(cccd)) {
      message.textContent = "Your ID must have 12 numbers and do not contain any characters";
      message.classList.add("error");
      return;
    }

    message.textContent = "Affirmative!";
    message.classList.add("success");

    setTimeout(() => {
        window.location.href = "survey.html"; 
    }, 1000);
}


function kiemTraNgaySinh() {
    const dobInput = document.getElementById("date");
    const message = document.getElementById("message");
    const dob = new Date(dobInput.value);
    const today = new Date();

    message.textContent = "";
    message.className = "message";

    if (!dobInput.value) return; 

    if (dob > today) {
      message.textContent = "You don't born in the future comrade";
      message.classList.add("error");
      dobInput.value = "";
      return;
    }

    const age = today.getFullYear() - dob.getFullYear();
    if (age < 16) {
      message.textContent = "Too young, you must be older than 16";
      message.classList.add("error");
      return;
    }

    message.textContent = "Affirmative";
    message.classList.add("success");
}
