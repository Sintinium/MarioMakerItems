Instructions
-----
1) Create a custom command in nightbot. Set command field to !bet
2) In the message field paste the following:
```JavaScript
$(eval 

items = $(urlfetch json https://raw.githubusercontent.com/Sintinium/MarioMakerItems/main/items.json);

count = parseInt($(1));
if (isNaN(count)) count = 2;

picked = [];
for (var i = 0; i < Math.min(count, items.length); i++) {
  rand = Math.floor(Math.random() * items.length);
  picked.push("'" + items[rand] + "'");
  items.splice(rand, 1);
}
format = new Intl.ListFormat('en', {
    style: 'long',
    type: 'disjunction'
});
"@$(user) Which will be next? " + format.format(picked); 
)
```
3) Set the Userlevel to Owner or Moderator
4) Done

> [Click here](https://github.com/Sintinium/MarioMakerItems/blob/main/items.json) to see the list of items. I tried to keep it exactly how you format the predictions but if something is wrong I'll happily correct it. I also removed things you never use like slopes, 3D world items, etc...

How to use
--------
> Aurateur: !bet<br/>
> Nightbot: Which will be next? "Goomba" or "Koopa" <br/>
> Aurateur: !bet 3<br/>
> Nightbot: Which will be next? "Goomba" or "Koopa" or "Boo"

<br/>
<br/>

Code explained in human words
----
I can't include this in the nightbot code so I'll put it here
```JavaScript
/* Tells nightbot this runs code */
$(eval
/* List of items from the URL */
items = $(urlfetch json https://raw.githubusercontent.com/Sintinium/MarioMakerItems/main/items.json);

/* Bet defaults to 2 items. This checks if you include a number in your command (ex: !bet 3) */
count = parseInt($(1));
if (isNaN(count)) count = 2;

/* A better randomizer that adds tick marks (') around each item (put here because Nightbot has a character limit) */
picked = [];
for (var i = 0; i < Math.min(count, items.length); i++) {
  rand = Math.floor(Math.random() * items.length); // random index
  picked.push("'" + items[rand] + "'"); // adds it to the picked array
  items.splice(rand, 1); // removes it from the items array so there's no duplicates
}

/* Formats the list using the built in formatter. (ex: Item1, Item2, or Item3 | or just Item1 or Item2)*/
format = new Intl.ListFormat('en', {
    style: 'long',
    type: 'disjunction'
});
/* Prints it out in chat */
"@$(user) Which will be next? " + format.format(picked); 
)
```
