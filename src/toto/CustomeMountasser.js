import React from 'react';

import Select from '../index.umd';
import  { components } from '../index2';

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
    width: '30em'
  };
 const menuHeaderCol1And2Style ={
  width: '20em',
  float: 'left'
 }
  const menuHeaderCol1Style = {
    width: '10em',
     float:'left'

  };
  const menuHeaderCol2Style = {
    width: '10em',
    float:'right'

  };

  const menuHeaderCol3Style = {
    width: '10em',

display : 'table-caption'
  };

const toto = {  "background":"#bfd70e","borderRadius":"50%","width":"16px","height":"16px","border":"2px solid #679403"}
  const Menu = (props) => {
    const optionsLength = getLength(props.options);
    console.log("koko",props)
    return (
      <Fragment>
        <div style={menuHeaderStyle}>
        <div style={menuHeaderCol1And2Style}>
<div style={menuHeaderCol1Style}>Compte</div>
<div style={menuHeaderCol2Style}>Solde</div>
</div>
<div style={menuHeaderCol3Style}>3rd Clmn</div>

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

    content:  '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });
  const Styles = {
    singleValue: (styles, { data }) => ({ ...styles }),
  };
export  default () => (

   <Select
    defaultValue={colourOptions[1]}
    options={groupedOptions}
    components={{ Menu }}
    isClearable
    styles={Styles}
      menuIsOpen={true}
    isSearchable
    formatOptionLabel={(data) => {console.log("lolo",data); return (
      <div >
                <div style={menuHeaderCol1And2Style}>

        <div style={menuHeaderCol1Style}>{data.label}</div>
<div style={menuHeaderCol2Style}>{data.color}</div>
</div>
<div style={menuHeaderCol3Style}><div style= {toto}> </div></div>

        </div>
    )}}  
    
    
    />
);

