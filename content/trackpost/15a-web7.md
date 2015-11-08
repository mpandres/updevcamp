+++
date = "2015-11-09T04:11:30+08:00"
title = "Javascript"
tech = "Week 3a"
tracks = ["Web"]
authors = ["mireya"]

+++

# Background
Javascript is a fun language. It's powerful, versatile, but sometimes misunderstood. It' s an **object-oriented dynamic language**, and it's commonly used for making web applications interactive (although js frameworks have become popular recently, such as AngularJS and EmberJS).

Check out [this](http://hereistoday.com/) website and notice how it's not just some static HTML document. You can click on the timeline (the colored rectangles) and the website reacts and changes depending on your actions *without refreshing the page*. **That** is the power of javascript.

Some brief history: javascript was created by this engineer from Netscape called Brendan Eich. It was released in 1996. It was originally *Mocha*, then it was called *LiveScript*, and eventually it was named *Javascript* when Netscape and Sun got together. It was supposed to be a complementary scripting language for Java, but it has evolved a lot on its own as a language. And despite the name, js doesn't really have much to do with the Java language.

So don't worry; if you don't know how to code in Java, you'll be fine.

# Getting Started
Some knowledge of HTML is needed for this tutorial. If you're not familiar with how HTML works, check out the HTML tutorial [here](http://updevcamp.com/trackpost/15a-web1/) then come back to this later. Grab a few snacks while you're at it; we're in for a pretty long ride and we don't want you to work on an empty stomach!

You good to go? Are you comfortable in your spot? Great! Let's get started.

First, clone this [repository](https://github.com/mpandres/pokemon-js) and check out the readme. This is the same repository we used for the DevCamp session last November 7. If you cloned this before, update it by running `git pull` from your local repository. Comments have been added to the code since then to make things easier to follow.

# Javascript as a Language
## Hello World!
First we'll take a look at the `basic javascript` folder from the repository.

Unlike with Flask, there's no setup needed for JS. You can simply create a javascript file by adding the `.js` extension. Let's make one now.

Open up a blank file using your favorite text editor and save it as `scripts.js` (or whatever you want to name it). Type the following code in your file:

```
alert('Hello World!');
console.log('Javascript FTW!');
```

Now open `dummy.html` in your text editor and add the following code inside the `<body>` tag:

```
 <script src="scripts.js"></script>
```
 
This links your js script to your HTML document. If you open `dummy.html` in your browser, you'll find that a dialogue box has popped up with the message "Hello World!". This is what the `alert()` function does in javascript.

Close the dialogue box. You'll find that the document is completely blank - as expected, since we left the body without any HTML elements. But where did our "Javascript FTW!" message go? Well now let's try checking out the `console`. Right-click and select `Inspect Element`, then go to the `console` tab. You should now see the "Javascript FTW!" message printed.

Pretty neat; now we'll be able to print messages without affecting what's shown in our HTML document or having annoying dialogue boxes popping up using the `console.log()` function. This is useful for inspecting data, so keep this function in mind when you're trying to debug your code.

Sweet, so now we've done the obligatory `Hello World` example customary for programming languages. Pat yourself in the back and have a bite of that snack you took.

## Back to Basics
Now let's look at `backtobasics.js` prepared by Marc Teves. It's a tutorial on the basic syntax of javascript. Link this to your HTML file and refresh the page, then check the console tab. The code is pretty straightforward and is sufficiently explained through the comments. Try to follow the code and familiarize yourself with the syntax - in many ways, it's similar to other languages like C.

As a quick recap from last session, here are some important concepts to know about how javascript works:
* All number arithmetic is handled as floating point arithmetic.
* `null` is a special javascript literal which means *empty* i.e. no object value is present. Null means there is a non-value.
* `undefined`, on the other hand, means that the value is uninitialized. It means that no value has been assigned yet.
* When we add a string to the equation, the `+` operator becomes a concatenator.
* Javascript arrays can have elements of different types. (e.g. `array = [1, 2, "abcd", 8.91]`).
* Objects can have `attributes` and `methods` (functions). You can initialize an object from the get go, or use a `constructor`, which are templates for an object.
* Functions are objects too! This means you can pass them as a parameter to other functions. Pretty cool.

This is a lot to take in, but the `backtobasics.js` file goes through all of these one by one in detail. Go through that, then come back once you're done.

As an additonal reference, check out the MDN's [js tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript), which gives a quick overview of how javascript works. It's a bit lengthy, so I suggest you go through this at another time. :)

# DOM Manipulation
Whew! That was a lot to take in. Still hanging in there? Why don't you rest for a minute, refill your drink, and grab some more snacks before we proceed. Check out this [penguin video](https://www.youtube.com/watch?v=Q9c8FJ19yVE&list=PLASUEILIKieb8Jpwcri6fQphSw4wPavMc&index=26) while you're at it.

All done? Great! Now let's get to the fun part.

So far we've done some pretty basic stuff - mostly learning how to code in javascript. But we haven't actually touched any of the *magic* javascript offers us, so let's do that by creating our own Pokemon game!

## Nothing Wrong With Vanilla
One of the most fun features of javascript is that it allows us to manipulate the DOM, or the Document Object Model. When we have an HTML file, we can represent it as a raw text file, or as what we see here in our browsers. But another way of representing HTML files (and also XML files) is through the DOM, which provides a structured (object-oriented) way for other programs and scripts to access and manipulate elements in the document.

That is, using javascript we can access certain HTML elements through the DOM and modify them without having to reload the page every time. How cool is that?

If you want to skip this section and get straight to the code, you can use `dom.js` from the repository as a reference.

To get started, we'll work on the `/pokemon` folder from the repository. Ignore the folders for now and just open `pokemon.html` in your text editor. Make sure that all the scripts in the `<head>` tag are commented out except for the following:

```
<script language="javascript" type="text/javascript" src="js/jquery.min.js"></script>
<script language="javascript" type="text/javascript" src="js/jquery-ui/jquery-ui.min.js"></script>
```

We'll get into what these scripts do later. For now just ignore them.

Open `pokemon.html` in your browser. You should see a static page of a simulated pokemon battle with Pikachu as your pokemon and Ratata as your opponent. The bottom screen should only have the green pokeball background and should be empty of buttons. Get yourself familiar with the elements of the page before we proceed. If things are confusing, right-click and select `Inspect Element` then hover over each line, which will highlight the corresponding element in the browser.

Now let's try changing the elements without touching the HTML document. First create a new file in the `/js` folder (let's call this `dom.js`) and link this in the `<head>` tag:

