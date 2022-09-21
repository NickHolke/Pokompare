import React, { useEffect } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

function MoveComponent({ move, updateMove }) {
  console.log('move component');
  useEffect(() => {
    if (!move.hasOwnProperty('accuracy')) {
      axios
        .get(move['url'])
        .then(({ data }) => {
          const updatedMove = move;
          updatedMove['accuracy'] = data['accuracy'];
          updatedMove['class'] = data['damage_class']['name'];
          updatedMove['type'] = data['type']['name'];
          updatedMove['power'] = data['power'];
          updatedMove['pp'] = data['pp'];
          updateMove(updatedMove);
        })
        .catch(err => console.log(err));
    }
  }, [move, updateMove]);
  return (
    <TableRow
      key={move.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {move.name}
      </TableCell>
      <TableCell align="right">{move.level}</TableCell>
      <TableCell align="right">{move.class}</TableCell>
      <TableCell align="right">{move.type}</TableCell>
      <TableCell align="right">{move.accuracy}</TableCell>
      <TableCell align="right">{move.power}</TableCell>
      <TableCell align="right">{move.pp}</TableCell>
    </TableRow>
  );
}

export default React.memo(MoveComponent);
