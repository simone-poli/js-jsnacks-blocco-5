const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
const student = students.find((singleStud) => {
  if (singleStud.id === 2){
    return true
  }
})
console.log(student)
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }