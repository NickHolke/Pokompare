export default function formatData(pokemon) {
  return Object.keys(pokemon).reduce((formattedPokemon, key) => {
    let value = pokemon[key];
    if (key === 'sprites') {
      key = 'imgUrl';
      value = formatImgUrl(value);
    } else if (key === 'stats') {
      value = formatStats(value);
    } else if (key === 'moves') {
      value = formatMoves(value);
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

function formatMoves(movesArray) {
  const movesVersions = {};
  const movesList = movesArray.map(
    ({ move, version_group_details: versions }) => {
      const moveObj = {
        ...move,
        accuracy: null,
        class: null,
        type: null,
        power: null,
        pp: null
      };
      versions.forEach(version => {
        const versionName = version['version_group']['name'];
        if (!moveObj.hasOwnProperty('method')) {
          moveObj['method'] = version['move_learn_method']['name'];
        }
        if (!moveObj.hasOwnProperty('level')) {
          moveObj['level'] = version['level_learned_at'];
        }
        if (
          versionName !== 'colosseum' &&
          versionName !== 'xd' &&
          versionName !== 'lets-go-pikachu-lets-go-eevee'
        ) {
          moveObj[versionName] = true;
          if (!movesVersions.hasOwnProperty(versionName)) {
            movesVersions[versionName] = true;
          }
        }
      });
      return moveObj;
    }
  );

  return { movesList, movesVersions };
}
