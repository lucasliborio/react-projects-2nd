import { add } from "./alert-sum"
import './styles.css'

const main = document.querySelector('main')
const input = document.createElement('input')
const input2 = document.createElement('input')
const button = document.createElement('button')

button.innerHTML = 'submit'
button.addEventListener('click', () => {
  alert(add(input.value, input2.value))
})

main.appendChild(input)
main.appendChild(input2)
main.appendChild(button)


alert('okay')