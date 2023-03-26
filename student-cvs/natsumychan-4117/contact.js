const preventSubmit= document.getElementById("submit")
preventSubmit.addEventListener("submit", (event)=>{
 event.preventDefault()
 return alert("It works!!")
})
 