```
<script language="javascript" type="text/javascript" src="js/dom.js"></script>
```

In `dom.js`, we'll add the following code:

```
window.onload = init;

function init(){
  // insert code here
}
```

We'll put most of our code in the `init` function. What this does is that it makes sure the browser loads ALL of the HTML elements before running our script. We want to make sure that the elements are *there* before we can even manipulate them.

Now let's get to the magic. To manipulate elements, we need to be able to *get* them first. Add the following inside the `init()` function:

```
var opponent = document.getElementById('opponent-name');
```

Here we're *getting* the HTML element with the id of `#opponent-name` and putting it in the variable `opponent` so that our script will be able to use it. `#opponent-name` is a `<div>` in the HTML file with the text "RATATA". Let's change that to something else:

```
opponent.innerHTML = "RATATATATATATATA";
```

`innerHTML` is the text property of an HTML element. So now we're changing our opponent's name from "RATATA" to "RATATATATATATATA". Refresh the page in your browser and you'll see that, indeed, we are no longer fighting "RATATA" but "RATATATATATATATA"!

Now let's try another trick.

```
var name = document.getElementById('pokemon-name');
var last_name = document.createTextNode(' Pikapi');
name.appendChild(last_name);
```

There are several things going on here. We're *getting* the name of our pokemon (in the HTML file this is the `<div>` with the text "PIKACHU") and putting it in the `name` variable. Now the second line is a bit different. Instead of *getting* an element, we are now *creating* an element - specifically a TextNode with the string " Pikapi". *Yes, javascript just created an HTML element*. Pretty neat. But now we have to add this to our pokemon name so that instead of "PIKACHU" we'll have the pokemon "PIKACHU Pikapi". So now we use `appendChild()` to do that.

Refresh the page again and voila! We are now having a fight between "PIKACHU Pikapi" and "RATATATATATATATA"!

## jQuery Magic
We've done some interesting stuff so far with vanilla javascript. We're able to select elements from an HTML file, create our *own* HTML elements, and manipulate them. But typing all these long methods will get pretty stale (imagine typing `document.getElementById()` over and over and over and over... *ugh*). Is there some way to make coding easier?

Naturally some people have already tackled this problem before and made a convenient solution for us, and that is jQuery! jQuery is basically a javascript library; you can think of it as third-party javascript file that we'll import into our HTML document. It has some shortcut methods and additional neat goodies - mostly functions that a lot of people use so that there's no need to reinvent the wheel. Why code something when it's already been done before by someone else and you can use it for free?

