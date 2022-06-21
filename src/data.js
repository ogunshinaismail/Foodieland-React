const recipes = [
    {
        id: 1,
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        img: "img/cheeseburger.png",
        prepTime: 15,
        cookingTime: 15,
        type: "Snack",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },

    {
        id: 2,
        name: "Fresh Lime Roasted Salmon with Ginger Sauce",
        img: "img/salmon.png",
        prepTime: 15,
        cookingTime: 30,
        type: "Fish",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },

    {
        id: 3,
        name: "Strawberry Oatmeal Pancake with Honey Syrup",
        img: "img/pancake.png",
        prepTime: 15,
        cookingTime: 30,
        type: "Breakfast",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },

    {
        id: 4,
        name: "Fresh and Healthy Mixed Mayonnaise Salad",
        img: "img/salad.png",
        prepTime: 15,
        cookingTime: 30,
        type: "Healthy",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },

    {
        id: 5,
        name: "Chicken Meatballs with Cream Cheese",
        img: "img/meatball.png",
        prepTime: 15,
        cookingTime: 30,
        type: "Meat",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },

    {
        id: 6,
        name: "Fruity Pancake with Orange & Blueberry",
        img: "img/fruity-pancake.png",
        prepTime: 15,
        cookingTime: 30,
        type: "Sweet",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },

    {
        id: 7,
        name: "The Best Easy One Pot Chicken and Rice",
        img: "img/pot-chicken.png",
        prepTime: 15,
        cookingTime: 30,
        type: "Snack",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },

    {
        id: 8,
        name: "The Creamiest Creamy Chicken and Bacon Pasta",
        img: "img/bacon-pasta.png",
        prepTime: 15,
        cookingTime: 15,
        type: "Noodles",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },

    {
        id: 9,
        name: "Bif and Juicy Wagyu Beef Cheeseburger",
        img: "img/cheeseburger.png",
        prepTime: 15,
        cookingTime: 15,
        type: "snack",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },

    {
        id: 10,
        name: "Bih and Juicy Wagyu Beef Cheeseburger",
        img: "img/cheeseburger.png",
        prepTime: 15,
        cookingTime: 15,
        type: "snack",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },
]

export function getRecipes() {
    return recipes;
}