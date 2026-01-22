function filterGames(category) {
  const allCards = document.querySelectorAll("[data-category]");

  allCards.forEach((card) => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}


//Copied code ( I am lazy to type atp)
function updateAllCounts() {
    const allCards = document.querySelectorAll('[data-category]');
    const dataFilter = document.querySelectorAll('[data-filters]');
    
    dataFilter.forEach(button => {
        const category = button.dataset.filters;
        
        if (category === 'all') {
            button.textContent = `All Games (${allCards.length})`;
        } else {
            const count = updateCount(category);
            button.textContent = `${category} (${count})`;
        }
    });
}


function updateCount(cat) {
  //Cards importing into nodelist
  const allCards = document.querySelectorAll("[data-category]");
  //const allFilters = document.querySelectorAll("[data-filters]");
  let count = 0;
  // const categories = [];

  // allFilters.forEach((btn) => {
  //     categories.push(btn.dataset.filters);
  // });

  const allCategories = [];

  allCards.forEach((card) => {
    allCategories.push(card.dataset.category);
  });

  allCategories.forEach((element) => {
    if (element === cat) {
      count++;
    }
  });
  // const count = [];

  // categories.forEach((category) => {
  //     //
  //     allCategories.forEach((elements)=> {
  //         if(category === elements){
  //             //
  //         }
  //     });
  // });

  return count;
}

document.addEventListener("DOMContentLoaded", () => {
  //
  updateAllCounts();
  const dataFilter = document.querySelectorAll("[data-filters]");
  let btnCnt = 0;
  dataFilter.forEach((button) => {
    button.addEventListener("click", () => {
      category = button.dataset.filters;
      filterGames(category);

      btnCnt = updateCount(category);
      const allCards = document.querySelectorAll("[data-category]");
      if (category === "all") {
        button.textContent = `All Games (${allCards.length})`;
      } else {
        button.textContent = `${category} (${btnCnt})`;
      }
      //button.textContent = `${category} (${btnCnt})`;

      dataFilter.forEach((btn) => {
        btn.classList.remove("bg-purple-600", "text-white");
        btn.classList.add("bg-gray-200", "text-gray-700");
      });

      button.classList.remove("bg-grey-200", "text-gray-700");
      button.classList.add("bg-purple-600", "text-white");
    });
  });
});
