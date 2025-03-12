document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("quizz-form");
    const messageDiv = document.getElementById("message");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      let allAnswered = true;
      messageDiv.innerHTML = "";
  
      const oldWarnings = form.querySelectorAll(".warning-message");
      oldWarnings.forEach(w => w.remove());
  
      const questions = form.querySelectorAll(".question");
  
      questions.forEach((question) => {
        const inputs = question.querySelectorAll("input, textarea");
        let isAnswered = false;
  
        if (inputs.length > 0) {
          const firstInput = inputs[0];
  
          if (firstInput.type === "radio" || firstInput.type === "checkbox") {

            const name = firstInput.name;
            const group = form.querySelectorAll(`input[name="${name}"]`);
            isAnswered = Array.from(group).some(i => i.checked);
          } else {
            isAnswered = Array.from(inputs).some(i => i.value.trim() !== "");
          }
        }
        if (!isAnswered) {
          allAnswered = false;
          const warning = document.createElement("div");
          warning.classList.add("warning-message");
          warning.style.color = "red";
          warning.style.fontSize = "0.9em";
          question.appendChild(warning);
        }
      });
  
      if (!allAnswered) {
        messageDiv.innerHTML = `<div class="alert alert-danger">NEIN NEIN NEIN, PLS fill all the question.</div>`;
        return;
      }
  
      messageDiv.innerHTML = `<div class="alert alert-success">Good Comrade, for the Motherland</div>`;
    });
  });
  