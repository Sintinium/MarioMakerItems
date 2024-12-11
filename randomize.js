function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

fetch('https://raw.githubusercontent.com/Sintinium/MarioMakerItems/main/items.json')
  .then(response => response.json())
  .then(response => console.log(JSON.stringify(shuffle(response), null, 2)));
