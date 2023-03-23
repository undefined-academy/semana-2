const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const phone = form.elements["phone"].value;
  const typeOfWork = form.elements["type-of-work"].value;
  const callTime = form.elements["call-time"].value;
  const description = form.elements["description"].value;
  console.log(name, email, phone, typeOfWork, callTime, description);
});
