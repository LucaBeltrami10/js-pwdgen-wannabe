const askName = "Inserisci il tuo nome";
const askSurname = "Inserisci il tuo cognome";
const askColor = "inserisci il tuo colore preferito";

let yourNewPassword



const selectedName = prompt(askName)
const selectedSurname = prompt(askSurname)
const selectedColor = prompt(askColor)

console.log(selectedName)
console.log(selectedSurname)
console.log(selectedColor)

yourNewPassword = selectedName + selectedSurname + selectedColor

document.getElementById('your-new-password').innerHTML = 'La tua nuova sicurissima password è: ' + yourNewPassword 