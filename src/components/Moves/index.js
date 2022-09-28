import React, { useState, useCallback } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TableComponent from './TableComponent';

function Moves({ movesList, movesVersions }) {
  const [moves, setMoves] = useState(movesList);
  const [version, setVersion] = useState(Object.keys(movesVersions)[0]);

  const handleChange = e => {
    setVersion(e.target.value);
  };

  const updateMove = useCallback(valuesToUpdate => {
    setMoves(oldMoves => {
      return oldMoves.map(move => {
        if (move['name'] === valuesToUpdate['name']) {
          move = { ...move, ...valuesToUpdate };
        }
        return move;
      });
    });
  }, []);

  return (
    <div>
      {/* version dropdown 
                - depending on version, filter moves
                - have a component that is a moves table
                - have individual moves component that 
                  makes api call if move object doesn't have
                  certain attribute. This should update the moves 
                  state object in this component

            
            */}
      <h2>Moves</h2>
      <FormControl fullWidth>
        <InputLabel id="version-label">Version</InputLabel>
        <Select
          labelId="version-label"
          id="version-select"
          value={version}
          label="Version"
          onChange={handleChange}
        >
          {Object.keys(movesVersions).map(v => (
            <MenuItem key={v} value={v}>
              {v}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TableComponent
        updateMove={updateMove}
        version={version}
        moves={moves}
        method="machine"
      />
    </div>
  );
}

export default Moves;
