import { React, useMemo } from 'react';
import Select from 'react-select';
import characterArray from '../utils/charactersArray';

function Input({
  handleGuess,
  win,
  openedTile,
}) {
  const sortedCharacters = useMemo(() => characterArray.sort()
    .map((val) => ({
      label: val.name,
      value: val.name,
    })), [characterArray]);

  function handleChange(event) {
    handleGuess(event.value);
  }

  return (
    <Select
      className="select-container"
      classNamePrefix="select"
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          neutral0: '#FDC429',
          neutral50: '#2A2A2A',
          neutral20: '#FC6030',
          neutral60: '#FC6030',
          neutral40: '#470504',
          neutral30: '#470504',
          primary: '#FC6030',
          primary25: '#f68866',
        },
      })}
      options={sortedCharacters}
      onChange={handleChange}
      isDisabled={win || (openedTile.length === 9)}
    />
  );
}

export default Input;
