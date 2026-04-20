import React from "react";
import "../styles/Main.css";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientsList from "./IngredientsList.jsx";
import { getRecipeFromChefClaude } from "../ai.js";

export default function () {
	const [ingredients, setIngredients] = React.useState([]);
	const [recipe, setRecipe] = React.useState("");

	async function getRecipe() {
		const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
		setRecipe(recipeMarkdown);
	}

	function addIngredient(formData) {
		const newIngredient = formData.get("ingredient");
		setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
	}

	return (
		<>
			<main className="main-container">
				<form action={addIngredient} className="ingredients-form">
					<input
						className="ingredients-input"
						type="text"
						placeholder="e.g. oregano"
						aria-label="Add ingredient"
						name="ingredient"
					/>
					<button className="add-ingredients btn">+ Add ingredients</button>
				</form>
				{ingredients.length > 0 && (
					<IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
				)}

				{recipe && <ClaudeRecipe recipe={recipe} />}
			</main>
		</>
	);
}
