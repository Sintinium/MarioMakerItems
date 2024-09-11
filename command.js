$(eval
  
info = "Copy everything into a Custom Command where it says 'Message'. List of items is on the next line";
items = $(urlfetch json https://raw.githubusercontent.com/Sintinium/MarioMakerItems/main/items.json);

itemCount = 2;
arg1 = $(1);
if (arg1 != null && arg1.toString().match(/^[2-9]+$/) != null) { 
    itemCount = parseInt(arg1); 
} 
shuffled = items.sort(() => 0.5 - Math.random()).slice(0, itemCount);

'@$(user) Which will be next? "' + shuffled.join('" or "') + '"';
)
