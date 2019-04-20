import React, { Fragment} from 'react';
import { colourOptions, groupedOptions } from './data';


import Select , {components} from './ExtensibleSelect'

function getLength (options) {
  return options.reduce((acc, curr) => {
    if (curr.options) return acc + getLength(curr.options);
    return acc + 1;
  }, 0);
};


const menuHeaderCol1Style = {
  padding: "2px 8px",

  width: '10em',
};

const menuHeaderCol2Style = {
 // padding: "2px 8px",
  width: '10em',
};

const menuHeaderCol3Style = {
 // padding: "2px 8px",

  width: '10em',
};

const menuCol1Style = {

  width: '10em',
};

const menuCol2Style = {
  width: '10em',
};

const menuCol3Style = {

  width: '10em',
};

const toto = {  "background":"#bfd70e","borderRadius":"50%","width":"16px","height":"16px","border":"2px solid #679403"}
const Menu = (props) => {
  return (
    <Fragment>
 <tr>
<td><div style={menuHeaderCol1Style}>1st Clmn</div></td>
<td><div style={menuHeaderCol2Style}>2nd Clmn</div></td>

<td><div style={menuHeaderCol3Style}>3rd Clmn</div></td>
</tr>
      <components.Menu {...props}>
      {props.children}
      </components.Menu>
    </Fragment>
  );
};






export const CustomIndicator = ({ innerRef, innerProps ,data}) =>{   console.log("vovo",data)
return (

  <div ref={innerRef} {...innerProps} >{data.value}</div>)}
  
  
export default function Components() {
  return (
 <Select
  defaultValue={colourOptions[1]}
  options={groupedOptions}
  components={{Menu : Menu ,SingleValue: CustomIndicator}}
  isClearable
  styles={{
    singleValue: (styles, { data }) => ({ ...styles }),
    
  }}
    menuIsOpen={true}

  formatOptionLabel={(data) => {console.log("lolo",data); return (
    <tr>
    <td><div style={menuCol1Style}>{data.label}</div></td>
    <td><div style={menuCol2Style}>{data.color}</div></td>
    
    <td><div style={menuCol3Style}><div style= {toto}/> </div></td>
    </tr>
  )



}}  
  
  
  />  
);
}

