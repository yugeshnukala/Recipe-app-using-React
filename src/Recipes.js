import React from "react";
import style from "./recipe.module.css";

const Recipe = (props) => {
	return (
		<div className={style.recipe}>
			<h1>Title : {props.title}</h1>
			<h1>Calories : {props.calories}</h1>
			<ol>
				{props.ingredients.map(ingredient => (
					<li>{ingredient.text}</li>
				))}
			</ol>
			<img src={props.imageurl} alt="recipe" />
		</div>
		);
}

export default Recipe;