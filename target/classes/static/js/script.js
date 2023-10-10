const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    alert(`Você pesquisou por: ${searchTerm}`);

    window.onload = function () {
        const sidebar = document.querySelector(".sidebar");
        const closeBtn = document.querySelector("#btn");
        const searchBtn = document.querySelector(".bx-search");
      
        closeBtn.addEventListener("click", function () {
          sidebar.classList.toggle("open");
          menuBtnChange();
        });
      
        searchBtn.addEventListener("click", function () {
          sidebar.classList.toggle("open");
          menuBtnChange();
        });
      
        function menuBtnChange() {
          if (sidebar.classList.contains("open")) {
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
          } else {
            closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
          }
        }
      };
      
});
