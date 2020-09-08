import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
	// state = { ingredients: { salad: 1, bacon: 1, cheese: 2, meat: 2 } };

	let ingredientKeys = Object.keys(props.ingredients);
	//[salad, bacon, cheese, meat]

	//Returns array of arrays of jxs objects with a string type and key
	let transformedIngredients = ingredientKeys
		.map((igKey) => {
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				return <BurgerIngredient key={igKey + i} type={igKey} />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);

	//console.log(transformedIngredients[1][0]); <BurgerIngredient key='bacon0' type='bacon' />
	//console.log(transformedIngredients[3][1]); <BurgerIngredient key='meat1' type='meat' />
	//console.log(transformedIngredients[3][0]); <BurgerIngredient key='meat0' type='meat' />

	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please start adding ingredients!</p>;
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default burger;
