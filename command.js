$(eval 

items = $(urlfetch json https://raw.githubusercontent.com/Sintinium/MarioMakerItems/main/items.json);

itemCount = 2;
arg1 = $(1);
if (arg1 != null && arg1.toString().match(/^[2-9]+$/) != null) { 
    itemCount = parseInt(arg1); 
}
picked = [];
for (var i = 0; i < itemCount; i++) {
  rand = Math.floor(Math.random() * items.length);
  picked.push(items[rand]);
  items.splice(rand, 1);
}

'@$(user) Which will be next? "' + picked.join('" or "') + '"';
)
