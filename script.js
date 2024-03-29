const formular = document.querySelector("#registrace")

formular.addEventListener("submit", (event) => {
    event.preventDefault()
    const email = document.querySelector("#email")
    formular.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email.value}.`
})

const emailOvereni = document.querySelector("#email")

emailOvereni.addEventListener ("input", (event) => {
    if (event.target.value.length === 0 || !event.target.value.includes("@")) {
        emailOvereni.classList.add("cervenyRamecek")
    }
    else {
        emailOvereni.classList.remove("cervenyRamecek")
    }
})