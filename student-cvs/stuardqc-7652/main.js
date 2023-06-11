const typed = new Typed('.typing', {
  strings: ["Hello, I'm Stuard.", 'Nice to meet you!'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
})

const form = document.querySelector('.form__contact')
form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
  e.preventDefault()
  const formData = new FormData(e.target)
  const formObject = Object.fromEntries(formData)
  console.log(formObject)
}
