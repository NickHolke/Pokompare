import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoveComponent from './MoveComponent';

function TableComponent({ version, moves, method, updateMove }) {
  console.log('table component');
  return (
    <div>
      <h2>{method}</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Move</TableCell>
              <TableCell align="right">Level</TableCell>
              <TableCell align="right">Class</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Accuracy</TableCell>
              <TableCell align="right">Power</TableCell>
              <TableCell align="right">PP</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {moves
              .filter(move => move[version] && move['method'] === method)
              .map(move => (
                <MoveComponent
                  key={move.name}
                  name={move.name}
                  level={move.level}
                  moveClass={move.class}
                  type={move.type}
                  accuracy={move.accuracy}
                  power={move.power}
                  pp={move.pp}
                  url={move.url}
                  updateMove={updateMove}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableComponent;
