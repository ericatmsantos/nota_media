let students = [
  {
    name: "Érica",
    grade1: 9,
    grade2:8
  },
  {
    name: "Laís",
    grade1: 8,
    grade2:10
  },
  {
    name: "João",
    grade1: 6,
    grade2:5
  },
  {
    name: "Tiago",
    grade1: 5,
    grade2:4
  },
]

for (i = 0; i < 4; i++) {

let firstGrade = (students[i].grade1);
let secondGrade = (students[i].grade2);
let result;

function Media (grade1, grade2) {
  return ((firstGrade + secondGrade) / 2).toFixed(2)
}

result = Media (students[i].grade1, students[i].grade2);


if (result < 7) {
  alert (`A média do(a) aluno(a) ${students[i].name} foi de: ${result}.\nNão foi dessa vez, ${students[i].name}! Tente novamente!`)
}
else{
  alert (`A média do(a) aluno(a) ${students[i].name} foi de: ${result}.\nParabéns ${students[i].name}! Você foi aprovado(a)no concurso!`)
}


}