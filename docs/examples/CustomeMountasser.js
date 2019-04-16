import React from 'react';

import Select, { components } from '../../src';
import { colourOptions, groupedOptions } from '../data';
import { Fragment } from 'react';



  function getLength (options) {
    return options.reduce((acc, curr) => {
      if (curr.options) return acc + getLength(curr.options);
      return acc + 1;
    }, 0);
  };
  
  const menuHeaderStyle = {
    padding: '8px 12px',
  };
  
  const Menu = (props) => {
    const optionsLength = getLength(props.options);
    return (
      <Fragment>
        <div style={menuHeaderStyle}>
          Custom Menu with {optionsLength} options
        </div>
        <components.Menu {...props}>
          {props.children}
        </components.Menu>
      </Fragment>
    );
  };
  const dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',
  
    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });
  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
    input: styles => ({ ...styles, ...dot() }),
    placeholder: styles => ({ ...styles, ...dot() }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  };

export default () => (
    <div>
   
   <Select
    defaultValue={colourOptions[1]}
    options={groupedOptions}
    components={{ Menu }}
    styles={colourStyles}
  />
  <Select
    defaultValue={colourOptions[2]}
    label="Single select"
    options={colourOptions}
    styles={colourStyles}
  />

  </div>
);


