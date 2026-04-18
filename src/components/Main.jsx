import "../styles/Main.css";
import React from "react";

export default function () {
	const [ingredients, setIngredients] = React.useState([]);
	const ingredientsListItems = ingredients.map((ingredient) => (
		<li key={ingredient}>{ingredient}</li>
	));

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
				<ul className="ingredients-list">{ingredientsListItems}</ul>
			</main>
		</>
	);
}
