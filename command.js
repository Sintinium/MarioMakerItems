$(eval 

items = $(urlfetch json https://raw.githubusercontent.com/Sintinium/MarioMakerItems/main/items.json);

count = 2;
arg1 = $(1);
if (arg1 != null) { 
    count = parseInt(arg1); 
    if (isNaN(count)) count = 2;
}
picked = [];
for (var i = 0; i < count; i++) {
  rand = Math.floor(Math.random() * items.length);
  picked.push(items[rand]);
  items.splice(rand, 1);
}

msg = picked.join("', '").replace(/, ([^,]*)$/, ' or $1'); 
"@$(user) Which will be next? '" + msg + "'"; 
)
