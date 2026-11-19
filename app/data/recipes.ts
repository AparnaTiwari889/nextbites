
export type Recipe = {
  id: number;
  title: string;
  cuisine: string;
  minutes: number;
  difficulty: string;
  description: string;
  image: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Creamy White Pasta",
    cuisine: "Italian",
    minutes: 25,
    difficulty: "Easy",
    description: "A delicious creamy pasta with garlic and herbs.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800"
  },
  {
    id: 2,
    title: "Fresh Garden Salad",
    cuisine: "Healthy",
    minutes: 15,
    difficulty: "Easy",
    description: "A refreshing salad with fresh vegetables.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800"
  },
  {
    id: 3,
    title: "Classic Pancakes",
    cuisine: "American",
    minutes: 20,
    difficulty: "Easy",
    description: "Soft and fluffy pancakes for breakfast.",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800"
  },
  {
    id: 4,
    title: "Veggie Buddha Bowl",
    cuisine: "Asian",
    minutes: 30,
    difficulty: "Medium",
    description: "A nutritious bowl packed with colorful vegetables.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800"
  },
  {
    id: 5,
    title: "Margherita Pizza",
    cuisine: "Italian",
    minutes: 35,
    difficulty: "Medium",
    description: "Classic pizza topped with tomato, mozzarella and basil.",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800"
  },
  {
    id: 6,
    title: "Chocolate Brownies",
    cuisine: "Dessert",
    minutes: 40,
    difficulty: "Easy",
    description: "Rich and fudgy chocolate brownies.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800"
  }
];
