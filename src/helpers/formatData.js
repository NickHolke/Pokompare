export default function formatData(pokemon) {
  return Object.keys(pokemon).reduce((formattedPokemon, key) => {
    let value = pokemon[key];
    if (key === 'sprites') {
      key = 'imgUrl';
      value = value['other']['official-artwork']['front_default'];
    } else if (key === 'stats') {
      value = value.reduce(
        (acc, curr) => {
          acc['labels'].push(curr['stat']['name']);
          acc['values'].push(curr['base_stat']);
          return acc;
        },
        { labels: [], values: [] }
      );
    }

    return { ...formattedPokemon, [key]: value };
  }, {});
}
