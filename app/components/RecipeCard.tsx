
import { Recipe } from "../data/recipes";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({
  recipe,
}: RecipeCardProps) {
  return (
    <article className="recipe-card">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="recipe-image"
      />

      <div className="recipe-content">
        <span className="recipe-cuisine">
          {recipe.cuisine}
        </span>

        <h2>{recipe.title}</h2>

        <p>{recipe.description}</p>

        <div className="recipe-details">
          <span>⏱ {recipe.minutes} mins</span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </article>
  );
}
