Instructions
-----
1) Create a custom command in nightbot. Set command field to !bet
2) In the message field paste the following:
```JavaScript
$(eval
  
items = $(urlfetch json https://raw.githubusercontent.com/Sintinium/MarioMakerItems/main/items.json);
itemCount = 2;
arg1 = $(1);
if (arg1 != null && arg1.toString().match(/^[2-9]+$/) != null) { 
    itemCount = parseInt(arg1); 
} 
shuffled = items.sort(() => 0.5 - Math.random()).slice(0, itemCount);

'@$(user) Which will be next? "' + shuffled.join('" or "') + '"';
)
```
3) Set the Userlevel to Owner or Moderator
4) Done

[Click here](https://github.com/Sintinium/MarioMakerItems/blob/main/items.json) to see the list of items. I tried to keep it exactly how you format the predictions but if something is wrong I'll happily correct it. I also removed things you never use like slopes, 3D world items, etc...

--------

### Example:
```
Aurateur: !bet
Nightbot: Which will be next? "Goomba" or "Koopa"

Aurateur: !bet 3
Nightbot: Which will be next? "Goomba" or "Koopa" or "Boo"

Aurateur: !bet 5
etc...
```

<br/><br/>

-------

### Code documentation: (Just incase you wonder how it works)
I can't include this in the nightbot code so I'll put it here
```JavaScript
$(eval
/* List of items from the URL 'https://raw.githubusercontent.com/Sintinium/MarioMakerItems/main/items.json' */
items = $(urlfetch json https://raw.githubusercontent.com/Sintinium/MarioMakerItems/main/items.json);

/* Bet defaults to 2 things. This checks if you include a number between 2 and 9 in your command (ex: !bet 3) */
itemCount = 2;
arg1 = $(1);
if (arg1 != null && arg1.toString().match(/^[2-9]+$/) != null) { 
    itemCount = parseInt(arg1); 
}

/* Shuffles the items into a random order. Then takes the number of items that you asked for in the command (defaults to 2) */
shuffled = items.sort(() => 0.5 - Math.random()).slice(0, itemCount);

/* Prints it out in chat */
'@$(user) Which will be next? "' + shuffled.join('" or "') + '"';
)
```
