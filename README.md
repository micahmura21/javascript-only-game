# JavaScript Only Game With Canvas

### Objective

Create a game to build upon your knowledge of JavaScript DOM Nodes and HTML5 Canvas. With persistence, you will be able to completely create a game using only JavaScript!

![Screenshot](https://github.com/junior-devleague/javascript-only-game/blob/master/Screenshot.png?raw=true)

### Prerequesites

- Pre lecture of JavaScript DOM Nodes
- Pre lecture of HTML5 Canvas
- Pre lecture of for-in loops
- Pre lecture of HTML DOM addEventListener() Method

### Requirements

- Sublime Text

### Upon completing this project, students should understand:

- JavaScript DOM Nodes
- HTML5 Canvas
- For-in loops

### Get started:

- Fork and Clone this repository.
- Create the files `index.html` and `app.js`
- Connect the `app.js` file to the `index.html` file
- In the HTML file, add the attribute `onresize` to the body tag and set its value to `resizeWindow()`
- Read comment blocks carefully.

### Steps:
These steps will be in the `app.js` file: 

#### Creating the canvas:
1. Declare a variable named `canvas` and set its value as the DOM method to create an element. You will be creating a canvas element with this method.
2. Declare a variable `ctx` and use the method `canvas.getContext` to set it as "2d"
3. Set the value of the property `width` in the *canvas object* as `window.innerWidth`.
4. Set the value of the property `height` in the *canvas object* as:
	- What will this value be?
5. Set the value of the property `canvas.style.width` to the variable `width` plus string "px"
6. Set the value of the property `canvas.style.height`:
	- What will its value be?
7. Append the canvas element to the document.body

#### Resizing the window
Create a function named resizeWindow(). In this function: 
1. Declare a variable named `width` and set its value to `window.innerWidth - 40`
2. Declare a variable named `height`
	- What will its value be?
3. Declare a variable named canvas and set its value to use the DOM method to retrieve an element by it's tag name. This will give an array.
4. Set the value of the property `width` in the *canvas object* as the variable `width`
5. Set the value of the property `height` in the *canvas object* as: 
	- What will its value be?
6. Set the value of the property `canvas.style.width` to the variable `width` plus string "px"
7. Set the value of the property `canvas.style.height`:
	- What will its value be?

#### Create the background, hero, and monster images
1. Declare a variable named `bgReady` and set its value to false
2. Declare a variable named `bgImage` and set its value to the DOM method to create an element. You will be creating an image element
3. Set the value of the property `onload` of bgImage to this:
```html
function () {
	bgReady = true;
};
```
4. Set the value of the property `src` on bgImage to an image of your choice. You can use: "https://raw.github.com/lostdecade/simple_canvas_game/master/images/background.png"
5. Repeat steps 1-3 for the hero and monster variables. You can replace the *bg*Ready portion to *hero*Ready and such.
6. The image sources you can use are:
- heroImage.src = "https://raw.github.com/lostdecade/simple_canvas_game/master/images/hero.png"
- monsterImage.src = "https://raw.github.com/lostdecade/simple_canvas_game/master/images/monster.png"

#### Render Game
1. Declare a function named render and in this function:
2. Create a conditional to check if the value of bgReady is true, if it is true:
	- Add this line: ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
3. Create conditionals to check if the hero and monster images are ready as well.
	- What are the parameters of ctx.drawImage and how would you modify them for the other images?

#### Keyboard controls
Live-Demo
- AddEventListener
- Update

#### Main Game Loop
1. Declare a variable named `then` and set its value to retrieve the date at this moment in time.
1. Declare a function named main and in this function:
2. Declare a variable named `now` and set its value to retrieve the date at this moment in time.
3. Declare a variable named delta and set its value to retrieve the time difference between now and then.
4. Invoke the update function and pass `delta/1000` as its parameter
5. Invoke the render function
6. Set the value of `then` to `now`
7. Outside this function, at the bottom of the file, call the setInterval function and pass `main` and `1` as the parameters

#### Reset the game when the player catches a monster
1. Declare a function named reset and in this function:
2. Set the value of the property `x` on the hero object to `canvas.width/2`;
3. What will the value of the `y` property on the hero object be?
4. Set the value of the property of `x` on the monster object to a randomized value within the canvas.
5. Set the value of the property of `y` on the monster object to a randomized value within the canvas.
6. Invoke this function at the bottom of the page before the setInterval declaration

### Resources
- [JavaScript HTML DOM Elements (Nodes)](https://www.w3schools.com/js/js_htmldom_nodes.asp)
- [HTML DOM Element Object](https://www.w3schools.com/jsref/dom_obj_all.asp)
- [HTML5 Canvas](https://www.w3schools.com/html/html5_canvas.asp)
- [For...in](https://www.w3schools.com/jsref/jsref_forin.asp)
- [HTML DOM addEventListener() Method](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)
