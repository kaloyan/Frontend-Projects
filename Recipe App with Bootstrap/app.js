// query selectors
const recipeForm = document.querySelector("#recipe-form");
const recipeContainer = document.querySelector("#recipe-container");
let recipes = [];

// functions

// event listeners
recipeForm.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const formData = new FormData(ev.currentTarget);

  const newRecipe = {
    id: Date.now(),
    name: formData.get("name"),
    method: formData.get("method"),
    roast: formData.get("roast"),
    grind: formData.get("grind"),
    ratio: formData.get("ratio"),
    note: formData.get("note"),
  };

  recipes.push(newRecipe);

  // clear form
  ev.currentTarget.reset();
});