In our HTML file, we've already imported jQuery and jQuery UI so there's no need to set it up. You can find the files in the `/js` folder.

```
<script language="javascript" type="text/javascript" src="js/jquery.min.js"></script>
<script language="javascript" type="text/javascript" src="js/jquery-ui/jquery-ui.min.js"></script>
```

Fire up another javascript file (or use the old one and just comment out our previous code - ALL of it) and add the following:
```
$(function(){
});
```

This is the jQuery equivalent of our `init` function from before. The `$` sign is shortcut for `jQuery`, so technically the code above is the same as this one:

```
jQuery.(function(){
});
```

... but nobody codes like that because that's five more characters to type. `$` is just so much more convenient.

Let's trying manipulating an element like we did before using vanilla javascript. Add the following inside the function:

```
var name = $('#pokemon-name');
name.html('MIREYA');
```

Huh, the code seems shorter now, doesn't it? But it's really the same thing as the one above. It's equivalent code in vanilla javascript is this:

```
var name = document.getElementById('pokemon-name');
name.innerHTML = 'MIREYA';
```

So to select an element, just use `$()` and add the id or class selector inside (so you can also have something like `$('.class')`). The `innerHTML` property can be changed using the `.html()` method. You can also get the current `innerHTML` by setting the parameters blank, like so:

```
console.log(name.html());
```

Now refresh the page and you'll see that we've changed the text just like before - only this time with less characters! Yay for open source and faster coding!

Let's now try manipulating other properties:

```
var img = $('#pokemon-sprite');
img.attr('src', 'assets/back/squirtle.png');
```

A general way of changing an element's attribute is by using the `attr()` method, which accepts two parameters: the attribute name, and the final value you want it to be in. So here we're changing our pokemon's sprite from pikachu to squirtle. Reload the page the see the results!

# Pokemon Game
We've gone through a lot, but now we're ready to make the actual game! Yay! If you made it this far, smile, eat something you like, give yourself a pat on the back and say, "Good job, self!" You deserve it!

This is the final sprint. For this tutorial, we'll make our pokemon attack the opponent and add visual feedback. Our opponent will shake whenever it is attacked, it's HP bar will diminish and change in color for every damage it takes, and the sprite will eventually vanish once the opponent's HP reaches zero. We'll also have our pokemon do a victory pose for a job well done.

If you want to skip this section and get straight to the code, you can use `pokebattle.js` as a reference. Comments have been added to explain what's going on so it should be easy to follow.

As stated from the readme of this repository: we will not be able to simulate the actual game wherein both you and the opponent take turns in attacking. This requires some gamedev concepts which are outside the scope of this tutorial, and will be left as an exercise to the interested coder. If you're curious, you can shoot me a message on how this can be done. I've also provided additional assets (from spriters-resource) should you want to take this a bit further.

## Menus
First let's clean up the code a bit. In `pokemon.html` make sure that all the scripts in the `<head>` tag are commented out except for the following:

```
<script language="javascript" type="text/javascript" src="js/jquery.min.js"></script>
<script language="javascript" type="text/javascript" src="js/jquery-ui/jquery-ui.min.js"></script>
```

Add another script:

```
<script language="javascript" type="text/javascript" src="js/pokebattle_base.js"></script>
```

and open up `pokebattle_base.js` in your text editor. As you can see, I've already added some code for you so we can quickly get our hands dirty.

A quick run through of what we have so far:
* We've got two constructors: `move` and `moveObject`. `move` refers to the logical moves of a pokemon, while `moveObject` refers to the actual HTML elements representing those moves. I made these as constructors because I need to create several of these objects (since a pokemon has 4 moves).
* Each attribute in the `trainer` object refers to the corresponding element in the html file. So `trainer.name` refers to the `<div>` with "PIKACHU" and `trainer.hpBar` refers to the green HP bar.
* `img` and `altImg` are shortcut links to the pokemon assets.
* Notice that we used the `move` constructor in the `trainer` object as well.
* `opponent` object is the same as `trainer`, except that `hpRemaining` and `hpTotal` are numbers instead of references to HTML elements, since we don't actually see the opponent's HP in the game except for the HP bar.
* `menu` refers to the main menu, which consists of a `fight`, `bag`, `pokemon`, and `cancel` button.
* `fight` refers to the fight menu, which consists of 4 buttons for each pokemon move (here we used the `moveObject` constructor), and 1 `cancel` button.
* For both objects above, `main` refers to the `<div>` enclosing the buttons for that menu.

Take your time to familiarize yourself with the objects first. There'a a lot to take in.

All done? Great!

