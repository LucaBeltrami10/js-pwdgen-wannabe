const askName = "Inserisci il tuo nome";
const askSurname = "Inserisci il tuo cognome";
const askColor = "inserisci il tuo colore preferito";

let yourNewPassword



const selectedName = parseInt(prompt(askName))
const selectedSurname = parseInt(prompt(askSurname))
const selectedColor = parseInt(prompt(askColor))

yourNewPassword = selectedName + selectedSurname + selectedColor

document.getElementById('your-new-password').innerHTML = 'La tua nuova sicurissima password è' + yourNewPassword 