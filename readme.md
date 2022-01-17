# React Assessment #2

## Part 1: Conceptual

Answer the following questions in conceptual.

## Part 2: unroll

Write a function called unroll, which takes in a square array of arrays (i.e. a grid with n rows and n columns). An input could look like this:

```javascript
const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
```

**unroll** should take in such a square array and return a single array containing the values in the square. You should obtain the values by traversing the square in a spiral: from the top-left corner, move all the way to the right, then all the way down, then all the way to the left, then all the way up, and repeat.

For the above example, unroll should return

```javascript
[1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
```

Here is another example:

```javascript
const smallerSquare = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
];

unroll(smallerSquare); // ['a', 'b', 'c', 'f', 'i', 'h', 'g', 'd', 'e']
```

**Write tests for these cases** and make sure your code passes these. Feel free to add any other tests you deem necessary.

## Part 3: React Snack or Booze

### Requirements

- The homepage should show the # of food items (“snacks”) and drink choices (“drinks”)
- The navbar should add a new link, “Drinks”, leading to a page listing the drinks — just like the “Snacks” link leads to a page listing food items.
- The drink listing page should show a list of drink choices, with each being a link to the details about the drink, just like for food items.
- **However**, you shouldn’t solve this by just cloning the **FoodMenu** and **FoodItem** components — you’d have so much duplicate code! Instead, turn these into generic components that can work with either food or drink lists/items.
- Now that you have more things on your menu, you should add a page that lets site users add either a drink or a snack.
- **Design your app well**. We don’t want to see poor names or see AJAX calls buried in your components. Use good design! Test whatever you can!
- Make sure you **document your code appropriately. Srsly.**
- Make sure you handle not-found pages — if a visitor tries to go to a link that doesn’t work, it should give a friendly 404-style message. If someone tries to go to a drink or food item that doesn’t exist, it should redirect to the drinks or food items listing page.

The app does not need any kind of login or authentication; everyone can see everything and can add new items.

Demo:

![snackorbooze]()

### Skills/tools/technologies in Madlibs

- [React.js](https://reactjs.org/)

#### Getting Started

##### Available Scripts

In the project directory, you can run:

```bash
npm start
```

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

This script will also start up the backend on [http://localhost:5000](http://localhost:5000). It uses the `concurrently` library.

```bash
npm build
```

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```bash
npm eject
```

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