Now if you look at the page in your browser, you'll notice that although we have a main menu and fight menu, they are nowhere to be seen! That's because both of them are set to `display: none;`. Try commenting this out from `.menu` in `style.css`, or you can just uncheck the property using `Inspect Element`. Now we're able to see the menu!

But we don't want to be able to do that by touching the HTML file, so set `display` back to `none` and let's try manipulating `.menu` with javascript instead.

Let's make the menu appear:

```
menu.main.css('display', 'block');
```

This is vanilla javascript that sets the css from `display: none;` to `display: block;`. Try refreshing the page and you'll see that we now have a nice menu to play with.

We'll need to switch frequently between the main menu and the fight menu, so let's create functions for that.

```
function switchToFight() {
  menu.main.hide(); 
  fight.main.show();
}
```

Here we used jQuery instead of vanilla js. The equivalent vanilla js code is this:

```
function switchToFight() {
  menu.main.css('display', 'none');
  fight.main.css('display', 'block');
}
```

... but that's too many characters to type with, so we'll just go with jQuery on this one. :P It's also easier to read (it's almost like english!)

Of course, we also need to be able to switch to the other menu so let's do that:

```
function switchToMenu(){
  fight.main.hide();
  menu.main.show();
}
```

Now let's actually use these functions using the `click()` event: 

```
menu.fight.click(function(){
  switchToFight();
});
```
This means that if we click the FIGHT button in the main menu, we'll switch to the fight menu.

Conversely, if we click the CANCEL button in the fight menu, we should be able to switch to the main menu via:

```
fight.cancel.click(function(){
  switchToMenu();
});
```

Reload the page and try clicking the FIGHT button in the main menu, then the CANCEL button in the fight menu. You should now be able to easily switch between menus without reloading the page to get these changes to show up!

## Pikachu used TACKLE!
Now let's try actually attacking our opponent.

We'll only be able to attack our opponent if we click a move image (one of the four purple boxes in the fight menu), so let's do that:

```
fight.move1.img.click(function(){
  playerAttack();

  // decreases logical pp of the move
  trainer.move1.remaining--;
  
  // manipulates the html element to show the decrese in pp
  fight.move1.pp.html(trainer.move1.remaining + '/' + trainer.move1.total);
});

function playerAttack() {
  // pikachu attacks ratata
}

```

We have four moves so it would be quite redundant if we had to code the attack block four times, so let's just create a function called `attack()` in the `trainer` object.

Let's go back up and add the following code to `trainer`:

```
// in trainer object
move4: new move('SAND ATTACK', 25, 25, 1),

// trainer attacks the victim with the specified damage
attack: function(victim, dmg){
  victim.hpRemaining = victim.hpRemaining - dmg;
  if(victim.hpRemaining < 0){
    victim.hpRemaining = 0;
  }

  console.log(hpRemaining);
},

```

Here we'll set a parameter called `victim` which will later be filled out by our `opponent` object. Let's finish up the code by calling this in the `playerAttack()` function:

```
fight.move1.img.click(function(){
  playerAttack(opponent, trainer.move1.damage);
  trainer.move1.remaining--;
  fight.move1.pp.html(trainer.move1.remaining + '/' + trainer.move1.total);
});

function playerAttack(opponent, damage) {
  trainer.attack(opponent, damage);
}

```

Reload the page and try attacking Ratata. Clearly he's taking damage, as we can see in the console logs. But there's no visual feedback! Let's remedy this by having the HP bar diminish for each hit. Let's go back to `trainer.attack()`.


We'll have the HP bar diminish by shortening its width. Its original width is 100px so we can just use the percentage of HP left as the new width of the HP bar.

```
var hp = victim.hpRemaining/victim.hpTotal*100;
```

Now that we have the new width of the HP bar, we'll *animate* it using jQuery. We'll use the `animate()` function, which accepts a list of properties that needs to be changed. We'll be putting in th *final state* that we want the HP bar to be in:


```
victim.hpBar.animate({'width': hp + 'px'});
```

But it's not enough that we set the HP to a certain width. In Pokemon, the color changes as well depending on how much HP is left, so let's do that:

```
if(hp < 30){
  victim.hpBar.animate({'width': hp + 'px', 'background-color': '#f85828'}); // red
}

else if(hp < 60){
  victim.hpBar.animate({'width': hp + 'px', 'background-color': '#f8b000'}); // orange
}

else {
  victim.hpBar.animate({'width': hp + 'px', 'background-color': '#18c020'}); // green
}
},
```

Whew! That's a lot of code. Just to check, here's what your code should look like at this point:

