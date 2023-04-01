//exercise-loop-1

for (let i = 1; i <= 100; i++) {
  document.getElementById("task1").innerHTML += `<h4>User ke-${i}</h4>`;
}

//exercise-loop-2
for (let i = 0; i <= 10; i += 2) {
  document.getElementById("task2").innerHTML += `<h4>Nilai = ${i}</h4>`;
}

//exercise-loop-3
for (let i = 0; i <= 20; i++) {
  document.getElementById("task3").innerHTML += `<h4>${i} - ${
    i % 2 == 0 ? "Genap" : "Ganjil"
  }</h4> `;
}

//exercise-loop-4
const confirmPopUp = () => {
  let conditions = true;
  const question = "Apakah Anda mau mengulang ?";
  let result = 0;
  while (conditions) {
    confirm(question)
      ? result++
      : ((conditions = false),
        alert(`Perulangan sudah dilakukan sebanyak-${result}`));
  }
};

//exercise-loop-5
const quizPopUp = () => {
  let checker = false;
  while (!checker) {
    let answerForm = prompt("Sebutkan kepanjangan dari nama IB ?");
    if (answerForm == "impact byte") {
      (checker = true) && alert("Selamat jawaban kamu sudah benar");
    } else {
      checker = false;
    }
  }
};
