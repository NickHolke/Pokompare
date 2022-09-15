export default function formatData(pokemon) {
  return Object.keys(pokemon).reduce((formattedPokemon, key) => {
    let value = pokemon[key];
    if (key === 'sprites') {
      key = 'imgUrl';
      value = formatImgUrl(value);
    } else if (key === 'stats') {
      value = formatStats(value);
    }

    return { ...formattedPokemon, [key]: value };
  }, {});
}

function formatStats(stats) {
  return stats.reduce(
    (acc, curr) => {
      acc['labels'].push(curr['stat']['name']);
      acc['values'].push(curr['base_stat']);
      return acc;
    },
    { labels: [], values: [] }
  );
}

function formatImgUrl(spritesObj) {
  return spritesObj['other']['official-artwork']['front_default'];
}
