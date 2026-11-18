
import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="hero-label">WELCOME TO NEXTBITES</p>

        <h1>
          Discover Your Next
          <span> Favourite Meal.</span>
        </h1>

        <p className="hero-description">
          Explore delicious recipes, discover new flavours,
          and make every meal special.
        </p>

        <a href="#recipes" className="hero-button">
          Explore Recipes ↓
        </a>
      </section>

      <section className="recipes-section" id="recipes">
        <div className="section-heading">
          <div>
            <p className="section-label">OUR COLLECTION</p>
            <h2>Popular Recipes</h2>
          </div>

          <p>Simple ingredients. Amazing flavours.</p>
        </div>

        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
