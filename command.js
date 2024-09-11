/* 
1) To add the command simply create a custom command in nightbot.
2) Set the command name to whatever you want (ex. !bet).
3) Paste all the text here into 'Message' (Ctrl+A to select all)
4) Set UserLevel to Owner or Moderator
5) Click Submit
6) Test the command

examples:
Owner: !bet 
Nightbot: @Owner Which will be next? "Goomba" or "Koopa"

Owner: !bet 3
Nightbot: @Owner Which will be next? "Goomba" or "Koopa" or "Boo"
*/


$(eval

/* inital item count 2 */
itemCount = 2;
arg1 = $(1);
/* Checks if there's a number 2 thru 9 after !bet. If it is set itemCount it it */
if (arg1 != null && arg1.toString().match(/^[2-9]+$/) != null) { 
    itemCount = parseInt($(1)); 
} 
/* Gets a list of items from https://raw.githubusercontent.com/Sintinium/MarioMakerItems/main/items.json */
items = $(urlfetch json https://raw.githubusercontent.com/Sintinium/MarioMakerItems/main/items.json); 

/* Shuffes the list so it's random */
shuffled = items.sort(() => 0.5 - Math.random());

/* Takes the first 2 (or more) items from the shuffled list */
selected = shuffled.slice(0, itemCount);

/* Prints the selected items */
'@$(user) Which will be next? "' + selected.join('" or "') + '"';

)
