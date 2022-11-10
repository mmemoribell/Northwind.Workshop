const selectDropdown = document.getElementById("select-dropdown");
const categoryDropdown = document.getElementById("category-dropdown");

    function loadCategoryDropdown() {
        // categoryDropdown.style.display = ;
        selectValue = selectDropdown.value;
        selectValue = categoryDropdown.value;

    fetch("http://localhost:8081/api/categories")
        .then((response) => response.json())
        .then((categories) => {
            console.log(categories);
            categories.forEach((category) => {
              let row = categoryTable.insertRow(-1);
              let cell1 = row.insertCell(0);
              let cell2 = row.insertCell(1);
              let cell3 = row.insertCell(2);
              cell1.innerText = category.categoryId;
              cell2.innerText = category.description;
              cell3.innerText = category.name;
              
              })
        })
    }
    window.onload = () => {
        selectDropdown.onchange = loadCategoryDropdown;
        loadCategoryDropdown();
    }