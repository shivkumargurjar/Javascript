const buttons = document.querySelectorAll('.colors');
const body = document.body;
buttons.forEach(function(button) {
  button.addEventListener('click', function () {
    document.body.style.backgroundColor = this.id;
  });
});