`trainer.attack()`
```
var trainer = {
  ...

  attack: function(victim, dmg){
    victim.hpRemaining = victim.hpRemaining - dmg;
    if(victim.hpRemaining < 0){
      victim.hpRemaining = 0;
    }

    var hp = victim.hpRemaining/victim.hpTotal*100;

    if(hp < 30){
      victim.hpBar.animate({'width': hp + 'px', 'background-color': '#f85828'}); // red
    }

    else if(hp < 60){
      victim.hpBar.animate({'width': hp + 'px', 'background-color': '#f8b000'}); // orange
    }

    else {
      victim.hpBar.animate({'width': hp + 'px', 'background-color': '#18c020'}); // red
    }
  },
}
```


`click()` event:

```
fight.move1.img.click(function(){
  playerAttack(opponent, trainer.move1.damage);
  trainer.move1.remaining--;
  fight.move1.pp.html(trainer.move1.remaining + '/' + trainer.move1.total);
});

```

and `playerAttack()`:

```
function playerAttack(opponent, damage) {
  trainer.attack(opponent, damage);
}
```

Reload the page and attack your opponent!

## ... It's super effective!

Let's add some more animations. Why don't we try changing the text in the dialogue box?

First we need to be able to select the element. By now you should be a pro at this so this is easy.

```
var dialogue = $('#battle-text');
```


Let's change the dialogue in `playerAttack()`:

```
if(opponent.hpRemaining <= 0){
  dialogue.html(opponent.name.html() + ' fainted!');
}

else {
  dialogue.html(opponent.name.html() + ' received ' + damage + ' damage!');
}
```

Meh, pretty straightforward so this is probably boring for you. So why don't we have the opponent have a `hurt` animation whenever it's hit? We can use that using jQuery UI's built-in goodies: the `effect()` method.


In the `opponent` object add:

```
hurtAnimation: function() {
  this.sprite.effect('shake');
},
```

While we're at it, let's make it disappear when its HP reaches zero. We'll use another one of jQuery's goodies called the `fadeOut()` method. You can set how fast the sprite disappears; I'll use `slow` so that we can savor the victory.


```
faintedAnimation: function() {
  this.sprite.fadeOut("slow");
}
```

Lastly, we'll have our pokemon do a victory pose when the opponent's HP reaches zero. (N-not because we're happy to make pokemon faint or anything! Let's not be sadists here.)

There are additional sprite assets we can use, so let's just change the sprite image. Luckily we've already saved the path for this before in `trainer.altImg`.

```
victoryAnimation: function(){
  this.sprite.attr('src', this.altImg);
}
```

Call these new functions in our `playerAttack()`, like so:

```
function playerAttack(opponent, damage) {
  opponent.hurtAnimation();
  trainer.attack(opponent, damage);

  if(opponent.hpRemaining <= 0){
    dialogue.html(opponent.name.html() + ' fainted!');
    opponent.faintedAnimation();
    switchToMenu();
    trainer.victoryAnimation();
  }

  else {
    dialogue.html(opponent.name.html() + ' received ' + damage + ' damage!');
  }
}
```

And lastly, let's wrap this up by doing the other moves as well.

```
fight.move2.img.click(function(){
  playerAttack(opponent, trainer.move2.damage);
  trainer.move2.remaining--;
  fight.move2.pp.html(trainer.move2.remaining + '/' + trainer.move2.total);
});

fight.move3.img.click(function(){
  playerAttack(opponent, trainer.move3.damage);
  trainer.move3.remaining--;
  fight.move3.pp.html(trainer.move3.remaining + '/' + trainer.move3.total);
});

fight.move4.img.click(function(){
  playerAttack(opponent, trainer.move4.damage);
  trainer.move4.remaining--;
  fight.move4.pp.html(trainer.move4.remaining + '/' + trainer.move4.total);
});
```

Reload the page. Now you can mercilessly attack a Ratata at your will, and even have your pokemon do a victory pose! Good job!

# Final Notes
Whew! We've finally reached the end!. We've gone from printing a simple "Hello World!" in the console to making our very own Pokemon game! This was a lot to take in. If you made it this far, kudos! You've done a *very* good job. Now step away from the screen and rest for a while. :P

We've only *barely* scratched the surface of the magic that is javascript. There are so *so* many more things that javascript can do and landscape for javascript is still evolving, but I'll leave it to you to discover them. From here on you can use javascript in so many ways - from client-side to server-side programming; backend to frontend; and yes, even in game development! (Check out phaserJS for gamedev javasript).

Have fun coding!