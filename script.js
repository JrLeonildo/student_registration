//const fullName = document.querySelector("#fullName");
//const age = document.querySelector("#age");
//const firstNote = document.querySelector("#firstNome");
//const secondNote = document.querySelector("#secondNote");
//const btnRegister = document.querySelector("#btnRegister");

class student {
  fullName;
  age;
  firstNote;
  secondNote;
}

function studentCode(code) {
  for (let i = 0; i < 100; i++) {
    const sCode = code+i;
    return sCode;
  }
}
function createAluno(name, age, noteOne, noteTwo) {
  const code = studentCode("aluno");
  const fullCode = 0+code;
  console.log(fullCode);
}


//btnRegister.addEventListener("click", () => {});