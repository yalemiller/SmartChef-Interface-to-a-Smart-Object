import React, { createContext, useContext, useState } from 'react';

/*
Menu Context
Holds context data for context API and the function needs to use them
This component is ai generated using chatgpt except for the  initialMenuItem data. 
*/

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const initialMenuItems = [
        {
          image: 'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2023/09/Air-Fried-Beef-and-Broccoli-1-e1694611385475.jpg?x39145',
          name: 'Airfryer Beef and Broccoli',
          description: "Say goodbye to your take-out menus – this air fried beef and broccoli is so easy you’ll never stop making it! We simplify the recipe by adding all of the ingredients to the basket at once, making it quick,simple, and ready to eat in under 30 minutes.",
          time: '30 Minutes',
          buttonName: 'Get Cooking',
          appliances: ['Air Fryer'],
          ingredients: [
            "1 ½ lb flank steak",
            "3 tbsp cornstarch",
            "1 inch ginger minced",
            "2 garlic cloves minced",
            "2 broccoli crowns",
            "6 tbsp soy sauce divided",
            "2 tbsp brown sugar",
            "1 tsp sesame oil",
            "1 tbsp olive oil",
            "Sesame Seeds for serving",
            "Salt as needed",
            "Organic olive oil cooking spray"
          ],
          stepNum: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7"],
          stepTime: ["2 Minutes", "3 Minutes", "1 Minute", "2 Minutes", "15 Minutes", "5 Minutes", "2 Minutes"],
          stepInc:[
            "Slice the flank steak into thin strips about 2 inches long, making sure to cut the steak against the grain.",
            "Add all the flank steak strips into a large mixing bowl and toss with the cornstarch. Add the minced ginger, minced garlic, and half of the soy sauce. Mix thoroughly until all the pieces are covered.",
            "Remove the thick stalks from the broccoli crowns and cut the broccoli florets into bite-sized pieces. Add to a small mixing bowl and toss with the olive oil and a sprinkle of salt.",
            "Place the beef mixture on one side of the air fryer basket. Pile the broccoli on the other side of the air fryer basket. Spray the tops of everything with cooking spray.",
            "Air Fry at 385°F / 195°C for 15 Minutes, tossing the beef and then broccoli separately after 7 Minutes. The beef should be golden and crispy on the edges, and the broccoli will darken in color.",
            "While the beef and broccoli are cooking, prepare the sauce. Combine the remaining soy sauce, brown sugar, and sesame oil together.",
            "Serve in individual portions and garnish with sesame seeds."
          ],
        checkPoint: [false, true, false, false, true, true, false],
        centerText: ["", "How Spicy?", "", "", "Is it done?", "How Sweet?", ""],
        buttonFormat: [
            [["",""],["",""],["",""]],
            [["Plain","red"],["Mild","red"],["Spicy","red"]],
            [["",""],["",""],["",""]],
            [["",""],["",""],["",""]],
            [["Still soft","red"],["Golden","blue"],["Blacked","red"]],
            [["Plain","red"],["Sweet","red"],["Very Sweet","red"]],
            [["",""],["",""],["",""]],
            ],
        checkText: [
            "", 
            "How spicy do you want your food?",
            "", 
            "", 
            "Let's check if the food is done. Take a look at the edges of the beef.",
            "How sweet would you like the sauce?",
            ""
            ],
        checkAnswers: [
            ["", "", ""],
            ["", "Add chili pepper flakes", "Add hot sauce directly to the beef"],
            ["", "", ""],
            ["", "", ""],
            ["Let it continue to cook then check again in 2 minutes", "", "The meat has overcooked. Take it out and slice it into thinner slices."],
            ["", "Mix in a table spoon of brown sugar", "Mix in 3 table spoons of brown sugar"],
            ["Add one splash of vinegar", "", "Add a dash of lemon juice"]],
        },

        {
            image: 'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2023/09/Smash-e1694456210917.jpg?x39145',
            name: 'The Perfect Basic Burger',
            description: "These burger patties are made with ground beef and an easy bread crumb mixture. Nothing beats a simple hamburger on a warm summer evening. Pile these burgers with your favorite condiments and pop open a cool drink!",
            time: '20 Minutes',
            buttonName: 'Get Cooking',
            appliances: ['Grill'],
            ingredients: [
                "1 large egg",
                "½ teaspoon salt",
                "½ teaspoon ground black pepper",
                "1 pound ground beef",
                "½ cup fine dry bread crumbs"
            ],
            stepNum: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6",],
            stepTime: ["3 Minutes", "3 Minutes", "3 Minutes", "2 Minutes", "8 Minutes", "1 Minute",],
            stepInc:[
                "Preheat an outdoor grill for high heat and lightly oil grate.",
                "Whisk together egg, salt, and pepper in a medium bowl.",
                "Add ground beef and bread crumbs and mix with your hands or a fork until well blended.",
                "Form into four 3/4-inch-thick patties.",
                "Place patties on the preheated grill. Cover and cook 6 to 8 minutes per side, or to desired doneness. An instant-read thermometer inserted into the center should read at least 160 degrees F (70 degrees C).",
                "Serve hot and enjoy!"
            ],
          checkPoint: [false, false, true, true, false, false,],
          centerText: ["", "", "Vegetarian?", "No Grill?", "", ""],
          buttonFormat: [
              [["",""],["",""],["",""]],
              [["",""],["",""],["",""]],
              [["No","Blue"],["",""],["Yes","Green"]],
              [["Stovetop","Blue"],["",""],["Oven","Blue"]],
              [["",""],["",""],["",""]],
              [["",""],["",""],["",""]],
              ],
          checkText: [
              "", 
              "", 
              "Want to swap out for a veggie burger?",
              "If you don't have a grill don't worry. What do you have?",
              "", 
              "",
              ],
          checkAnswers: [
              ["", "", ""],
              ["", "", ""],
              ["", "", "Add 1 1/2 cups of cooked and mashed black beans, chickpeas, or lentils (or use a store-bought meatless ground beef substitute)"],
              ["Heat a frying pan over medium heat and cook.", "", "Preheat the oven to 375 then place the patties on a baking sheet lined with parchment paper. Bake for 15 minutes."],
              ["", "", ""],
              ["", "", ""],
          ]
          },

          {
            image: 'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2023/08/Chicken-Lo-Mein-e1693406490676.jpg?x39145',
            name: 'Super Easy Chicken Lo Mein',
            description: "These burger patties are made with ground beef and an easy bread crumb mixture. Nothing beats a simple hamburger on a warm summer evening. Pile these burgers with your favorite condiments and pop open a cool drink!",
            time: '20 Minutes',
            buttonName: 'Get Cooking',
            appliances: ['Rice Cooker', 'Instapot'],
            ingredients: [
                "2 tbsp vegetable oil",
                "1 tsp sesame oil",
                "4 garlic cloves minced",
                "1 inch ginger deskinned and minced",
                "4 chicken thighs diced",
                "1 tsp salt",
                "10 oz. Chinese lo mein noodles",
                "1 ½ cups chicken broth",
                "3 cups broccoli cut into florets",
                "¼ cup rice wine vinegar",
                "3 tbsp cornstarch",
            ],
            stepNum: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6",],
            stepTime: ["3 Minutes", "3 Minutes", "3 Minutes", "2 Minutes", "8 Minutes", "1 Minute",],
            stepInc:[
                "Preheat the inner pot on Saute, High/More for 15 Minutes.",
                "Add the vegetable oil, sesame oil, garlic, ginger, chicken thighs, and salt. Sauté until the chicken is browned and fragrant, about 10 minutes.",
                "Press Cancel. Place the noodles on top of the sauteed chicken. Top with chicken broth and toss the noodles to coat.",
                "Top with broccoli, bell peppers, shredded carrots, and snow peas. Pressure Cook on High for 2 Minutes, immediately releasing pressure once complete.",
                "Meanwhile, in a small bowl stir together the soy sauce, rice wine vinegar, and cornstarch, making sure no clumps exist.",
                "Press Saute, High/More for 5 Minutes. Pour the sauce into the pot and stir to combine until slightly thickened, about 3-5 minutes.",
                "Serve in bowls with sesame seeds. Enjoy!"
            ],
            
          checkPoint: [false, false, false, false, false, false,],
          centerText: ["", "", "", "", "", ""],
          buttonFormat: [
              [["",""],["",""],["",""]],
              [["",""],["",""],["",""]],
              [["",""],["",""],["",""]],
              [["",""],["",""],["",""]],
              [["",""],["",""],["",""]],
              [["",""],["",""],["",""]],
              ],
          checkText: [
              "", 
              "", 
              "",
              "",
              "", 
              "",
              ],
          checkAnswers: [
              ["", "", ""],
              ["", "", ""],
              ["", "", ""],
              ["", "", ""],
              ["", "", ""],
              ["", "", ""],
          ]
          },

          {
            image: 'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2023/08/Chicken-Fingers-With-Honey-Mustard-Sauce-e1693429970187.jpg?x39145',
            name: 'Chicken Fingers With Honey-Mustard',
            description: "Oven Crispylicious Chicken Fingers With Honey-Mustard Sauce This recipe is also possible to make in any other appliance with Air Fryer function",
            time: '38 Minutes',
            buttonName: 'Get Cooking',
            appliances: ['Oven'],
            ingredients: [
                "1½ lb boneless skinless chicken breast thickly sliced",
                "3 eggs",
                "2½ cup panko breadcrumbs",
                "2 cups all-purpose flour",
                "1 tsp paprika",
                "1 tsp garlic powder",
                "3 tsp salt",
                "3 tbsp mayonnaise",
                "3 tbsp Dijon mustard",
                "2 tbsp honey",
                "½ tbsp lemon juice",
                "1 Pinch salt",
                "1 pinch black pepper",
            ],
            stepNum: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7"],
            stepTime: ["3 Minutes", "5 Minutes", "3 Minutes", "2 Minutes", "8 Minutes", "15 Minute", "1 Minute"],
            stepInc:[
                "Beat eggs lightly in a bowl.",
  "Place panko breadcrumbs in a separate bowl.",
  "In a third bowl, mix paprika, garlic powder, salt, and flour.",
  "Coat chicken strips in flour first. Dip into beaten eggs, and then into the panko. Generously spray with olive oil.",
  "Spray the bottom of the air fry basket with cooking oil. Lay out the chicken fingers in the air fry basket.",
  "Select Air Fry, set the temperature to 400°F / 205°C, and set the time to 15 Minutes. Turn chicken halfway and coat with more olive oil spray. Repeat with remaining chicken strips as necessary.",
  "Prepare the honey mustard sauce by mixing all the ingredients for the sauce in a small bowl. Serve with chicken fingers."
            ],
            
          checkPoint: [false, false, false, false, false, false,],
          centerText: ["", "", "", "", "", ""],
          buttonFormat: [
              [["",""],["",""],["",""]],
              [["",""],["",""],["",""]],
              [["",""],["",""],["",""]],
              [["",""],["",""],["",""]],
              [["",""],["",""],["",""]],
              [["",""],["",""],["",""]],
              ],
          checkText: [
              "", 
              "", 
              "",
              "",
              "", 
              "",
              ],
          checkAnswers: [
              ["", "", ""],
              ["", "", ""],
              ["", "", ""],
              ["", "", ""],
              ["", "", ""],
              ["", "", ""],
          ]
          },

          {
            image: 'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2023/08/Bacon-Lettuce-Tomato-BLT-Sandwiches-e1693404251696.jpg?x39145',
            name: 'Bacon, Lettuce, Tomato (BLT) Sandwiches',
            description: "There is something so satisfying about a classic BLT sandwich. We used in-season heirloom tomatoes for the most flavor-packed bite, but feel free to switch up to any tomatoes you find in the supermarket or store.",
            time: '10 Minutes',
            buttonName: 'Get Cooking',
            appliances: ['Stove-top'],
            ingredients: [
                "8 slices sourdough bread",
                "12 slices bacon",
                "1 large heirloom tomato cut into slices",
                "¼ cup mayonnaise",
                "8 Romaine lettuce leaves torn into pieces",
                "Organic olive oil spray as needed"
            ],
            stepNum: ["Step 1", "Step 2", "Step 3",],
            stepTime: ["3 Minutes", "3 Minutes", "3 Minutes"],
            stepInc:[
                "Lay the bacon strips evenly along the air fryer basket. Air Fry at 350°F / 175°C for 10-12 Minutes, or until crispy. Set aside.",
  "Spray the bread with olive oil evenly on both sides. Place the bread in the air fryer basket without overlapping. Air Fry at 400°F / 205°C for 3-5 Minutes, or until crispy, making sure to turn the toast halfway.",
  "Spread some mayonnaise on two slices of bread. Top one slice with three slices of bacon, a few slices of tomato, and torn lettuce leaves. Top with the second piece of bread, mayonnaise side down. Enjoy!"
            ],
            
          checkPoint: [false, false, false, false, false, false,],
          centerText: ["", "", "", "", "", ""],
          buttonFormat: [
              [["",""],["",""],["",""]],
              [["",""],["",""],["",""]],
              [["",""],["",""],["",""]],
              [["",""],["",""],["",""]],
              [["",""],["",""],["",""]],
              [["",""],["",""],["",""]],
              ],
          checkText: [
              "", 
              "", 
              "",
              "",
              "", 
              "",
              ],
          checkAnswers: [
              ["", "", ""],
              ["", "", ""],
              ["", "", ""],
              ["", "", ""],
              ["", "", ""],
              ["", "", ""],
          ]
          },
  ];

  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [clickedMenuItem, setClickedMenuItem] = useState(null); // New state for clicked menu item

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems, clickedMenuItem, setClickedMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}