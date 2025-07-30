$(eval 

items = $(urlfetch json https://raw.githubusercontent.com/Sintinium/MarioMakerItems/main/items.json);

picked = [];
for (var i = 0; i < Math.min(2, items.length); i++) {
  picked.push("'" + items.splice(Math.floor(Math.random() * items.length), 1)[0] + "'");
}
"@$(user) Which will be next? " + new Intl.ListFormat('en', {style: 'long', type: 'disjunction'}).format(picked); 
)