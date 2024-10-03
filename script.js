//user's data
const formData = {
    firstName: null,
    lastName: null,
    email: null,
}

first_name.addEventlistener("input",(e) => {
    //console.log(e.target.value)
    formData.firstName = e.target.value
    console.log(formData)
})

last_name.addEventlistener("input",(e) => {
    //console.log(e.target.value)
    formData.lastName = e.target.value
    console.log(formData)
})


email.addEventlistener("input", (e) => {
    //console.log(e.target.value)
    formData.email = e.target.value
    console.log(formData)
})

console.log(formData);

mon_form.addEventlistener("submit", (e) => {
    e.preventDefault()
    console.log(formData);
    
})
// ajouter une validation (signalant une erreur à l'utilisateur)

if(!formData.firstName) {
    alert("Erreur")
    error_name.style.display = "block!!!"
}