$(eval
  itemCount = 2;
  arg1 = $(1);
  if (arg1 != null && arg1.toString().match(/^[2-9]+$/) != null) { 
      itemCount = parseInt($(1)); 
  } 
  items = $(urlfetch json https://raw.githubusercontent.com/Sintinium/MarioMakerItems/main/items.json); 
  shuffled = items.sort(() => 0.5 - Math.random());
  selected = shuffled.slice(0, itemCount);
  '@$(user) Which will be next? "' + selected.join('" or "') + '"';
)
