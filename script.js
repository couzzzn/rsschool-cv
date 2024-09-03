function myFunction() {
    document.getElementById("dropdown-list").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.drop-button')) {
      var myDropdown = document.getElementById("dropdown-list");
        if (myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
    }
  }