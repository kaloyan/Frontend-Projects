// query selectors
const recipeForm = document.querySelector("#recipe-form");
const recipeContainer = document.querySelector("#recipe-container");
let recipes = [];

// functions
function displayRecipes() {
  const output = recipes.map((item) => {
    return `
    <div className="col">
    <div class="card mb-4 rounded-3 shadow-sm border-primary">
      <div class="card-header py-3 text-white bg-primary border-primary">
        <h4 class="my-0">${item.name}</h4>
      </div>
  
      <div class="card-body">
        <ul class="text-start">
          <li><strong>Method: </strong>${item.method}</li>
          <li><strong>Roast: </strong>${item.roast}</li>
          <li><strong>Grind size: </strong>${item.grind}</li>
          <li><strong>Ratio: </strong>${item.ratio}</li>
          ${item.note ? `<li><strong>Note: </strong>${item.note}</li>` : ""}
        </ul>
  
        <button class="btn btn-lg btn-outline-danger" value="${
          item.id
        }">Delete</button>
      </div>
    </div>
  </div>`;
  });

  const result = output.join("");
  recipeContainer.innerHTML = result;
}

function saveRecipes() {
  localStorage.setItem("recipes", JSON.stringify(recipes));
}

function loadRecipes() {
  const result = localStorage.getItem("recipes");

  if (result) {
    recipes = JSON.parse(result);
  } else {
    recipes = [];
  }
}

// event listeners
recipeForm.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const formData = new FormData(ev.currentTarget);

  const newRecipe = {
    id: Date.now(),
    name: DOMPurify.sanitize(formData.get("name")),
    method: DOMPurify.sanitize(formData.get("method")),
    roast: DOMPurify.sanitize(formData.get("roast")),
    grind: DOMPurify.sanitize(formData.get("grind")),
    ratio: DOMPurify.sanitize(formData.get("ratio")),
    note: DOMPurify.sanitize(formData.get("note")),
  };

  recipes.push(newRecipe);

  // clear form
  ev.currentTarget.reset();

  saveRecipes();
  displayRecipes();
});

loadRecipes();
displayRecipes();
