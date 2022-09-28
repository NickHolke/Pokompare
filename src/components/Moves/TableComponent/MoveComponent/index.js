import React, { useEffect } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

function MoveComponent({
  name,
  level,
  moveClass,
  type,
  accuracy,
  power,
  pp,
  url,
  updateMove
}) {
  useEffect(() => {
    if (pp === null) {
      axios
        .get(url)
        .then(({ data }) => {
          const valuesToUpdate = { name };
          valuesToUpdate['accuracy'] = data['accuracy'];
          valuesToUpdate['class'] = data['damage_class']['name'];
          valuesToUpdate['type'] = data['type']['name'];
          valuesToUpdate['power'] = data['power'];
          valuesToUpdate['pp'] = data['pp'];
          updateMove(valuesToUpdate);
        })
        .catch(err => console.log(err));
    }
  }, [name, pp, url, updateMove]);

  return (
    <TableRow
      key={name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{level}</TableCell>
      <TableCell align="right">{moveClass}</TableCell>
      <TableCell align="right">{type}</TableCell>
      <TableCell align="right">{accuracy}</TableCell>
      <TableCell align="right">{power}</TableCell>
      <TableCell align="right">{pp}</TableCell>
    </TableRow>
  );
}

export default React.memo(MoveComponent);
