$(eval 

items = $(urlfetch json https://raw.githubusercontent.com/Sintinium/MarioMakerItems/main/items.json);

count = parseInt($(1)) || 2;

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
