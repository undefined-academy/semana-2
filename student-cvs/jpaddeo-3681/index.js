document
  .querySelector("button[type='submit']")
  .addEventListener('click', function (e) {
    e.preventDefault();
    alert('clicked');
  });
