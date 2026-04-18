export const menuCategories = [
  "Starter",
  "Main Course",
  "Bread",
  "Rice",
  "Sweets",
  "Beverages"
];

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isVegetarian: boolean;
  ingredients: string[];
  preparation: string;
  dietary: string[];
}

export const menuItems: MenuItem[] = [
  {
    id: "s1",
    name: "Paneer Tikka Masala",
    description: "Cubes of paneer marinated in spices and grilled in a tandoor.",
    price: 320,
    category: "Starter",
    image: "https://c.ndtvimg.com/2024-07/9fe2b05g_paneer-tikka_625x300_01_July_24.jpg",
    isVegetarian: true,
    ingredients: ["Paneer (Indian Cottage Cheese)", "Yogurt", "Kashmiri Red Chili", "Garam Masala", "Ginger", "Garlic", "Lemon Juice"],
    preparation: "The paneer is cut into cubes, marinated overnight in spiced yogurt, and then char-grilled in a traditional clay oven (tandoor) for a smoky flavor.",
    dietary: ["Gluten-Free", "Contains Dairy"]
  },
  {
    id: "s2",
    name: "Chicken 65",
    description: "Spicy, deep-fried chicken dish originating from Chennai, India.",
    price: 380,
    category: "Starter",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style-500x500.jpg",
    isVegetarian: false,
    ingredients: ["Boneless Chicken", "Curry Leaves", "Green Chilies", "Red Chili Powder", "Yogurt", "Rice Flour", "Cornstarch", "Garlic"],
    preparation: "Chicken pieces are coated in a spicy batter of rice flour and spices, deep-fried until incredibly crispy, and tempered with curry leaves and green chilies.",
    dietary: ["Dairy-Free Option Available", "High Protein"]
  },
  {
    id: "m1",
    name: "Butter Chicken",
    description: "Chicken cooked in a mildly spiced tomato sauce.",
    price: 450,
    category: "Main Course",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/chicken-butter-masala-recipe.jpg",
    isVegetarian: false,
    ingredients: ["Chicken Tikkas", "Tomatoes", "Butter", "Heavy Cream", "Cashews", "Kasuri Methi (Fenugreek Leaves)", "Honey"],
    preparation: "Tandoor-cooked chicken is simmered in a velvety, rich, and slightly sweet makhani (butter) sauce made from slow-cooked tomatoes, butter, and cream.",
    dietary: ["Contains Dairy", "Contains Nuts", "Gluten-Free"]
  },
  {
    id: "m2",
    name: "Palak Paneer",
    description: "Paneer in a thick paste made from puréed spinach.",
    price: 350,
    category: "Main Course",
    image: "https://seitansociety.com/wp-content/uploads/2021/10/PalakPaneer1280x903.jpg",
    isVegetarian: true,
    ingredients: ["Fresh Spinach", "Paneer", "Garlic", "Onions", "Tomatoes", "Garam Masala", "Cream"],
    preparation: "Fresh spinach leaves are blanched, puréed, and then cooked with minced garlic and onions. Soft paneer cubes are folded in, finished with a touch of cream.",
    dietary: ["Gluten-Free", "Contains Dairy", "High Iron"]
  },
  {
    id: "b1",
    name: "Garlic Naan",
    description: "Leavened flatbread topped with garlic and butter.",
    price: 60,
    category: "Bread",
    image: "https://zestfulkitchen.com/wp-content/uploads/2020/01/garlic-naan-cover_for-web.jpg",
    isVegetarian: true,
    ingredients: ["All-Purpose Flour", "Yeast", "Yogurt", "Milk", "Crushed Garlic", "Butter", "Fresh Cilantro"],
    preparation: "Dough is fermented, stretched into a teardrop shape, studded with fresh garlic and cilantro, and slapped against the hot inner wall of the tandoor.",
    dietary: ["Contains Gluten", "Contains Dairy"]
  },
  {
    id: "b2",
    name: "Tandoori Roti",
    description: "Traditional Indian flatbread made from wheat flour, baked in a tandoor.",
    price: 40,
    category: "Bread",
    image: "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/14423167232KIe8WnTzK_thumb.jpeg",
    isVegetarian: true,
    ingredients: ["Whole Wheat Flour", "Water", "Salt", "Ghee (Optional)"],
    preparation: "A simple unleavened whole wheat dough is mixed, rolled out gently, and baked directly on the tandoor walls for a crispy exterior and soft interior.",
    dietary: ["Contains Gluten", "Dairy-Free Option Available", "Vegan Option Available"]
  },
  {
    id: "r1",
    name: "Jeera Rice",
    description: "Cumin-flavored basmati rice.",
    price: 180,
    category: "Rice",
    image: "https://www.funfoodfrolic.com/wp-content/uploads/2022/11/Jeera-Rice-2.jpg",
    isVegetarian: true,
    ingredients: ["Long-Grain Basmati Rice", "Cumin Seeds (Jeera)", "Ghee", "Bay Leaf", "Cloves", "Salt"],
    preparation: "Premium aged basmati rice is washed, soaked, and cooked perfectly before being tossed in ghee tempered with roasted cumin seeds and whole mild spices.",
    dietary: ["Gluten-Free", "Vegan Option Available"]
  },
  {
    id: "r2",
    name: "Chicken Biryani",
    description: "Aromatic basmati rice cooked with marinated chicken and Indian spices.",
    price: 420,
    category: "Rice",
    image: "https://images.food52.com/VOfOuvcQe7fBeSqixNe1L-LhUBY=/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg",
    isVegetarian: false,
    ingredients: ["Basmati Rice", "Bone-in Chicken", "Yogurt", "Caramelized Onions", "Mint", "Coriander", "Saffron", "Biryani Masala"],
    preparation: "Layers of partially cooked fragrant rice and heavily spiced, yogurt-marinated chicken are sealed in a handi (pot) and slow-cooked over a low flame (Dum style).",
    dietary: ["Gluten-Free", "Contains Dairy"]
  },
  {
    id: "sw1",
    name: "Gulab Jamun",
    description: "Fried dough balls steeped in a sweet, sticky syrup.",
    price: 120,
    category: "Sweets",
    image: "https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=800&height=800",
    isVegetarian: true,
    ingredients: ["Khoya", "All-Purpose Flour", "Sugar", "Water", "Cardamom", "Rose Water", "Ghee for frying"],
    preparation: "Khoya is kneaded with a little flour into soft spheres, slowly deep-fried in ghee until golden brown, and then soaked in a warm rose and cardamom syrup.",
    dietary: ["Contains Dairy", "Contains Gluten"]
  },
  {
    id: "bev1",
    name: "Mango Lassi",
    description: "A creamy drink with mango, yogurt, milk, a little sugar, and a sprinkling of cardamom.",
    price: 150,
    category: "Beverages",
    image: "https://aroundtheyum.com/wp-content/uploads/2024/09/mango-lassi-recipe.jpg",
    isVegetarian: true,
    ingredients: ["Alphonso Mango Pulp", "Fresh Yogurt", "Milk", "Sugar", "Cardamom Powder", "Pistachio Garnish"],
    preparation: "Sweet, ripe Alphonso mangoes are blended with chilled, thick yogurt and milk. Infused with a hint of cardamom and served ice cold.",
    dietary: ["Contains Dairy", "Gluten-Free", "Contains Nuts (Garnish)"]
  }
];
